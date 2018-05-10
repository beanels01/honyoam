import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
let aMain={
    components:{
        hlFooter:               homepageLike.footer,
        hlMenu:                 homepageLike.menu,
        hlHeader:               homepageLike.header,
        floatBall:              homepageLike.floatBall,
        presaleLikeTop:         presaleLike.top,
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
            <img src=/_presaleIdTraffic/test-hypertext-0>
            <img src=/_presaleIdTraffic/test-hypertext-1>
            <img src=/_presaleIdTraffic/test-hypertext-2>
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
                        focus:'traffic',
                        title:presaleId.language[currentLanguage].name,
                        part:'交通方式',
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
                    :data="{focus:'traffic'}"
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
