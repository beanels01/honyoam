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
    props:['value'],
    template:`
        <div class=mobileTop>
            <div class=a><div>
                <div class=n>
                    關於我們
                </div>
                <div class=o>
                    ABOUT US
                </div>
            </div></div>
            <div class=b>
                首頁 > <span class=n>關於我們</span>
            </div>
            <div class=c>
                <div
                    class=n
                    @click="focus=!focus"
                >
                    <div class=a>
                        {{{
                            summary:'公司簡介',
                            service:'服務項目',
                            partner:'合作夥伴',
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
                    >公司簡介</div>
                    <div
                        :class="{focus:value=='service'}"
                        @click="click('service')"
                    >服務項目</div>
                    <div
                        :class="{focus:value=='partner'}"
                        @click="click('partner')"
                    >合作夥伴</div>
                </div>
            </div>
        </div>
    `
}
export default top
