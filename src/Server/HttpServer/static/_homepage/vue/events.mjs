let selectOption={
    computed:{
        date(){
            return new Date(this.value.date)
        },
    },
    props:['value'],
    template:`
        <div
            class=a
            @click="$emit('click')"
        >
            <div class=n>
                <div class=a>{{date.getDate()}}</div>
                <div class=b>{{date.toDateString().substring(4,7).toUpperCase()}}</div>
            </div>
            <div class=o>
                <div class=a>{{value.title}}</div>
                <div class=b>{{value.time}}</div>
            </div>
            <div class=p>
                <img src=img/ie_icon01.png>
            </div>
        </div>
    `
}
let events={
    components:{
        selectOption,
    },
    data:()=>({
        focus:0,
    }),
    methods:{
        href(id){
            return`${this.data.href}/${id}`
        },
    },
    props:['data','content'],
    template:`
        <div class=events>
            <div class=n>
                <div class=a>
                    <div class=n>
                        <div class=a>說明會</div>
                        <div class=b>EVENTS</div>
                    </div>
                    <div class=o></div>
                    <div class=p>
                        <selectOption
                            v-for="(e,i) in content"
                            :class="{focus:focus==i}"
                            @click="focus=i"
                            :value=e
                        ></selectOption>
                    </div>
                    <div class=q></div>
                    <div class=r>
                        <div class=a>
                            <div class=title>{{content[focus].title}}</div>
                            <div class=line></div>
                            <div class=content>
                                <div class=a>{{content[focus].subtitle}}</div>
                                <div class=b>{{content[focus].content}}</div>
                            </div>
                            <div class=more>
                                <a :href="href(content[focus].seminar)">
                                    了解更多
                                    <img src=img/ie_icon03.png>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default events
