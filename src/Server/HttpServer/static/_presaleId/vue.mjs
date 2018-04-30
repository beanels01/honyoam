import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
let block={
    computed:{
        style(){
            return{
                backgroundImage:`url(${JSON.stringify(this.background)})`
            }
        },
    },
    methods:{
        click(){
            location=this.more
        },
    },
    props:['background','title','content','more'],
    template:`
        <div class=a :style=style><div>
            <div>
                <div class=a>{{title}}</div>
                <div class=b>{{content}}</div>
                <button class=c @click=click>+ 了解更多</button>
            </div>
        </div></div>
    `,
}
let aMain={
    components:{
        hlFooter:               homepageLike.footer,
        hlMenu:                 homepageLike.menu,
        hlHeader:               homepageLike.header,
        floatBall:              homepageLike.floatBall,
        presaleIdLikeTop:       presaleIdLike.top,
        presaleIdLikeMain:      presaleIdLike.main,
        presaleIdLikeFooter:    presaleIdLike.footer,
        presaleIdLikeHeader:    presaleIdLike.header,
        block,
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
        },
        presaleIdLikeMain:{
            part:['建案介紹','INFORMATION'],
            title:'摩登與沉穩的美麗結合',
            content:'這樣用一個作為一切二元論基礎的二元論來取代各式各樣的對立，我們是有所得還是有所失？我們馬上就會討論這一點。現在可以說，「現象理論」的第一個結論就是，顯現並不像康德的現象返回到本體那樣返回到存在。因為顯現背後什麼也沒有，它只表明它自身（和整個顯現系列），它只能被他自己的存在，而不能被別的的存在所支持，它不可能成為一層將「主體存在」和「絕對存在」隔開了的虛無薄膜。\n\n\n\n\n\n2020 年的港區開發再進化',
        },
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
                <block
                    background='/_presaleId/pre01.jpg'
                    title='建築概念'
                    content='有些人把希望寄託在人類的智慧上——那是一種悲慘的智慧——但是發現我們的智慧更加悲慘。然而還有比「施捨先及親友」或「提拔一個壞蛋，他要控訴你賠償損失；打倒他，他反而奉承你」，這類的格言更加使人喪氣的呢？'
                    more=''
                ></block>
                <block
                    background='/_presaleId/pre02.jpg'
                    title='周邊環境'
                    content='有些人把希望寄託在人類的智慧上——那是一種悲慘的智慧——但是發現我們的智慧更加悲慘。然而還有比「施捨先及親友」或「提拔一個壞蛋，他要控訴你賠償損失；打倒他，他反而奉承你」，這類的格言更加使人喪氣的呢？'
                    more=''
                ></block>
                <block
                    background='/_presaleId/pre03.jpg'
                    title='交通方式'
                    content='有些人把希望寄託在人類的智慧上——那是一種悲慘的智慧——但是發現我們的智慧更加悲慘。然而還有比「施捨先及親友」或「提拔一個壞蛋，他要控訴你賠償損失；打倒他，他反而奉承你」，這類的格言更加使人喪氣的呢？'
                    more=''
                ></block>
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
