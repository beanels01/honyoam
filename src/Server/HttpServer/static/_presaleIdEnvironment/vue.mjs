import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
let aMain={
    components:{
        hlFooter:               homepageLike.footer,
        hlMenu:                 homepageLike.menu,
        hlHeader:               homepageLike.header,
        floatBall:              homepageLike.floatBall,
        presaleIdLikeTop:       presaleIdLike.top,
        presaleIdLikeMain:      presaleIdLike.main,
        presaleIdLikeHypertext: presaleIdLike.hypertext,
        presaleIdLikeFooter:    presaleIdLike.footer,
        presaleIdLikeHeader:    presaleIdLike.header,
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
            part:'周邊環境',
        },
        presaleIdLikeMain:{
            part:['建案介紹','INFORMATION'],
            title:'副都心線&大江戶線組合成的都心便利交通',
            content:'徒步3分鐘可抵達東京METRO副都心線「西早稻田」站\n徒步6分鐘可抵達都營大江戶線「東新宿」站\n快速抵達池袋、心宿、澀谷、橫濱等大型轉運、商業街\n以及原宿、代官山、中目黑、自由之丘等時尚、先端街區\n無需換成抵達海邊港町，無論工作或是出遊都能自在享受',
        },
        presaleIdLikeHypertext:`
            <img src=/_presaleIdEnvironment/test-hypertext-0>
            「Wellith新宿早稻田之森」就建在文教地區的旁邊<br>
            鄰近早稻田大學與學習院女子大學(愛子公主上學的地方)<br>
            都立戶山高等學校、私立海城中學/高等學校等歷史長久的學校<br>
            整合成一塊安穩，適合孩子成長的區域
            <img src=/_presaleIdEnvironment/test-hypertext-1>
            都立戶山公園茂盛的綠地所包圍滋潤的生活圈<br>
            指定為新宿區特定「七座都市之森」之一<br>
            距離「都立戶山公園」只要徒步五分鐘<br>
            超過18萬6千平方公尺的遼闊綠地<br>
            種植的樹木無論品種或是數量都是新宿第一<br>
            在每一天的生活中，忘卻都市的喧囂<br>
            貼身感受自然豐富的四季變化
        `,
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
                <presaleIdLikeHypertext
                    :data=presaleIdLikeHypertext
                ></presaleIdLikeHypertext>
                <presaleIdLikeFooter></presaleIdLikeFooter>
                <hlFooter
                    :language=language.homepageLike.footer
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
                <presaleIdLikeHeader></presaleIdLikeHeader>
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
