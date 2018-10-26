import homepageLike from    '../_homepageLike.mjs'
import medievalLike from    '../_medievalLike.mjs'
let aMain={
    mounted(){
        if(typeof window!='undefined'){
            if(location.search)
                this.search=this.searchIn=JSON.parse(decodeURIComponent(
                    location.search.substring(3)
                ))
            history.replaceState({
                currentPage
            },'',`/${this.currentLanguage}/medieval`)
            onpopstate=e=>this.currentPage=e.state.currentPage
        }
    },
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
                    image:typeof c.image=='string'?
                        '/image/'+c.image
                    :
                        c.image.url,
                    title:c.name,
                    subtitle:`${c.price} ${this.language.medieval.e4JapaneseCurrency}`,
                    href:`${this.currentLanguage}/medieval/${c.id}`
                }
            })
        },
    },
    data:()=>({
        menu:0,
        search:0,
        searchIn:0,
        currentPage:0,
    }),
    props:['language','currentLanguage','mainSeminar','data',],
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
                <medievalLikeTop
                    :data="{
                        desktop:1,
                        mobile:1,
                        language:language.medieval,
                    }"
                ></medievalLikeTop>
                <houseSearch
                    :data="{
                        place:data.place,
                        rate:data.rate,
                        type:'medieval',
                        language,
                    }"
                    v-model="searchIn"
                    @search="search=JSON.parse(JSON.stringify(searchIn))"
                ></houseSearch>
                <houseList
                    :data="{
                        type:'medieval',
                        array:data.data,
                        rate:data.rate,
                        search,
                        currentLanguage,
                        language:language.homepageLike.houseList,
                    }"
                    v-model=currentPage
                ></houseList>
                <mightLike
                    :data="{
                        data:mightLikeData,
                        language:language.homepageLike.mightLike,
                    }"
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
    watch:{
        currentPage(){
            history.pushState({
                currentPage
            },'',`/${this.currentLanguage}/medieval`)
        },
    },
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
