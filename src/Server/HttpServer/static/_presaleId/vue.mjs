import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
let block={
    computed:{
        style(){
            return{
                backgroundImage:`url(${JSON.stringify(this.background)})`
            }
        },
    },
    methods:{
        click(){
            location=this.more
        },
    },
    props:['background','title','content','more'],
    template:`
        <div class=a :style=style><div>
            <div>
                <div class=a>{{title}}</div>
                <div class=b>{{content}}</div>
                <button class=c @click=click>+ 了解更多</button>
            </div>
        </div></div>
    `,
}
let aMain={
    components:{
        hlFooter:               homepageLike.footer,
        hlMenu:                 homepageLike.menu,
        hlHeader:               homepageLike.header,
        floatBall:              homepageLike.floatBall,
        presaleLikeTop:         presaleLike.top,
        presaleIdLikeTop:       presaleIdLike.top,
        presaleIdLikeMain:      presaleIdLike.main,
        presaleIdLikeFooter:    presaleIdLike.footer,
        presaleIdLikeHeader:    presaleIdLike.header,
        block,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
        presaleIdHref(){
            return presaleIdLike.href(
                this.currentLanguage,
                this.presale.id,
            )
        },
    },
    data:()=>({
        menu:0,
    }),
    methods:{
        imagePath(id){
            return`/image/${id}`
        },
    },
    props:[
        'language',
        'currentLanguage',
        'presale',
        'mainSeminar',
    ],
    template:`
        <div id=main>
            <hlHeader
                :language=language
                :currentLanguage=currentLanguage
                v-model=menu
                :mainSeminar=mainSeminar
            ></hlHeader>
            <template v-if=!menu>
                <presaleLikeTop
                    :data="{mobile:1}"
                ></presaleLikeTop>
                <presaleIdLikeTop
                    :data="{
                        focus:'top',
                        title:presale.presaleId.name,
                        background:presale.presaleId.banner,
                    }"
                    :href=presaleIdHref
                ></presaleIdLikeTop>
                <presaleIdLikeMain
                    :data="{
                        part:['建案介紹','INFORMATION'],
                        title:presale.presaleId.informationTitle,
                        content:presale.presaleId.informationContent,
                    }"
                ></presaleIdLikeMain>
                <block
                    title='建築設計'
                    :background=imagePath(presale.presaleId.top.concept)
                    :content=presale.presaleId.conceptSummary
                    :more=presaleIdHref.concept
                ></block>
                <block
                    title='周邊環境'
                    :background=imagePath(presale.presaleId.top.environment)
                    :content=presale.presaleId.environmentSummary
                    :more=presaleIdHref.environment
                ></block>
                <block
                    title='交通方式'
                    :background=imagePath(presale.presaleId.top.traffic)
                    :content=presale.presaleId.trafficSummary
                    :more=presaleIdHref.traffic
                ></block>
                <presaleIdLikeFooter
                    :data=presale.presale.language[currentLanguage].precautions
                ></presaleIdLikeFooter>
                <hlFooter
                    :language=language.homepageLike.footer
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
                <presaleIdLikeHeader
                    :data="{focus:'top'}"
                    :href=presaleIdHref
                ></presaleIdLikeHeader>
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
            :presale=presale
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
