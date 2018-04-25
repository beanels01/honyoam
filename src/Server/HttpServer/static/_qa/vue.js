import homepageLike from    '../_homepageLike.js'
import faq from             './vue/faq.js'
import feedback from        './vue/feedback.js'
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
    props:['language','currentLanguage','classes','faq'],
    template:`
        <div id=main>
            <template v-if=!menu>
                <div class=static>
                    <div>
                        <div class=a>客服Q&A</div>
                        <div class=b>CUSTOMER Q&A</div>
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
            ></hlMenu>
            <hlHeader
                :language=language
                :currentLanguage=currentLanguage
                v-model=menu
            ></hlHeader>
        </div>
    `,
}
export default{
    components:{aMain},
    template:`
        <aMain
            :language=language
            :currentLanguage=currentLanguage
            :classes=classes
            :faq=faq
        ></aMain>
    `,
}
