import fs from 'fs'
import fields from './fields'
fs.writeFileSync('parser/output/homenavi_all.json',JSON.stringify(
    fs.readFileSync('parser/input/homenavi_all.csv').toString().match(
        /"[^"]*"(,"[^"]*")*/g
    ).slice(0,-1).map(a=>{
        let o=JSON.parse(
            `[${a.replace(/\t/g,'\\t').replace(/\n/g,'\\n')}]`
        )
/*
不知道要參照哪裡的或者根本不在資料裡的：
    周圍地圖 Google Map embed URL
    停車場
    建物總樓層
    陽台面積
不確定的：
    修繕基金 ← 修繕積立金なしフラグ
    管理費 ← 管理費なしフラグ
    其他費用 ← その他費用
    樓層 ← 所在階、室所在階１、室所在階２、室所在階３、室所在階４
    總戶數 ← 棟総戸数
    朝向 ← バルコニー方向（主要採光面方向）
    土地用途 ← 物件用途
    土地權利 ← 土地権利／借地権種類
    所在地 ← 所在地名、所在地１、所在地２、所在地３
    構造 ← 構造材質
    交屋日 ← 成約年月日
    名稱 ← マンション名／建物名
    專有面積 ← 建物／専有／使用部分面積
還在研究：
    最近車站
    格局
    格局圖
    格局圖標題
    格局圖內文
*/
        return{
            version:0,
            publish:true,
            source:{type:'daikyo',id:o[1]},
            area:o[9],
            balconyArea:'',
            date:new Date,
            dateMonth:(+o[2])/100%100,
            /*
                o[97]
                1: 明治
                2: 大正
                3: 昭和
                4: 平成 1988+
            */
            dateYear:1988+(+o[2])/10000,
            gallery:[
                {url:'google.png'},
            ],
            householdCount:"100",
            image:{url:'google.png'},
            level:"100",
            managementFee:o[34],
            map:"0",
            otherFee:"100",
            pattern:"*格局*",
            place0:'',
            place1:'',
            price:o[6],
            repairFund:"100",
            language:{
                "zh-Hant" : {
                    "name": "*名稱*"
                    "videoId": "rNsgHMklBW0",
                    "patternContent": "<p>*格局圖內文*</p>",
                    "patternTitle": "*格局圖標題*",
                    "pattern": "5bb3ad2f8c0fb575c318987b",
                    "handInDate": "*交屋日*",
                    "right": "*土地權利*",
                    "usage": "*土地用途*",
                    "parkingLot": "*停車場*",
                    "direction": "*朝向*",
                    "situation":o[45],
                    "traffic": o[36],
                    "nearestStation": "*最近車站*",
                    "place": "*所在地*",
                    "manageMethod": o[137],
                    "levelCount": "*建物總樓層*",
                    "structure": "*構造*",
                }
            },
        }
    })
    // filter
    ,
    null,
    4
))
