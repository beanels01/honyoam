import homepageLike from    '../_homepageLike.mjs'
import top from             './vue/top.mjs'
import summary from         './vue/summary.mjs'
import service from         './vue/service.mjs'
import idea from            './vue/outline.mjs'
import mobileTop from       './vue/mobileTop.mjs'
let aMain={
    components:{
        hlFooter:           homepageLike.footer,
        hlMenu:             homepageLike.menu,
        hlHeader:           homepageLike.header,
        floatBall:          homepageLike.floatBall,
        aTop:               top,
        aService:           service,
        companySummary:     summary,
        aIdea:              idea,
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
                    :currentLanguage=currentLanguage
                ></companySummary>
                <aService
                    v-if="focus=='service'"
                    :language=language.about.service
                ></aService>
                <aIdea
                    v-if="focus=='outline'"
                    :language=language.about.outline
                ></aIdea>
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
