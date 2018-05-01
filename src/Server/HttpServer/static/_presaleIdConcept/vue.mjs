import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
let aMain={
    components:{
        hlFooter:               homepageLike.footer,
        hlMenu:                 homepageLike.menu,
        hlHeader:               homepageLike.header,
        floatBall:              homepageLike.floatBall,
        presaleLikeTop: presaleLike.top,
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
            focus:'concept',
            title:'ウエリス新宿早稲田の森',
            part:'建築概念',
        },
        presaleIdLikeMain:{
            part:['建案介紹','INFORMATION'],
            title:'副都心線&大江戶線組合成的都心便利交通',
            content:'徒步3分鐘可抵達東京METRO副都心線「西早稻田」站\n徒步6分鐘可抵達都營大江戶線「東新宿」站\n快速抵達池袋、心宿、澀谷、橫濱等大型轉運、商業街\n以及原宿、代官山、中目黑、自由之丘等時尚、先端街區\n無需換成抵達海邊港町，無論工作或是出遊都能自在享受',
        },
        presaleIdLikeHypertext:`
            <img src=/_presaleIdConcept/test-hypertext-0>
            新宿2KM商業圈內，位於山手線內側的都心<br>
            這個物件的特點在，位於「JR山手線」內側的位置<br>
            伊勢丹與高島屋的左近，感受最佳的生活便利性<br>
            受鄰近文教地區的薰陶，周圍也是綠地滿溢<br>
            感受都市躍動的同時，也有住宅區安穩的氛圍
            <img src=/_presaleIdConcept/test-hypertext-1>
            運動、文化設施健全，充實每一天的生活<br>
            徒步1分鐘「新宿區立新宿交流活動中心」<br>
            設有標準制/兒童用泳池、籃球場、桌球桌等運動場地<br>
            天花板上的天象儀更是一大特色，且距離圖書館只要徒步3分鐘<br>
            無論大人小孩都能在這裡享受自己的假日<br>
            (愛子公主上的學校就在對面
            <img src=/_presaleIdConcept/test-hypertext-2>
            <img src=/_presaleIdConcept/test-hypertext-3>
            <img src=/_presaleIdConcept/test-hypertext-4>
        `,
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
                <presaleIdLikeHeader
                    :data="{focus:'concept'}"
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
