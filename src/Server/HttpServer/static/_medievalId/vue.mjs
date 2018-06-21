import homepageLike from    '../_homepageLike.mjs'
import medievalLike from    '../_medievalLike.mjs'
let aMain={
    created(){
        console.log(this.data.data)
    },
    components:{
        hlFooter:           homepageLike.footer,
        hlMenu:             homepageLike.menu,
        hlHeader:           homepageLike.header,
        floatBall:          homepageLike.floatBall,
        mightLike:          homepageLike.mightLike,
        contactInfo:        homepageLike.contactInfo,
        aCurrent:           homepageLike.current,
        reserveButton:      homepageLike.reserveButton,
        moreButton:         homepageLike.moreButton,
        medievalLikeTop:    medievalLike.top,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
        focus:0,
    }),
    props:['language','currentLanguage','mainSeminar','data',],
    template:`
        <div id=main>
            <hlHeader
                :shadow=1
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
                v-model=menu
            ></hlHeader>
            <template v-if=!menu>
                <aCurrent
                    :data="[
                        '首頁',
                        '中古屋',
                        data.data.name,
                    ]"
                ></aCurrent>
                <medievalLikeTop
                    :data="{
                        mobile:1,
                    }"
                ></medievalLikeTop>
                <div class=a>
                    <div class=n>{{data.data.name}}</div>
                    <div class=o>
                        <div class=a>
                            <div class=n>
                                <img
                                    :src="'/image/'+data.data.gallery[focus]"
                                >
                            </div>
                            <div class=o><div class="button left"></div><img
                                v-for="(a,i) of data.data.gallery"
                                class="option"
                                :src="'/image/'+a"
                                @click="focus=i"
                            ><div class="button right"></div></div>
                        </div><div class=b>
                            <div class=n>
                                <span class=a>{{data.data.price}}</span>
                                <span class=b>萬日幣</span>
                                <span class=c>每坪單價：請洽各店服務員</span>
                            </div>
                            <div class=hl></div>
                            <div class="desktop o p">
                                <div class=a>
                                    <div>格局</div>
                                    <div>竣工年份</div>
                                    <div>權狀坪數</div>
                                </div>
                                <div>
                                    <div>{{data.data.pattern}}</div>
                                    <div>{{data.data.date}} 年</div>
                                    <div>{{data.data.area}} 平方公尺</div>
                                </div>
                            </div>
                            <div class="desktop hl"></div>
                            <div class="desktop o q">
                                <div>
                                    <div class=n>所在地</div>
                                    <div>{{data.data.place}}</div>
                                </div>
                                <div>
                                    <div class=n>交通</div>
                                    <div>{{data.data.traffic}}</div>
                                </div>
                            </div>
                            <div class=mobile>
                                <span class=a>格局：</span>{{data.data.pattern}}
                                <div class="hl"></div>
                                <span class=a>竣工年份：</span>{{data.data.date}} 年
                                <div class="hl"></div>
                                <span class=a>權狀坪數：</span>{{data.data.area}} 平方公尺
                                <div class="hl"></div>
                                <span class=a>所在地：</span>{{data.data.place}}
                                <div class="hl"></div>
                                <span class=a>交通：</span>{{data.data.traffic}}
                            </div>
                            <div class=hl></div>
                            <div class=r>
                                <reserveButton></reserveButton>
                                <moreButton></moreButton>
                            </div>
                        </div>
                        <div class=c>
                            <div class=n>
                                <img src=/_medievalId/demo0.jpg>
                            </div>
                            <div class=o>
                                <img src=/_medievalId/swiper-ml.png>
                            </div>
                            <div class=p>
                                <img src=/_medievalId/swiper-mr.png>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=b>
                    <div class=n>
                        <div class=a>詳細資料</div><div class=hl></div>
                        <div class=b>
                            <div class=n>
                                {{data.data.name}}
                            </div>
                            <div class=o>
                                <div>
                                    <div class=n>
                                        · 總價
                                    </div><div class=o>
                                        {{data.data.price}} 萬日幣
                                    </div>
                                    <div class=n>
                                        · 所在地
                                    </div><div class=o>
                                        {{data.data.place}}
                                    </div>
                                    <div class=n>
                                        · 交通
                                    </div><div class=o>
                                        {{data.data.traffic}}
                                    </div>
                                </div>
                                <div>
                                    <div class=n>
                                        · 格局
                                    </div><div class=o>
                                        {{data.data.pattern}}
                                    </div>
                                    <div class=n>
                                        · 坪數
                                    </div><div class=o>
                                        {{data.data.area}} 平方公尺
                                    </div>
                                    <div class=n>
                                        · 陽台面積
                                    </div><div class=o>
                                        {{data.data.balconyArea}} 平方公尺
                                    </div>
                                </div>
                                <div>
                                    <div class=n>
                                        · 竣工年份
                                    </div><div class=o>
                                        {{data.data.date}} 年
                                    </div>
                                    <div class=n>
                                        · 總戶數
                                    </div><div class=o>
                                        {{data.data.householdCount}} 戶
                                    </div>
                                    <div class=n>
                                        · 現況
                                    </div><div class=o>
                                        {{data.data.situation}}
                                    </div>
                                </div>
                                <div>
                                    <div class=n>
                                        · 管理費
                                    </div><div class=o>
                                        {{data.data.managementFee}} 日幣
                                    </div>
                                    <div class=n>
                                        · 修繕基金
                                    </div><div class=o>
                                        {{data.data.repairFund}} 日幣
                                    </div>
                                    <div class=n>
                                        · 方位
                                    </div><div class=o>
                                        {{data.data.direction}}
                                    </div>
                                </div>
                                <div>
                                    <div class=n>
                                        · 其他費用
                                    </div><div class=o>
                                        {{data.data.otherFee}} 日幣
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
                                <iframe :src=data.data.map width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
                                <div class=a>{{data.data.patternTitle}}</div>
                                <div class=b v-html=data.data.patternContent></div>
                                <div class=c>
                                    ※ 本格局圖係未依一定比例縮小繪製之概繪圖。與實況仍有差距，其方位、格局形狀等，仍需以房屋現場為準。
                                </div>
                            </div>
                            <div class=o>
                                <img :src="'/image/'+data.data.patternImage">
                            </div>
                        </div>
                    </div>
                    <!--
                        <div class=q>
                            <div class=a>影音介紹</div><div class=hl></div>
                            <div class=b>
                                <div class=n>
                                    {{data.data.videoContent}}
                                </div>
                                <iframe class=o :src="'https://www.youtube.com/embed/'+data.videoId" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                    -->
                    <div class=r>
                        <div class=a>聯絡我們</div><div class=hl></div>
                        <div class=b>
                            <contactInfo></contactInfo>
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
            :language=language
            :currentLanguage=currentLanguage
            :mainSeminar=mainSeminar
            :data=data
        ></aMain>
    `,
}
