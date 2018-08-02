let xRow={
    props:['data'],
    computed:{
        date(){
            return new Date(this.data.news.timestamp)
        },
        href(){
            return `${this.data.href}/${this.data.news._id}`
        },
    },
    template:`
        <div class=a>
            <div class=n>{{1900+date.getYear()}}年{{date.getMonth()}}月{{date.getDate()}}日</div>
            <div class=o>
                <div v-if="data.news.type=='normal'" class="tag gg">一般公告</div>
                <div v-if="data.news.type=='enews'" class="tag xg">E-News</div>
                <div v-if="data.news.type=='president'" class="tag shm">社長專欄</div>
                <div class=title><a :href=href>{{data.news.title}}</a></div>
            </div>
            <div class=title><a :href=href>{{data.news.title}}</a></div>
        </div>
    `
}
let news1={
    components:{xRow},
    props:['href','data'],
    computed:{
        dataOrderByDate(){
            return this.data.sort((a,b)=>
                new Date(b.timestamp)-new Date(a.timestamp)
            )
        },
    },
    template:`
        <div class=news1>
            <div class=a>
                <div class=n>最新消息</div>
                <div class=o>NEWS</div>
            </div>
            <div class=b>
                <div class=n>
                    <xRow class=b :data="{
                        news:dataOrderByDate[0],
                        href,
                    }"></xRow>
                    <div class=d><div></div></div>
                    <xRow
                        v-for="a in dataOrderByDate.slice(1)"
                        class=c
                        :data="{
                            news:a,
                            href,
                        }"
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
