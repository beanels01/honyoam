let enewsLikeContent={
    computed:{
        date(){
            return new Date(this.data.current.timestamp)
        }
    },
    props:['data',],
    template:`
        <div>
            <div class=a>
                <div class=a>
                    <span>{{
                        {
                            enews:'ENEWS',
                            president:'社長專欄',
                            success:'成功案例',
                        }[data.current.type]
                    }}</span>
                </div>
                <div class=b>
                    {{1900+date.getYear()}}年{{1+date.getMonth()}}月{{date.getDate()}}日
                </div>
            </div>
            <div class=b>
                {{data.current.title}}
            </div>
            <div class=c v-html=data.current.content></div>
            <div class=d>
                <div class=a>
                    <div v-if=data.previous @click="$emit('previous')">
                        <img src="/_news/img/num-l.png">
                        上一則<span class=a>：{{data.previous.title.slice(0,6)}}……</span>
                    </div>
                </div>
                <div class=b>
                    <div @click="$emit('back')">
                        回列表
                    </div>
                </div>
                <div class=c>
                    <div v-if=data.next @click="$emit('next')">
                        下一則<span class=a>：{{data.next.title.slice(0,6)}}……</span>
                        <img src="/_news/img/num-r.png">
                    </div>
                </div>
            </div>
        </div>
    `,
}
export default enewsLikeContent
