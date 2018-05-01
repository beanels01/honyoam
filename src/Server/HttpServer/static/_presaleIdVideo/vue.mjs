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
            focus:'video',
            title:'ウエリス新宿早稲田の森',
            part:'影音介紹',
        },
        presaleIdLikeMain:{
            part:['影音介紹','VIDEO'],
            title:'摩登與沉穩的美麗結合',
            content:'這樣用一個作為一切二元論基礎的二元論來取代各式各樣的對立，我們是有所得還是有所失？我們馬上就會討論這一點。現在可以說，「現象理論」的第一個結論就是，顯現並不像康德的現象返回到本體那樣返回到存在。因為顯現背後什麼也沒有，它只表明它自身（和整個顯現系列），它只能被他自己的存在，而不能被別的的存在所支持，它不可能成為一層將「主體存在」和「絕對存在」隔開了的虛無薄膜。\n\n\n\n\n\n2020 年的港區開發再進化',
        },
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
                <div class=a>
                    <iframe src="https://www.youtube.com/embed/rNsgHMklBW0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <presaleIdLikeFooter></presaleIdLikeFooter>
                <hlFooter
                    :language=language.homepageLike.footer
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
                <presaleIdLikeHeader
                    :data="{focus:'video'}"
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
