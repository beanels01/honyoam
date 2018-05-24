import homepageLike from    '../_homepageLike.mjs'
import medievalLike from    '../_medievalLike.mjs'
let aMain={
    components:{
        hlFooter:           homepageLike.footer,
        hlMenu:             homepageLike.menu,
        hlHeader:           homepageLike.header,
        floatBall:          homepageLike.floatBall,
        mightLike:          homepageLike.mightLike,
        medievalLikeTop:    medievalLike.top,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
    }),
    props:['language','currentLanguage','mainSeminar','data',],
    template:`
        <div id=main>
            <hlHeader
                :shadow=1
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
                v-model=menu
            ></hlHeader>
            <template v-if=!menu>
                <medievalLikeTop
                    :data="{
                        mobile:1,
                    }"
                ></medievalLikeTop>
                <div class=a>
                    <div class=n>サンアメニティ中町フィエルテ</div>
                    <div class=o>
                        <div class=a>
                            <div class=n>
                                <img src=/_medievalId/demo0.jpg>
                            </div>
                            <div class=o><div class="button left"></div><img class="option" src=/_medievalId/demo0.jpg><img class="option" src=/_medievalId/demo1.jpg><img class="option" src=/_medievalId/demo2.jpg><img class="option" src=/_medievalId/demo3.jpg><img class="option" src=/_medievalId/demo4.jpg><img class="option" src=/_medievalId/demo5.jpg><img class="option" src=/_medievalId/demo6.jpg><div class="button right"></div></div>
                        </div><div class=b>
                            <div class=n>
                                <span class=a>2,680</span>
                                <span class=b>萬日幣</span>
                                <span class=c>每坪單價：請洽各店服務員</span>
                            </div>
                            <div class=hl></div>
                            <div class="o p">
                                <div class=a>
                                    <div>格局</div>
                                    <div>竣工年份</div>
                                    <div>權狀坪數</div>
                                </div>
                                <div>
                                    <div>1K</div>
                                    <div>1994年</div>
                                    <div>42.14 平方公尺</div>
                                </div>
                            </div>
                            <div class=hl></div>
                            <div class="o q">
                                <div>
                                    <div class=n>所在地</div>
                                    <div>愛知県岡崎市中町５丁目</div>
                                </div>
                                <div>
                                    <div class=n>交通</div>
                                    <div>名鉄名古屋本線 東岡崎駅，徒步1分鐘</div>
                                </div>
                            </div>
                            <div class=hl></div>
                            <div class=r>
                                預約看房 更多訊息
                            </div>
                            <div class=hl></div>
                            <div class=s>
                                <span class=a>台北直營辦事處：</span>
                                <span class=b>02-2785-5865</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=b>
                    <div class=n>
                        詳細資料
                    </div>
                    <div class=o>
                        周圍地圖
                    </div>
                    <div class=o>
                        格局圖
                    </div>
                    <div class=o>
                        影音介紹
                    </div>
                    <div class=o>
                        聯絡我們
                    </div>
                </div>
                <mightLike></mightLike>
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
                :mainSeminar=mainSeminar
            ></hlMenu>
        </div>
    `,
}
export default{
    components:{aMain},
    template:`
        <aMain
            :language=language
            :currentLanguage=currentLanguage
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
