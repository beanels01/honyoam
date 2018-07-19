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
        mightLikeData(){
            let a={}
            for(let b of this.data.data)
                a[b.id]=b
            return this.data.presale.youMightLike.map(b=>{
                let c=a[b]
                return{
                    image:'/image/'+c.image,
                    title:c.name,
                    subtitle:c.subName,
                }
            })
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
                :current=data.current
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
                        array:data.data,
                    }"
                ></homepageLikeHouseList>
                <mightLike
                    :data=mightLikeData
                ></mightLike>
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
            :data=data
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
