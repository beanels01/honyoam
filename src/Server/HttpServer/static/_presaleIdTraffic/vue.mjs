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
                this.presale.id,
            )
        },
    },
    data:()=>({
        menu:0,
    }),
    props:[
        'data',
        'language',
        'currentLanguage',
        'presale',
        'mainSeminar',
    ],
    template:`
        <div id=main>
            <hlHeader
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                v-model=menu
                :mainSeminar=mainSeminar
            ></hlHeader>
            <template v-if=!menu>
                <presaleLikeTop
                    :data="{mobile:1}"
                ></presaleLikeTop>
                <presaleIdLikeTop
                    :data="{
                        focus:'traffic',
                        title:presale.presaleId.name,
                        part:'交通方式',
                        background:presale.presaleId.banner,
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
                        hypertext:presale.presaleId.trafficContent,
                    }"
                ></presaleIdLikeHypertext>
                <presaleIdLikeFooter
                    :data=presale.presale.language[currentLanguage].precautions
                ></presaleIdLikeFooter>
                <hlFooter
                    :language=language.homepageLike.footer
                    :currentLanguage=currentLanguage
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
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
            ></hlMenu>
        </div>
    `,
}
export default{
    components:{aMain},
    template:`
        <aMain
            :data=data
            :language=language
            :currentLanguage=currentLanguage
            :presale=presale
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
