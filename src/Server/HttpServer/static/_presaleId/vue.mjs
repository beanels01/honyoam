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
            title:'ウエリス新宿早稲田の森',
        },
        presaleIdLikeMain:{
            part:['建案介紹','INFORMATION'],
            title:'副都心線&大江戶線組合成的都心便利交通',
            content:'徒步3分鐘可抵達東京METRO副都心線「西早稻田」站\n徒步6分鐘可抵達都營大江戶線「東新宿」站\n快速抵達池袋、心宿、澀谷、橫濱等大型轉運、商業街\n以及原宿、代官山、中目黑、自由之丘等時尚、先端街區\n無需換成抵達海邊港町，無論工作或是出遊都能自在享受',
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
                    content='新宿2KM商業圈內，位於山手線內側的都心'
                    more='/zh-Hant/presaleIdConcept'
                ></block>
                <block
                    background='/_presaleId/pre02.jpg'
                    title='周邊環境'
                    content='「Wellith新宿早稻田之森」就建在文教地區的旁邊'
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
