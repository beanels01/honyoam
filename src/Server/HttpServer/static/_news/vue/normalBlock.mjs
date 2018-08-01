let normalBlock={
    computed:{
        date(){
            return new Date(this.data.timestamp)
        }
    },
    props:['data','value',],
    template:`
        <div
            :class="{focus:value}"
            @click="$emit('click')"
        >
            <div class=a>
                <div class=a>
                    {{1900+date.getYear()}}年{{1+date.getMonth()}}月{{date.getDate()}}日
                </div>
                <div class=b><span>一般公告</span></div>
            </div>
            <div class=b>
                <div
                    class=b
                    @click="$emit('input',!value)"
                >
                    <div
                        class=a
                    >
                        {{data.title}}
                    </div>
                    <div class=b>
                        <img class=a src=/_news/img/arrow.png>
                        <img class=b src=/_news/img/arrow-focus.png>
                    </div>
                </div>
                <div
                    class=c
                    v-html=data.content
                ></div>
            </div>
        </div>
    `
}
export default normalBlock
