let xRow={
    props:['data'],
    computed:{
        date(){
            return new Date(this.data.news.date)
        },
        href(){
            return `${this.data.href}/${this.data.news._id}`
        },
    },
    template:`
        <div class=a>
            <div class=n>{{1900+date.getYear()}}年{{1+date.getMonth()}}月{{date.getDate()}}日</div>
            <div class=o>
                <div v-if="data.news.type=='normal'" class="tag gg">{{
                    data.language[data.news.type]
                }}</div>
                <div v-if="data.news.type=='enews'" class="tag xg">{{
                    data.language[data.news.type]
                }}</div>
                <div v-if="data.news.type=='president'" class="tag shm">{{
                    data.language[data.news.type]
                }}</div>
                <div class=title><a :href=href>{{data.news.title}}</a></div>
            </div>
            <div class=title><a :href=href>{{data.news.title}}</a></div>
        </div>
    `
}
let news1={
    components:{xRow},
    props:['href','data'],
    template:`
        <div class=news1>
            <div class=a>
                <div class=n>{{data.language.news}}</div>
                <div class=o>NEWS</div>
            </div>
            <div class=b>
                <div class=n>
                    <xRow class=b :data="{
                        news:data.data[0],
                        href,
                        language:data.language,
                    }"></xRow>
                    <div class=d><div></div></div>
                    <xRow
                        v-for="a in data.data.slice(1)"
                        class=c
                        :data="{
                            news:a,
                            href,
                            language:data.language,
                        }"
                    ></xRow>
                </div>
                <div class=o>
                    <a :href=href>
                        {{data.language.moreNews}}
                        <img class=a src=img/na01.png>
                        <img class=b src=img/na02.png>
                    </a>
                </div>
            </div>
        </div>
    `
}
export default news1
