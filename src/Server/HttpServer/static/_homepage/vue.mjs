import homepageLike from    '../_homepageLike.mjs'
import newProducts from     './vue/newProducts.mjs'
import success from         './vue/success.mjs'
import events from          './vue/events.mjs'
import search from          './vue/search.mjs'
import news1 from           './vue/news1.mjs'
let aMain={
    components:{
        hlFooter:   homepageLike.footer,
        hlMenu:     homepageLike.menu,
        hlHeader:   homepageLike.header,
        floatBall:  homepageLike.floatBall,
        search,
        newProducts,
        events,
        success,
        news1,
    },
    computed:{
        newsData(){
            return this.data.news.filter(a=>
                ['normal','enews','president'].includes(a.type)
            ).sort((a,b)=>
                new Date(b.date)-new Date(a.date)
            ).slice(0,6)
        },
        successData(){
            return this.data.news.filter(a=>
                a.type=='success'
            ).sort((a,b)=>
                new Date(b.timestamp)-new Date(a.timestamp)
            ).slice(0,5)
        },
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
    }),
    methods:{
        search(v){
            if(!v.type)
                return
            location=`${this.href[v.type]}?a=${encodeURIComponent(JSON.stringify(v))}`
        },
    },
    props:['data','language','currentLanguage','homepage','mainSeminar'],
    template:`
        <div id=main>
            <hlHeader
                shadow=1
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
                v-model=menu
            ></hlHeader>
            <template v-if=!menu>
                <search
                    :mission=homepage.mission
                    @search=search
                    :data="{
                        language:language.homepage.search,
                    }"
                ></search>
                <newProducts
                    :rotation=homepage.rotation
                    :href=href
                    :data="{
                        language:language.homepage.hottest,
                    }"
                ></newProducts>
                <news1
                    :href=href.news
                    :data="{
                        data:newsData,
                        language:language.homepage.news,
                    }"
                ></news1>
                <events
                    :content=homepage.event
                    :data="{
                        href:href.seminar,
                        language:language.homepage.seminar,
                    }"
                ></events>
                <success
                    :data="{
                        data:successData,
                        language:language.homepage.caseStudy,
                    }"
                    :href=href.news
                ></success>
                <div class=about0>
                    <div class=a>{{language.homepage.aboutUs.aboutUs}}</div>
                    <div class=b>ABOUT US</div>
                    <div class=c>{{language.homepage.aboutUs.text0}}</div>
                </div>
                <a class=about1 :href=href.about>
                    <div class=n>
                        <div class=a><div><div>
                            <img src=img/a01.png><br>
                            {{language.homepage.aboutUs.text1}}
                        </div></div></div>
                        <div class=b><div><div>
                            <img src=img/a02.png><br>
                            {{language.homepage.aboutUs.text2}}
                        </div></div></div>
                        <div class=c><div><div>
                            <img src=img/a03.png><br>
                            {{language.homepage.aboutUs.text3}}
                        </div></div></div>
                    </div>
                    <div class=vl></div>
                </a>
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
                :language=language
                :current=data.current
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
            :homepage=homepage
            :mainSeminar=mainSeminar
        ></aMain>
    `
}
