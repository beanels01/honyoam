import fs from              'fs'
import mongodb from         'mongodb'
import rowToObject from     './parse/rowToObject'
import fileExistByPath from './parse/fileExistByPath'
import place from           './place'
import parseVeki from       './parse/parseVeki'
let{
    MongoClient,
    ObjectID,
    Binary,
}=mongodb
let
    inputDir=process.argv[2],
    outputDir=process.argv[3],
    veki=parseVeki()
let a=fs.readFileSync(`${inputDir}/homenavi_all.csv`).toString().match(
    /"[^"]*"(,"[^"]*")*/g
).slice(0,-1).map(a=>rowToObject(a,veki,inputDir)).filter(a=>{
    let b=0
    for(let i of place.place0)
        b=b||~a.language['zh-Hant'].place.indexOf(i)
    return b&&1500<=a.price
})
;(async(a)=>{
    let
        client=await MongoClient.connect('mongodb://localhost:27017'),
        db=client.db('honyoam'),
        col=db.collection('medieval')
    let databaseSet=new Set((await col.find({
        'source.type':'daikyo',
    },{
        projection:{secondId:1,_id:0}
    }).toArray()).map(a=>a.secondId))
    let inputSet=new Set(a.map(a=>a.secondId))
    //let unionSet=new Set([...databaseSet,..inputSet])
    let
        promise=[],
        operationCount={cut:0,put:0,set:0}
    for(let id of databaseSet)if(!inputSet.has(id)){
        promise.push(col.deleteOne({
            secondId:id
        }))
        operationCount.cut++
    }
    for(let o of a)
        if(databaseSet.has(o.secondId)){
            promise.push(col.updateOne({secondId:o.secondId},{$set:o}))
            operationCount.set++
        }else{
            promise.push(col.insertOne(o))
            operationCount.put++
        }
    console.log(operationCount)
    await Promise.all(promise)
    client.close()
})(a)
