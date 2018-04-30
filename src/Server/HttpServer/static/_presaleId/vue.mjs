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
        <div class=d :style=style>
            <div>
                <div class=a>{{title}}</div>
                <div class=b>{{content}}</div>
                <button class=c @click=click>+ 了解更多</button>
            </div>
        </div>
    `,
}
let aMain={
    components:{
        hlFooter:   homepageLike.footer,
        hlMenu:     homepageLike.menu,
        hlHeader:   homepageLike.header,
        floatBall:  homepageLike.floatBall,
        presaleIdLikeHeader:presaleIdLike.header,
        block,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
    }),
    props:['language','currentLanguage'],
    template:`
        <div id=main>
            <template v-if=!menu>
                <div class=static>
                    <div>
                        <div>This is a book.</div>
                    </div>
                </div>
                <div class=a>
                    <div>
                        <span class=a>建案介紹</span> / INFORMATION
                    </div>
                </div>
                <div class=b>
                    <div>
                        <div>
                            <div class=title>
                                摩登與沉穩的美麗結合
                            </div>
                            <div class=content>
                                人不外乎是自己認為的東西。
                            </div>
                        </div>
                        <div>
                            <button>預約看房</button>
                            <button>更多訊息</button>
                        </div>
                    </div>
                </div>
                <div class=c>
                    <div>
                        2020年的港區開發再進化
                    </div>
                </div>
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
                <div class=h>
                    <div>
                        注意事項
                    </div>
                </div>
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
