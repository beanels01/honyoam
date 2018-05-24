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
                        <div class=a>詳細資料</div><div class=hl></div>
                        <div class=b>
                            <div class=n>
                                サンアメニティ中町フィエルテ
                            </div>
                            <div class=o>
                                <div>
                                    <div class=n>
                                        <ul><li>總價</li></ul>
                                    </div>
                                    <div class=o>
                                        2680 萬日幣
                                    </div>
                                    <div class=n>
                                        <ul><li>所在地</li></ul>
                                    </div>
                                    <div class=o>
                                        愛知県岡崎市中町５丁目
                                    </div>
                                    <div class=n>
                                        <ul><li>交通</li></ul>
                                    </div>
                                    <div class=o>
                                        名鉄名古屋本線 東岡崎駅，徒步1分鐘
                                    </div>
                                </div>
                                <div>
                                    <div class=n>
                                        <ul><li>格局</li></ul>
                                    </div>
                                    <div class=o>
                                        4LDK
                                    </div>
                                    <div class=n>
                                        <ul><li>坪數</li></ul>
                                    </div>
                                    <div class=o>
                                        139.8 平方公尺
                                    </div>
                                    <div class=n>
                                        <ul><li>陽台面積</li></ul>
                                    </div>
                                    <div class=o>
                                        20.37 平方公尺
                                    </div>
                                </div>
                                <div>
                                    <div class=n>
                                        <ul><li>竣工年份</li></ul>
                                    </div>
                                    <div class=o>
                                        2001 年
                                    </div>
                                    <div class=n>
                                        <ul><li>總戶數</li></ul>
                                    </div>
                                    <div class=o>
                                        23戶
                                    </div>
                                    <div class=n>
                                        <ul><li>現況</li></ul>
                                    </div>
                                    <div class=o>
                                        空家
                                    </div>
                                </div>
                                <div>
                                    <div class=n>
                                        <ul><li>管理費</li></ul>
                                    </div>
                                    <div class=o>
                                        15,250 日幣
                                    </div>
                                    <div class=n>
                                        <ul><li>修繕基金</li></ul>
                                    </div>
                                    <div class=o>
                                        10,380 日幣
                                    </div>
                                    <div class=n>
                                        <ul><li>方位</li></ul>
                                    </div>
                                    <div class=o>
                                        南
                                    </div>
                                </div>
                                <div>
                                    <div class=n>
                                        <ul><li>其他費用</li></ul>
                                    </div>
                                    <div class=o>
                                        540 日幣
                                    </div>
                                    <div class=n>
                                    </div>
                                    <div class=o>
                                    </div>
                                    <div class=n>
                                    </div>
                                    <div class=o>
                                    </div>
                                </div>
                            </div>
                            <div class=p>
                                ※ 本區提供資料僅供參考，房屋資料需以謄本標示資料為主。
                            </div>
                        </div>
                    </div>
                    <div class=o>
                        <div class=a>周圍地圖</div><div class=hl></div>
                        <div class=b>
                            <div class=n>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3270.070086729494!2d137.179745!3d34.954852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004bcdea051426d%3A0x33608eb4bbf5d700!2zNSBDaG9tZSBOYWthbWFjaGksIOWyoeW0juW4guaEm-efpSA0NDQtMDAxNeaXpeacrA!5e0!3m2!1szh-TW!2sus!4v1527181343438" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                            </div>
                            <div class=o>
                                ※ 僅供物件周邊景象參考，可能與實際物件有所出入。
                            </div>
                        </div>
                    </div>
                    <div class=p>
                        <div class=a>格局圖</div><div class=hl></div>
                        <div class=b>
                            <div class=n>
                                <div class=a>標題</div>
                                <div class=b>內文</div>
                                <div class=c>
                                    ※ 本格局圖係未依一定比例縮小繪製之概繪圖。與實況仍有差距，其方位、格局形狀等，仍需以房屋現場為準。
                                </div>
                            </div>
                            <div class=o>
                                <img src="/_medievalId/demo9.jpg">
                            </div>
                        </div>
                    </div>
                    <div class=q>
                        <div class=a>影音介紹</div><div class=hl></div>
                        <div class=b>
                        </div>
                    </div>
                    <div class=r>
                        <div class=a>聯絡我們</div><div class=hl></div>
                        <div class=b>
                        </div>
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
