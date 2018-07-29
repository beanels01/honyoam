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
            ).slice(0,6)
        },
        successData(){
            return this.data.news.filter(a=>
                a.type=='success'
            ).slice(0,5)
        },
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
    }),
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
                <search :mission=homepage.mission></search>
                <newProducts
                    :rotation=homepage.rotation
                    :href=href
                ></newProducts>
                <news1
                    :href=href.news
                    :data=newsData
                ></news1>
                <events
                    :content=homepage.event
                    :data="{
                        href:href.seminar
                    }"
                ></events>
                <success
                    :data=successData
                    :href=href.news
                ></success>
                <div class=about0>
                    <div class=a>關於我們</div>
                    <div class=b>ABOUT US</div>
                    <div class=c>秉持專業、熱忱，透過團隊的力量，跨越不同文化與國界，為客戶提供貼心、安全、優質的不動產投資顧問、仲介及資產管理服務。</div>
                </div>
                <div class=about1>
                    <div class=n>
                        <div class=a><div><div>
                            <img src=img/a01.png><br>
                            本葉在日本及台灣皆有據點；
                            除了基本物件買賣，更提供投資及租賃管理。
                        </div></div></div>
                        <div class=b><div><div>
                            <img src=img/a02.png><br>
                            我們的服務不侷限於臺日兩地，中國，香港及遠至美國的華人圈，
                            我們也同樣提供專業的日本物件投資服務。
                        </div></div></div>
                        <div class=c><div><div>
                            <img src=img/a03.png><br>
                            本葉國際立足亞洲，放眼全世界，
                            成為世界各地投資者的橋樑是本葉的宗旨及使命。
                        </div></div></div>
                    </div>
                    <div class=vl></div>
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
