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
                this.presale.id,
            )
        },
    },
    data:()=>({
        menu:0,
    }),
    props:[
        'language',
        'currentLanguage',
        'presale',
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
                        title:presale.presaleId.name,
                        part:'周邊環境',
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
                <presaleIdLikeHypertext
                    :data="{
                        gallery:presale.presaleId.gallery,
                        hypertext:presale.presaleId.environmentContent,
                    }"
                ></presaleIdLikeHypertext>
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
            :presale=presale
        ></aMain>
    `,
}
