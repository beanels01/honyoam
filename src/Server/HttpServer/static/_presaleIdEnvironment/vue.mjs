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
            <img src=/_presaleIdEnvironment/test-hypertext-0>
            生活於恵比寿ガーデンプレイス旁<br>
            優雅高尚的每一日<br>
            位於JR山手線「惠比壽」站出口徒步兩分鐘的「ザ・パークハウス 恵比寿南」，<br>
            從側門走兩分鐘能到達坐落著「恵比寿ガーデンプレイス」、「クイーンズ伊勢丹」、「恵比寿三越」的惠比壽商圈，<br>
            日常逛街、採買就在左近的便利生活圈，在丘陵上眺望市區美景的絕佳地點。<br>
            <img src=/_presaleIdEnvironment/test-hypertext-1>
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
                        focus:'environment',
                        title:presaleId.language[currentLanguage].name,
                        part:'周邊環境',
                    }"
                    :href=presaleIdHref
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
                    :data="{focus:'environment'}"
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
