import fs from              'fs'
import MongoClient from     './Server/MongoClient'
import HttpServer from      './Server/HttpServer'
import methods from         './Server/methods'
function Server(config){
    this.config=config
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
