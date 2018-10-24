let enewsLikeBlock={
    computed:{
        date(){
            return new Date(this.data.data.date)
        }
    },
    props:['data'],
    template:`
        <div
            @click="$emit('click')"
        >
            <div class=a><div>
                <div class=a>
                    {{1900+date.getYear()}}年{{1+date.getMonth()}}月{{date.getDate()}}日
                </div>
                <div class=b><span>{{
                    data.language[data.data.type]
                }}</span></div>
            </div></div>
            <div class=b>
                <div class=b>
                    <div class=a>{{data.data.title}}</div>
                    <div class=b>More +</div>
                </div>
            </div>
        </div>
    `
}
export default enewsLikeBlock
