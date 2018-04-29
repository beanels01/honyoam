import homepageLike from    '../_homepageLike.mjs'
let aMain={
    components:{
        hlFooter:   homepageLike.footer,
        hlMenu:     homepageLike.menu,
        hlHeader:   homepageLike.header,
        floatBall:  homepageLike.floatBall,
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
            <div class=static>
                <div>
                    <div>This is a book.</div>
                </div>
            </div>
            <div class=a>
                <div>
                    建案介紹 / INFORMATION
                </div>
            </div>
            <div class=b>
                <div>
                    <div>
                        <div class=title>
                            摩登與沉穩的美麗結合
                        </div>
                        <div class=content>
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
            <div class="d e">
                <div>
                    建築概念
                </div>
            </div>
            <div class="d f">
                <div>
                    周邊環境
                </div>
            </div>
            <div class="d g">
                <div>
                    交通方式
                </div>
            </div>
            <div class=h>
                <div>
                    注意事項
                </div>
            </div>
            <template v-if=!menu>
                <hlFooter
                    :language=language.homepageLike.footer
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
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
