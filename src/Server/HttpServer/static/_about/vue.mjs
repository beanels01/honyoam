import homepageLike from    '../_homepageLike.mjs'
let aMain={
    components:{
        hlFooter:   homepageLike.footer,
        hlMenu:     homepageLike.menu,
        hlHeader:   homepageLike.header,
        floatBall:  homepageLike.floatBall,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
    }),
    props:['language','currentLanguage','mainSeminar'],
    template:`
        <div id=main>
            <hlHeader
                shadow=1
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
                v-model=menu
            ></hlHeader>
            <template v-if=!menu>
                <div class=a>
                    <div class=n>
                        <img src=/_about/img/logo.png>
                    </div>
                    <div class=o>
                    </div>
                    <div class=p>
                        <div class=a>
                        </div>
                        <div class=a>
                        </div>
                        <div class=a>
                        </div>
                    </div>
                    <div class=q>
                    </div>
                    <div class=r>
                    </div>
                    <div class=s>
                    </div>
                    <div class=t>
                    </div>
                    <div class=u>
                    </div>
                    <div class=v>
                    </div>
                    <div class=w>
                    </div>
                </div>
                <hlFooter
                    :language=language.homepageLike.footer
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
            </template>
            <hlMenu
                v-if=menu
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
            :language=language
            :currentLanguage=currentLanguage
            :mainSeminar=mainSeminar
        ></aMain>
    `
}
