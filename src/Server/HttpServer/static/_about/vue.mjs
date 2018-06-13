import homepageLike from    '../_homepageLike.mjs'
import top from             './vue/top.mjs'
import partner from         './vue/partner.mjs'
import summary from         './vue/summary.mjs'
let aMain={
    components:{
        hlFooter:           homepageLike.footer,
        hlMenu:             homepageLike.menu,
        hlHeader:           homepageLike.header,
        floatBall:          homepageLike.floatBall,
        aTop:               top,
        aPartner:           partner,
        companySummary:     summary,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
        focus:'service',
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
            <aTop
                v-model=focus
            ></aTop>
            <companySummary
                v-if="focus=='summary'"
            ></companySummary>
            <aPartner
                v-if="focus=='partner'"
            ></aPartner>
            <template v-if=!menu>
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
