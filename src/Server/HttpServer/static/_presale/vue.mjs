import homepageLike from    '../_homepageLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
let aMain={
    mounted(){
        if(typeof window!='undefined'){
            if(location.search){
                location.search.substring(1).split('&').map(a=>{
                    let[k,v]=a.split('=')
                    if(k=='a')
                        this.search=this.searchIn=JSON.parse(
                            decodeURIComponent(v)
                        )
                    if(k=='p')
                        this.currentPage=+v
                })
            }
            history.replaceState({},'',`/${this.currentLanguage}/presale?p=${this.currentPage}`)
        }
    },
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
                return c&&{
                    image:'/image/'+c.image,
                    title:c.name,
                    subtitle:c.subName,
                    href:`${this.currentLanguage}/presale/${c.id}`
                }
            }).filter(a=>a)
        },
    },
    data:()=>({
        menu:0,
        search:0,
        searchIn:0,
        currentPage:0,
    }),
    methods:{
        setCurrentPage(v){
            this.currentPage=v
            history.pushState({},'',`/${this.currentLanguage}/presale?p=${this.currentPage}`)
        },
    },
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
                    :data="{
                        mobile:1,
                        desktop:1,
                        language:language.presale,
                    }"
                ></presaleLikeTop>
                <houseSearch
                    :data="{
                        place:data.place,
                        rate:data.rate,
                        type:'presale',
                        language,
                    }"
                    v-model=searchIn
                    @search="search=JSON.parse(JSON.stringify(searchIn))"
                ></houseSearch>
                <homepageLikeHouseList
                    :data="{
                        type:'presale',
                        array:data.data,
                        rate:data.rate,
                        search,
                        currentLanguage,
                        language:language.homepageLike.houseList,
                    }"
                    :value=currentPage
                    @input="v=>setCurrentPage(v)"
                ></homepageLikeHouseList>
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
