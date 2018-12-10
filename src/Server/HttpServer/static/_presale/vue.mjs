import homepageLike from    '../_homepageLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
let aMain={
    mounted(){
        if(typeof window!='undefined'){
            this.checkSearch()
            onpopstate=_=>this.checkSearch()
            history.replaceState({},'',this.url)
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
