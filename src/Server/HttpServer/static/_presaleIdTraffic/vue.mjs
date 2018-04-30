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
            part:'交通方式',
        },
        presaleIdLikeMain:{
            part:['建案介紹','INFORMATION'],
            title:'副都心線&大江戶線組合成的都心便利交通',
            content:'徒步3分鐘可抵達東京METRO副都心線「西早稻田」站\n徒步6分鐘可抵達都營大江戶線「東新宿」站\n快速抵達池袋、心宿、澀谷、橫濱等大型轉運、商業街\n以及原宿、代官山、中目黑、自由之丘等時尚、先端街區\n無需換成抵達海邊港町，無論工作或是出遊都能自在享受',
        },
        presaleIdLikeHypertext:`
            <img src=/_presaleIdTraffic/test-hypertext-0>
            <img src=/_presaleIdTraffic/test-hypertext-1>
            <img src=/_presaleIdTraffic/test-hypertext-2>
            <img src=/_presaleIdTraffic/test-hypertext-3>
            <img src=/_presaleIdTraffic/test-hypertext-4>
            <img src=/_presaleIdTraffic/test-hypertext-5>
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
                <presaleIdLikeHeader
                    :data="{focus:'traffic'}"
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
