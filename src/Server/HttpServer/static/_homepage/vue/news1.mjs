let xRow={
    props:['value'],
    template:`
        <div class=a>
            <div class=n>{{value.time}}</div>
            <div class=o>
                <div v-if="value.tag=='gg'" class="tag gg">公告訊息</div>
                <div v-if="value.tag=='xg'" class="tag xg">相關報導</div>
                <div v-if="value.tag=='shm'" class="tag shm">說明會</div>
                <div class=title>{{value.title}}</div>
            </div>
            <div class=title>{{value.title}}</div>
        </div>
    `
}
let data={
    value:{
        top:{
            time:'2017年11月12日',
            tag:'xg',
            title:'【日本地產投資持續發燒 本葉國際讓您抓準獲利契機 日本三大地產巨頭聯手新案登台】說明會 ~ 搶先報名',
        },
        array:[
            {
                time:'2016年3月24日',
                tag:'gg',
                title:'本葉台灣辦公室地址搬遷',
            },
            {
                time:'2017年11月12日',
                tag:'shm',
                title:'11/12說明會圓滿結束',
            },
            {
                time:'2017年11月13日',
                tag:'xg',
                title:'「INITIA 新宿早稻田」~ 恭喜 A戶 1LDK 邊間成交 ~',
            },
            {
                time:'2017年11月13日',
                tag:'gg',
                title:'日本不動產現場環境介紹影片系統正式啟動',
            },
            {
                time:'2017年8月26日',
                tag:'shm',
                title:'日本投資說明會圓滿落幕',
            },
        ],
    },
}
let news1={
    components:{xRow},
    data:()=>data,
    props:['href'],
    template:`
        <div class=news1>
            <div class=a>
                <div class=n>最新消息</div>
                <div class=o>NEWS</div>
            </div>
            <div class=b>
                <div class=n>
                    <xRow class=b :value=value.top></xRow>
                    <div class=d><div></div></div>
                    <xRow
                        v-for="a in value.array"
                        class=c
                        :value=a
                    ></xRow>
                </div>
                <div class=o>
                    <a :href=href>
                        更多消息
                        <img class=a src=img/na01.png>
                        <img class=b src=img/na02.png>
                    </a>
                </div>
            </div>
        </div>
    `
}
export default news1
