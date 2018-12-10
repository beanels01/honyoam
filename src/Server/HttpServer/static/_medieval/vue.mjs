import homepageLike from    '../_homepageLike.mjs'
import medievalLike from    '../_medievalLike.mjs'
let aMain={
    mounted(){
        if(typeof window!='undefined'){
            this.checkSearch()
            onpopstate=_=>this.checkSearch()
            history.replaceState({},'',this.url)
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
            return medievalLike.mightLikeData(
                this.data.data,
                this.data.medieval.youMightLike,
                this.language.medieval.e4JapaneseCurrency,
                this.currentLanguage,
            )
        },
        url(){
            return`/${this.currentLanguage}/medieval?a=${
                encodeURIComponent(JSON.stringify({
                    search:this.search,
                    page:this.currentPage,
                }))
            }`
        },
    },
    data:()=>({
        menu:0,
        search:{
            place0:'',
            place1:'',
            areaMin:'',
            areaMax:'',
            priceMin:'',
            priceMax:'',
            age:'',
            pattern:{
                '1R':0,
                '1K':0,
                '1DK':0,
                '1LDK':0,
                '2LDK':0,
                '3LDK':0,
                '>3LDK':0,
            },
            traffic:{
                line:           '',
                startStation:   '',
                endStation:     '',
                time:           '',
            },
        },
        searchIn:0,
        currentPage:0,
    }),
    methods:{
        checkSearch(){
            location.search.substring(1).split('&').map(a=>{
                let[k,v]=a.split('=')
                if(k=='a'){
                    let a=JSON.parse(decodeURIComponent(v))
                    this.searchIn=a.search
                    this.currentPage=a.page
                }
            })
        },
        setHistory(){
            history.pushState({},'',this.url)
        },
        setCurrentPage(v){
            this.currentPage=v
            this.setHistory()
        },
        doSearch(){
            this.search=JSON.parse(JSON.stringify(this.searchIn))
            this.setHistory()
        }
    },
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
                        rail:data.rail,
                        rate:data.rate,
                        type:'medieval',
                        language,
                    }"
                    v-model=searchIn
                    @search=doSearch
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
                    :value=currentPage
                    @input="v=>setCurrentPage(v)"
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
