import fs from 'fs'
//import fields from './parse/fields'
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
).slice(0,-1).map(rowToObject).filter(a=>{
    let b=0
    for(let i of[
        '東京都',
        '千葉県',
        '神奈川県',
        '埼玉県',
        '名古屋市',
        '大阪府',
        '京都府',
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
        dateYear:{
            1:1867,
            2:1911,
            3:1925,
            4:1988,
        }[a[97]]+~~((+a[2])/10000),
        gallery:[],
        householdCount:+a[63],
        image:{url:`daikyo/photo/${id}.jpg`},
        level:+a[61],
        managementFee:+a[34],
        map:"0",
        otherFee:+a[99],
        pattern:{
            2:'K',
            3:'DK',
            4:'LK',
            5:'LDK',
            6:'SK',
            7:'SDK',
            8:'SLK',
            9:'SLDK',
        }[a[20]],
        place0:'',
        place1:'',
        price:+a[6],
        repairFund:+a[98],
        language:{
            'zh-Hant':{
                name:a[33],
                patternContent:'',
                patternTitle:'',
                pattern:{url:`daikyo/madori/${id}.jpg`},
                handInDate:{
                    1:'即時',
                    2:'相談',
                    3:'期日指定',
                }[a[48]]+' '+a[49],
                right:{
                    1:'所有権',
                    2:'旧法地上',
                    3:'旧法賃借',
                    4:'普通地上',
                    5:'定期地上',
                    6:'普通賃借',
                    7:'定期賃借',
                }[a[51]],
                usage:{
                    1:'第一種低層住居専用地域',
                    2:'第二種中高層住居専用地域',
                    3:'第二種住居地域',
                    4:'近隣商業地域',
                    5:'商業地域',
                    6:'準工業地域',
                    7:'工業地域',
                    8:'工業専用地域',
                    10:'第二種低層住居専用地域',
                    11:'第一種中高層住居専用地域',
                    12:'第一種住居地域',
                    13:'準住居地域',
                    99:'無指定',
                }[a[50]],
                parkingLot:{
                    1:'空有',
                    2:'空無',
                    3:'近隣',
                    4:'無',
                }[a[58]],
                direction:{
                    1:'北',
                    2:'北東',
                    3:'東',
                    4:'南東',
                    5:'南',
                    6:'南西',
                    7:'西',
                    8:'北西',
                }[a[64]],
                situation:{
                    1:'居住中',
                    2:'空家',
                    3:'賃貸中',
                    4:'未完成',
                }[a[45]],
                traffic:a[36],
                nearestStation:'',
                place:a[35],
                manageMethod:a[137],
                levelCount:(+a[59])+(+a[60]),
                structure:{
                    1:'木造',
                    2:'ブロック',
                    3:'鉄骨造',
                    4:'ＲＣ',
                    5:'ＳＲＣ',
                    6:'ＰＣ',
                    7:'ＨＰＣ',
                    8:'軽量鉄骨',
                    9:'その他',
                }[a[85]],
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