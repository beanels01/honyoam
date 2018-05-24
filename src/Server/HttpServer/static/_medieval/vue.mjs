import homepageLike from    '../_homepageLike.mjs'
import medievalLike from    '../_medievalLike.mjs'
let aMain={
    components:{
        hlFooter:           homepageLike.footer,
        hlMenu:             homepageLike.menu,
        hlHeader:           homepageLike.header,
        floatBall:          homepageLike.floatBall,
        houseSearch:        homepageLike.houseSearch,
        houseList:          homepageLike.houseList,
        mightLike:          homepageLike.mightLike,
        medievalLikeTop:    medievalLike.top,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
    }),
    props:['language','currentLanguage','mainSeminar','data',],
    template:`
        <div id=main>
            <hlHeader
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
                v-model=menu
            ></hlHeader>
            <template v-if=!menu>
                <medievalLikeTop
                    :data="{
                        desktop:1,
                        mobile:1,
                    }"
                ></medievalLikeTop>
                <houseSearch
                    :data="{type:'medieval'}"
                ></houseSearch>
                <houseList
                    :data="{
                        type:'medieval',
                        array:[{
                            image:'',
                            name:'ザ・パークハウス 恵比寿南',
                            title:'摩登與沉穩的美麗結合',
                            pattern:'2LDK',
                            area:'86.15',
                            price:'4998',
                        }],
                    }"
                ></houseList>
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
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
