import homepageLike from    '../_homepageLike.mjs'
import loan from            './vue/loan.mjs'
let aMain={
    components:{
        hlFooter:           homepageLike.footer,
        hlMenu:             homepageLike.menu,
        hlHeader:           homepageLike.header,
        floatBall:          homepageLike.floatBall,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
        a00:'',
        a01:'',
        a02:'',
        a10:'',
        a11:'',
        a12:'',
        a13:'2',
        a20:'',
        a21:'',
        a22:'',
        a23:'',
        a24:'',
        output0:'',
        output1:'',
        output2:'',
    }),
    methods:{
        calc0(){
            let
                a0=+this.a00,a1=+this.a01,a2=+this.a02,
                x=loan.f0(a0*1e4,a1/12/100,a2*12)
            this.output0=`每月需攤還本息：${Math.round(x)} 元
`
        },
        calc1(){
            let
                a0=+this.a10,a1=+this.a11,a2=+this.a12,a3=+this.a13,
                x=loan.f1(a0*1e4,a1/12/100,a2*12,a3*12)
            this.output1=`寬限期內月繳利息：${Math.round(x[0])} 元
寬限期後月繳本金+利息：${Math.round(x[1])} 元
`
        },
        calc2(){
            let
                a0=+this.a20,a1=+this.a21,a2=+this.a22,a3=+this.a23,
                a4=+this.a24,
                x=loan.f2(
                    a0*1e4,a1*12,a2/12/100,a3/12/100,a4/12/100
                )
            this.output2=`第一年每月貸款償還金額：${Math.round(x[0])} 元
第二年每月貸款償還金額：${Math.round(x[1])} 元
第三以後年每月貸款償還金額：${Math.round(x[2])} 元
`
        },
    },
    props:['data','language','currentLanguage','mainSeminar'],
    template:`
        <div id=main>
            <hlHeader
                shadow=1
                :language=language
                :current=data.current
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
                v-model=menu
            ></hlHeader>
            <template v-if=!menu>
                <div class=a><div class=a>
                    <div class=a>
                        <div class=title>本息平均攤還試算</div>
                        <div class=input>
                            貸款金額 <input v-model=a00> 萬元
                        </div>
                        <div class=input>
                            銀行貸款利率 <input v-model=a01> %
                        </div>
                        <div class=input>
                            貸款總年數 <input v-model=a02> 年
                        </div>
                        <button @click=calc0>我要試算</button>
                        <div class=resultTitle v-if=output0>試算結果</div>
                        <div class=result>{{output0}}</div>
                    </div>
                    <div class=a>
                        <div class=title>有還本寬限期貸款試算</div>
                        <div class=input>
                            貸款金額 <input v-model=a10> 萬元
                        </div>
                        <div class=input>
                            銀行貸款利率 <input v-model=a11> %
                        </div>
                        <div class=input>
                            貸款總年數 <input v-model=a12> 年
                        </div>
                        <div class=input>
                            只還利息不還本金的寬限期 <select v-model=a13>
                                <option value=0>0</option>
                                <option value=1>1</option>
                                <option value=2>2</option>
                                <option value=3>3</option>
                            </select> 年
                        </div>
                        <button @click=calc1>我要試算</button>
                        <div class=resultTitle v-if=output1>試算結果</div>
                        <div class=result>{{output1}}</div>
                    </div>
                    <div class=a>
                        <div class=title>三階段調息月付額試算</div>
                        <div class=input>
                            貸款金額 <input v-model=a20> 萬元
                        </div>
                        <div class=input>
                            貸款總年數 <input v-model=a21> 年
                        </div>
                        <div class=input>
                            第一年貸款年利率 <input v-model=a22> %
                        </div>
                        <div class=input>
                            第二年貸款年利率 <input v-model=a23> %
                        </div>
                        <div class=input>
                            第三年貸款年利率 <input v-model=a24> %
                        </div>
                        <button @click=calc2>我要試算</button>
                        <div class=resultTitle v-if=output2>試算結果</div>
                        <div class=result>{{output2}}</div>
                    </div>
                </div></div>
                <hlFooter
                    :language=language.homepageLike.footer
                    :currentLanguage=currentLanguage
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
            </template>
            <hlMenu
                v-if=menu
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
            ></hlMenu>
        </div>
    `,
}
export default{
    components:{aMain},
    template:`
        <aMain
            :data=data
            :language=language
            :currentLanguage=currentLanguage
            :mainSeminar=mainSeminar
        ></aMain>
    `
}
