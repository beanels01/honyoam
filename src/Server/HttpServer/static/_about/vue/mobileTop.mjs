let top={
    data:()=>({
        focus:0,
    }),
    methods:{
        click(a){
            this.focus=0
            this.$emit('input',a)
        }
    },
    props:[
        'value',
        'language',
    ],
    template:`
        <div class=mobileTop>
            <div class=a><div>
                <div class=n>
                    {{language.about.top.aboutUs}}
                </div>
                <div class=o>
                    ABOUT US
                </div>
            </div></div>
            <div class=b>
                {{language.about.top.aboutUs}} > <span class=n>{{language.about.top.aboutUs}}</span>
            </div>
            <div class=c>
                <div
                    class=n
                    @click="focus=!focus"
                >
                    <div class=a>
                        {{{
                            summary:language.about.top.summary,
                            service:language.about.top.service,
                            idea:language.about.top.idea,
                        }[value]}}
                    </div>
                    <div class=b>
                        {{
                            focus?'^':'v'
                        }}
                    </div>
                </div>
                <div
                    class=o
                    v-if=focus
                >
                    <div
                        :class="{focus:value=='summary'}"
                        @click="click('summary')"
                    >{{language.about.top.summary}}</div>
                    <div
                        :class="{focus:value=='service'}"
                        @click="click('service')"
                    >{{language.about.top.service}}</div>
                    <div
                        :class="{focus:value=='idea'}"
                        @click="click('idea')"
                    >{{language.about.top.idea}}</div>
                </div>
            </div>
        </div>
    `
}
export default top
