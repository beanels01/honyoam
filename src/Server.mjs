import fs from              'fs'
import https from           'https'
import MongoClient from     './Server/MongoClient'
import HttpServer from      './Server/HttpServer'
import methods from         './Server/methods'
function getStringContentByResponse(res){
    return new Promise(rs=>{
        let a=[]
        res.on('data',[].push.bind(a))
        res.on('end',()=>rs(Buffer.concat(a).toString()))
    })
}
function Server(config){
    this.config=config
    this.data={
        rate:{
            cny:0,
            ntd:0,
            usd:0,
            jpy:0,
        },
    }
    if(!('dev' in this.config.mongo))
        this.config.mongo.dev=this.config.dev
    if(!('dev' in this.config.http))
        this.config.http.dev=this.config.dev
    this.invitationCode={
         register:      Math.random().toString(36).substr(2,8),
         resetPassword: Math.random().toString(36).substr(2,8),
    }
    this.flow={
        register:Promise.resolve(),
    }
    this.load=(async()=>{
        await Promise.all([
            ensureDirectory('static'),
            ensureDirectory('static/image'),
            ensureDirectory('upload'),
        ])
        this.honyoamMongoClient=new MongoClient(config.mongo)
        await this.honyoamMongoClient.load
        this.honyoamHttpServer=new HttpServer(config.http)
        this.honyoamHttpServer.on('request',r=>
            r.res=this.handleRequest(r.doc)
        )
    })()
    let getRate=()=>{
        https.get('https://rate.bot.com.tw/xrt/flcsv/0/day',async res=>{
            let rate=(await getStringContentByResponse(res)).split(
                '\n'
            ).map(s=>s.split(','))
            let ntd=+rate.filter(a=>a[0]=='JPY')[0][2]
            this.data.rate={
                cny:ntd/rate.filter(a=>a[0]=='CNY')[0][3],
                jpy:1,
                ntd,
                usd:ntd/rate.filter(a=>a[0]=='USD')[0][3],
            }
        })
    }
    getRate()
    setInterval(getRate,60*60*1000)
}
Server.prototype.handleRequest=async function(doc){
    if(doc.method in methods)
        return methods[doc.method].call(this,doc)
    throw Error('undefinedMethodBug')
}
async function ensureDirectory(path){
    try{
        await fs.promises.mkdir(path)
    }catch(e){
        if(!(e.code=='EEXIST'))
            throw e
    }
}
export default Server
