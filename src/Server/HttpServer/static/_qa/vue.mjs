import homepageLike from    '../_homepageLike.mjs'
import faq from             './vue/faq.mjs'
import feedback from        './vue/feedback.mjs'
let aMain={
    components:{
        hlHeader:   homepageLike.header,
        hlMenu:     homepageLike.menu,
        faq,
        hlFooter:   homepageLike.footer,
        floatBall:  homepageLike.floatBall,
        feedback,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:           0,
    }),
    props:[
        'data',
        'language','currentLanguage','classes','faq','mainSeminar',
    ],
    template:`
        <div id=main>
            <hlHeader
                shadow=1
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                v-model=menu
                :mainSeminar=mainSeminar
            ></hlHeader>
            <template v-if=!menu>
                <div class=static>
                    <div>
                        <div class=a>客服Q&A</div>
                        <div class=b>CUSTOMER SERVICE</div>
                    </div>
                </div>
                <div class=a>
                    <div class=n>首頁 > <a class=a>客服Q&A</a></div>
                    <faq
                        :language=language
                        :classes=classes
                        :faq=faq
                    ></faq>
                    <div class=hb></div>
                    <feedback></feedback>
                </div>
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
            :classes=classes
            :faq=faq
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
