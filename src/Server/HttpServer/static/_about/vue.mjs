import homepageLike from    '../_homepageLike.mjs'
import top from             './vue/top.mjs'
import partner from         './vue/partner.mjs'
import summary from         './vue/summary.mjs'
import service from         './vue/service.mjs'
import mobileTop from       './vue/mobileTop.mjs'
let aMain={
    components:{
        hlFooter:           homepageLike.footer,
        hlMenu:             homepageLike.menu,
        hlHeader:           homepageLike.header,
        floatBall:          homepageLike.floatBall,
        aTop:               top,
        aPartner:           partner,
        aService:           service,
        companySummary:     summary,
        mobileTop,
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
            <mobileTop
                :language=language
                v-model=focus
            ></mobileTop>
            <aTop
                :language=language
                v-model=focus
            ></aTop>
            <companySummary
                v-if="focus=='summary'"
                :language=language.about.summary
            ></companySummary>
            <aService
                v-if="focus=='service'"
                :language=language.about.service
            ></aService>
            <aPartner
                v-if="focus=='partner'"
                :language=language.about.partner
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
