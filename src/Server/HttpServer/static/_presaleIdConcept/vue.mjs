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
        presaleIdHref(){
            return presaleIdLike.href(
                this.currentLanguage,
                this.id,
            )
        },
    },
    data:()=>({
        menu:0,
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
        'language',
        'currentLanguage',
        'id',
        'presale',
        'presaleId',
    ],
    template:`
        <div id=main>
            <template v-if=!menu>
                <presaleLikeTop
                    :data="{mobile:1}"
                ></presaleLikeTop>
                <presaleIdLikeTop
                    :data="{
                        focus:'concept',
                        title:presaleId.language[currentLanguage].name,
                        part:'建築概念',
                    }"
                ></presaleIdLikeTop>
                <presaleIdLikeMain
                    :data="{
                        part:['建案介紹','INFORMATION'],
                        title:presaleId.language[currentLanguage].informationTitle,
                        content:presaleId.language[currentLanguage].informationContent,
                    }"
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
                    :href=presaleIdHref
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
            :id=id
            :presale=presale
            :presaleId=presaleId
        ></aMain>
    `,
}
