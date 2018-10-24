let enewsLikeContent={
    computed:{
        date(){
            return new Date(this.data.data.current.date)
        }
    },
    props:['data',],
    template:`
        <div>
            <div class=a>
                <div class=a>
                    <span>{{
                        data.language.type[data.data.current.type]
                    }}</span>
                </div>
                <div class=b>
                    {{1900+date.getYear()}}年{{1+date.getMonth()}}月{{date.getDate()}}日
                </div>
            </div>
            <div class=b>
                {{data.data.current.title}}
            </div>
            <div class=c v-html=data.data.current.content></div>
            <div class=d>
                <div class=a>
                    <div v-if=data.data.previous @click="$emit('previous')">
                        <img src="/_news/img/num-l.png">
                        {{data.language.previous}}<span class=a>：{{data.data.previous.title.slice(0,6)}}……</span>
                    </div>
                </div>
                <div class=b>
                    <div @click="$emit('back')">
                        {{data.language.back}}
                    </div>
                </div>
                <div class=c>
                    <div v-if=data.data.next @click="$emit('next')">
                        {{data.language.next}}<span class=a>：{{data.data.next.title.slice(0,6)}}……</span>
                        <img src="/_news/img/num-r.png">
                    </div>
                </div>
            </div>
        </div>
    `,
}
export default enewsLikeContent
