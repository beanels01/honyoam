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
        mightLikeData(){
            let a={}
            for(let b of this.data.data)
                a[b.id]=b
            return this.data.medieval.youMightLike.map(b=>{
                let c=a[b]
                return{
                    image:'/image/'+c.image,
                    title:c.name,
                    subtitle:`${c.price} 萬日幣`,
                }
            })
        },
    },
    data:()=>({
        menu:0,
    }),
    props:['language','currentLanguage','mainSeminar','data',],
    template:`
        <div id=main>
            <hlHeader
                :current=data.current
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
                        array:data.data,
                        rate:data.rate,
                    }"
                ></houseList>
                <mightLike
                    :data=mightLikeData
                ></mightLike>
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
            :language=language
            :currentLanguage=currentLanguage
            :mainSeminar=mainSeminar
            :data=data
        ></aMain>
    `,
}
