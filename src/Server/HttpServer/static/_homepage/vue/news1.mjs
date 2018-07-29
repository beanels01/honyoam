let xRow={
    props:['data'],
    computed:{
        date(){
            return new Date(this.data.timestamp)
        }
    },
    template:`
        <div class=a>
            <div class=n>{{1900+date.getYear()}}年{{date.getMonth()}}月{{date.getDate()}}日</div>
            <div class=o>
                <div v-if="data.type=='normal'" class="tag gg">一般公告</div>
                <div v-if="data.type=='enews'" class="tag xg">E-News</div>
                <div v-if="data.type=='president'" class="tag shm">社長專欄</div>
                <div class=title>{{data.title}}</div>
            </div>
            <div class=title>{{data.title}}</div>
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
    props:['href','data'],
    template:`
        <div class=news1>
            <div class=a>
                <div class=n>最新消息</div>
                <div class=o>NEWS</div>
            </div>
            <div class=b>
                <div class=n>
                    <xRow class=b :data=data[0]></xRow>
                    <div class=d><div></div></div>
                    <xRow
                        v-for="a in data.slice(1)"
                        class=c
                        :data=a
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
