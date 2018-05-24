import homepageLike from    '../_homepageLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
let aMain={
    components:{
        hlFooter:               homepageLike.footer,
        hlMenu:                 homepageLike.menu,
        hlHeader:               homepageLike.header,
        floatBall:              homepageLike.floatBall,
        houseSearch:            homepageLike.houseSearch,
        homepageLikeHouseList:  homepageLike.houseList,
        mightLike:              homepageLike.mightLike,
        presaleLikeTop:         presaleLike.top,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
    }),
    props:['language','currentLanguage','data','mainSeminar'],
    template:`
        <div id=main>
            <hlHeader
                shadow=1
                :language=language
                :currentLanguage=currentLanguage
                v-model=menu
                :mainSeminar=mainSeminar
            ></hlHeader>
            <template v-if=!menu>
                <presaleLikeTop
                    :data="{mobile:1,desktop:1}"
                ></presaleLikeTop>
                <houseSearch
                    :data="{type:'presale'}"
                ></houseSearch>
                <homepageLikeHouseList
                    :data="{
                        type:'presale',
                        array:data,
                    }"
                ></homepageLikeHouseList>
                <mightLike></mightLike>
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
            :data=data
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
