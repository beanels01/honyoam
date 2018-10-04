import fs from 'fs'
import fields from './parser/fields'
import mongodb from 'mongodb'
let{
    MongoClient,
    ObjectID,
    Binary,
}=mongodb
let
    g500='/run/media/anliting/9fe45acf-ad7f-498a-b374-03f69e45727f',
    inputDir=`${g500}/daikyo_1`,
    outputDir=`${g500}/daikyo_2`
let a=fs.readFileSync(`${inputDir}/homenavi_all.csv`).toString().match(
    /"[^"]*"(,"[^"]*")*/g
).slice(0,-1).map(rowToObject)
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
function rowToObject(s){
    let
        a=JSON.parse(`[${s.replace(/\t/g,'\\t').replace(/\n/g,'\\n')}]`),
        id=a[1]
/*
    最近車站
    格局
    格局圖
    格局圖標題
    格局圖內文
    建物總樓層
    停車場
*/
    let x={
        version:0,
        publish:true,
        source:{type:'daikyo',id},
        area:a[9],
        balconyArea:a[10],
        date:new Date,
        dateMonth:~~((+a[2])/100%100),
        /*
            o[97]
            1: 明治
            2: 大正
            3: 昭和
            4: 平成 1988+
        */
        dateYear:1988+~~((+a[2])/10000),
        gallery:[],
        householdCount:a[63],
        image:{url:`daikyo/photo/${id}.jpg`},
        level:a[61],
        managementFee:a[34],
        map:"0",
        otherFee:+a[99],
        pattern:'',
        place0:'',
        place1:'',
        price:+a[6],
        repairFund:+a[98],
        language:{
            "zh-Hant":{
                name:a[33],
                patternContent:'',
                patternTitle:'',
                pattern:{url:`daikyo/madori/${id}.jpg`},
                handInDate:a[48]+a[49],
                right:a[51],
                usage:a[50],
                parkingLot:a[58],
                direction:a[64],
                situation:a[45],
                traffic:a[36],
                nearestStation:'',
                place:a[35],
                manageMethod:a[137],
                levelCount:a[59]+a[60],
                structure:a[85],
                videoId:"rNsgHMklBW0",
            }
        },
    }
    for(let i=0;i<10;i++){
        let p=`photo${i==0?'':i+1}/${id}.jpg`
        if(fileExistByPath(`${inputDir}/${p}`))
            x.gallery.push({url:`daikyo/${p}`})
    }
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
function fileExistByPath(p){
    try{
        fs.statSync(p)
    }catch(e){
        return 0
    }
    return 1
}
function copyExist(a,b){
    if(fileExistByPath(a))
        fs.copyFileSync(a,b)
}
