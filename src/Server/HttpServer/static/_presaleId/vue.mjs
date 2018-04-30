import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
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
                <presaleIdLikeTop
                    :data=presaleIdLikeTop
                ></presaleIdLikeTop>
                <presaleIdLikeMain
                    :data=presaleIdLikeMain
                ></presaleIdLikeMain>
                <block
                    background='/_presaleId/pre01.jpg'
                    title='建築概念'
                    content='新宿2KM商業圈內，位於山手線內側的都心\n這個物件的特點在，位於「JR山手線」內側的位置\n伊勢丹與高島屋的左近，感受最佳的生活便利性\n受鄰近文教地區的薰陶，周圍也是綠地滿溢\n感受都市躍動的同時，也有住宅區安穩的氛圍\n'
                    more='/zh-Hant/presaleIdConcept'
                ></block>
                <block
                    background='/_presaleId/pre02.jpg'
                    title='周邊環境'
                    content='「Wellith新宿早稻田之森」就建在文教地區的旁邊\n鄰近早稻田大學與學習院女子大學(愛子公主上學的地方)\n都立戶山高等學校、私立海城中學/高等學校等歷史長久的學校\n整合成一塊安穩，適合孩子成長的區域\n'
                    more='/zh-Hant/presaleIdEnvironment'
                ></block>
                <block
                    background='/_presaleId/pre03.jpg'
                    title='交通方式'
                    content='有些人把希望寄託在人類的智慧上——那是一種悲慘的智慧——但是發現我們的智慧更加悲慘。然而還有比「施捨先及親友」或「提拔一個壞蛋，他要控訴你賠償損失；打倒他，他反而奉承你」，這類的格言更加使人喪氣的呢？'
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
