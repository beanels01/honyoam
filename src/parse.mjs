import fs from              'fs'
import mongodb from         'mongodb'
import rowToObject from     './parse/rowToObject'
import fileExistByPath from './parse/fileExistByPath'
let{
    MongoClient,
    ObjectID,
    Binary,
}=mongodb
let
    g500='/run/media/anliting/9fe45acf-ad7f-498a-b374-03f69e45727f',
    inputDir=process.argv[2],
    outputDir=`${g500}/daikyo_2`,
    veki=parseVeki()
let a=fs.readFileSync(`${inputDir}/homenavi_all.csv`).toString().match(
    /"[^"]*"(,"[^"]*")*/g
).slice(0,-1).map(a=>rowToObject(a,veki,inputDir)).filter(a=>{
    let b=0
    for(let i of[
        '東京都',
        '神奈川県',
        '千葉県',
        '埼玉県',
        '大阪府',
        '京都府',
        '名古屋市',
        '福岡市',
    ])
        b=b||~a.language['zh-Hant'].place.indexOf(i)
    return b&&1500<=a.price
})
console.log(a.length)
;(async()=>{
    let client=await MongoClient.connect("mongodb://localhost:27017")
    let db=client.db('honyoam')
    let col=db.collection('medieval')
    await col.deleteMany({
        'source.type':'daikyo'
    })
    await Promise.all(a.map(a=>
        col.insertOne(a)
    ))
    client.close()
})()
function parseVeki(){
    let x={}
    let a=fs.readFileSync(`honyoam/src/parse/150130_veki.csv`).toString().split('\n')
    a.pop()
    a.map(a=>{
        a=a.split(',')
        x[a[0]+a[1]+a[2]]=`${a[3]} ${a[5]}`
    })
    return x
}
function filterImage(){
    fs.mkdirSync(`${outputDir}/madori`)
    for(let i=0;i<10;i++)
        fs.mkdirSync(`${outputDir}/photo${i?i+1:''}`)
    a.map(a=>{
        copyExist(`${inputDir}/madori/${a.source.id}.jpg`,`${outputDir}/madori/${a.source.id}.jpg`)
        for(let i=0;i<10;i++){
            let
                inPath=`${inputDir}/photo${i?i+1:''}/${a.source.id}.jpg`,
                outPath=`${outputDir}/photo${i?i+1:''}/${a.source.id}.jpg`
            copyExist(inPath,outPath)
        }
    })
}
function copyExist(a,b){
    if(fileExistByPath(a))
        fs.copyFileSync(a,b)
}
