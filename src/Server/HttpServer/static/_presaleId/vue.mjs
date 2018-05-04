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
    },
    data:()=>({
        menu:0,
        presaleIdLikeTop:{
            focus:'top',
            title:'ザ・パークハウス 恵比寿南',
        },
        presaleIdLikeMain:{
            part:['建案介紹','INFORMATION'],
            title:'摩登與沉穩的美麗結合',
            content:'由JR山手線「惠比壽」站徒步7分鐘的台地恵比寿南アドレス，以此地為舞台\n由56戶私人住宅共同演出獨出心裁的建築美學，所誕生的「ザ・パークハウス 恵比寿南」\n享受台地獨有的開闊空間與視野，不斷追求更加上質、高貴的生活\n優雅生活的每一天由此地開始',
        },
    }),
    props:['language','currentLanguage'],
    template:`
        <div id=main>
            <template v-if=!menu>
                <presaleLikeTop
                    :data="{mobile:1}"
                ></presaleLikeTop>
                <presaleIdLikeTop
                    :data=presaleIdLikeTop
                ></presaleIdLikeTop>
                <presaleIdLikeMain
                    :data=presaleIdLikeMain
                ></presaleIdLikeMain>
                <block
                    background='/_presaleId/pre01.jpg'
                    title='建築概念'
                    content='由經手許多都市住宅的アーキサイトメビウス設計監修'
                    more='/zh-Hant/presaleIdConcept'
                ></block>
                <block
                    background='/_presaleId/pre02.jpg'
                    title='周邊環境'
                    content='生活於恵比寿ガーデンプレイス旁'
                    more='/zh-Hant/presaleIdEnvironment'
                ></block>
                <block
                    background='/_presaleId/pre03.jpg'
                    title='交通方式'
                    content='有些人把希望寄託在人類的智慧上——那是一種悲慘的智慧——但是發現我們的智慧更加悲慘。'
                    more='/zh-Hant/presaleIdTraffic'
                ></block>
                <presaleIdLikeFooter></presaleIdLikeFooter>
                <hlFooter
                    :language=language.homepageLike.footer
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
                <presaleIdLikeHeader
                    :data="{focus:'top'}"
                ></presaleIdLikeHeader>
            </template>
            <hlMenu
                v-if=menu
                :language=language
                :currentLanguage=currentLanguage
            ></hlMenu>
            <hlHeader
                :language=language
                :currentLanguage=currentLanguage
                v-model=menu
            ></hlHeader>
        </div>
    `,
}
export default{
    components:{aMain},
    template:`
        <aMain
            :language=language
            :currentLanguage=currentLanguage
        ></aMain>
    `,
}
