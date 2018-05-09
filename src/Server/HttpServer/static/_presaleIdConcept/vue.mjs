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
            title:'ザ・パークハウス 恵比寿南',
            part:'建築概念',
        },
        presaleIdLikeMain:{
            part:['建案介紹','INFORMATION'],
            title:'摩登與沉穩的美麗結合',
            content:'由JR山手線「惠比壽」站徒步7分鐘的台地恵比寿南アドレス，以此地為舞台\n由56戶私人住宅共同演出獨出心裁的建築美學，所誕生的「ザ・パークハウス 恵比寿南」\n享受台地獨有的開闊空間與視野，不斷追求更加上質、高貴的生活\n優雅生活的每一天由此地開始',
        },
        presaleIdLikeHypertext:`
            住宅美與摩登的完美結合<br>
            由經手許多都市住宅的アーキサイトメビウス設計監修<br>
            「ザ・パークハウス 恵比寿南」的外觀設計、共用空間、專有空間的設計，皆由アーキサイトメビウス嚴厲把關<br>
            建築家受別出心裁的每一棟都市住宅所散發的摩登魅力所吸引<br>
            透過在居住空間中的嶄新設計<br>
            賦予「ザ・パークハウス 恵比寿南」惠比壽新的住宅理想<br>
            <img src=/_presaleIdConcept/test-hypertext-0>
            <img src=/_presaleIdConcept/test-hypertext-1>
        `,
    }),
    props:[
        'language','currentLanguage',
        'presale',
    ],
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
                <presaleIdLikeFooter
                    :data=presale.language[currentLanguage].precautions
                ></presaleIdLikeFooter>
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
            :presale=presale
        ></aMain>
    `,
}
