import homepageLike from    '../_homepageLike.mjs'
import medievalLike from    '../_medievalLike.mjs'
import commaNumber from     '../_commaNumber.mjs'
import{dom}from'../_simple.mjs'
let swiper={
    data:()=>({
        reference:{},
        swiper:null,
    }),
    mounted(){
        function createSwiperContainer(a){
            return dom.div({className:'swiper-container'},
                dom.div({className:'swiper-wrapper'},
                    a.map(n=>dom.div({className:'swiper-slide'},n))
                ),
            )
        }
        if(typeof window=='undefined')
            return
        let n=createSwiperContainer(
            this.data.gallery.map((data,i)=>
                this.reference[i]=dom.img({
                    src:'/image/'+data,
                    className:'option'+(this.value==i?' focus':''),
                    onclick:()=>{
                        this.$emit('input',i)
                    },
                },n=>{
                    dom(n.style)
                })
            )
        )
        dom(this.$el,n)
        this.swiper=new Swiper(n,{
            slidesPerView:7,
            spaceBetween:13,
        })
    },
    props:['data','value'],
    template:`
        <div class=h></div>
    `,
    watch:{
        value(n,p){
            this.reference[p].classList.remove('focus')
            this.reference[n].classList.add('focus')
            this.swiper.slideTo(this.value)
        }
    },
}
let aMain={
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
        swiper,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
        mightLikeData(){
            let a={}
            for(let b of this.data.medieval.list)
                a[b.id]=b
            return this.data.medieval.medieval.youMightLike.map(b=>{
                let c=a[b]
                return{
                    image:'/image/'+c.image,
                    title:c.name,
                    subtitle:`${c.price} 萬日幣`,
                    href:`${this.currentLanguage}/medieval/${c.id}`
                }
            })
        },
    },
    data:()=>({
        menu:0,
        focus:0,
    }),
    methods:{
        commaNumber,
    },
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
                            <div class=o>
                                <div class="button left"
                                    @click="focus=Math.max(0,focus-1)"
                                ></div><swiper

                                    :data="{gallery:data.data.gallery}"
                                    class=swiper
                                    v-model=focus
                                ></swiper><div
                                    class="button right"
                                    @click="focus=Math.min(data.data.gallery.length-1,focus+1)"
                                ></div>
                            </div>
                        </div><div class=b>
                            <div class=n>
                                <span class=a>{{
                                    commaNumber(data.data.price)
                                }}</span>
                                <span class=b>萬日幣</span>
                                <span class=c>
                                    每坪單價：請洽各店服務員
                                    <br>
                                    買賣交易均以日幣為主，其他幣別僅供參考，實際匯率請自行向銀行確認換算。
                                </span>
                            </div>
                            <div class=hl></div>
                            <div class="desktop o p">
                                <div class=a>
                                    <div>格局</div>
                                    <div>竣工年月</div>
                                    <div>專有面積</div>
                                </div>
                                <div>
                                    <div>{{data.data.pattern}}</div>
                                    <div>{{data.data.dateYear}} 年<template v-if=data.data.dateMonth> {{data.data.dateMonth}} 月</template></div>
                                    <div>{{data.data.area}} 平方公尺</div>
                                </div>
                            </div>
                            <div class="desktop hl"></div>
                            <div class="desktop o p">
                                <div class=a>
                                    <div>陽台面積</div>
                                    <div>所在樓層</div>
                                    <div>建物總樓層</div>
                                </div>
                                <div>
                                    <div>{{data.data.balconyArea}} 平方公尺</div>
                                    <div>{{data.data.level}}</div>
                                    <div>{{data.data.levelCount}}</div>
                                </div>
                            </div>
                            <div class="desktop hl"></div>
                            <div class="desktop o p">
                                <div class=a>
                                    <div>構造</div>
                                    <div>總戶數</div>
                                    <div>朝向</div>
                                </div>
                                <div>
                                    <div>{{data.data.structure}}</div>
                                    <div>{{data.data.householdCount}}</div>
                                    <div>{{data.data.direction}}</div>
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
                                <span class=a>竣工年月：</span>{{data.data.dateYear}} 年<template v-if=data.data.dateMonth> {{data.data.dateMonth}} 月</template>
                                <div class="hl"></div>
                                <span class=a>專有面積：</span>{{data.data.area}} 平方公尺
                                <div class="hl"></div>
                                <span class=a>陽台面積：</span>{{data.data.balconyArea}}
                                <div class="hl"></div>
                                <span class=a>所在樓層：</span>{{data.data.level}}
                                <div class="hl"></div>
                                <span class=a>建物總樓層：</span>{{data.data.levelCount}}
                                <div class="hl"></div>
                                <span class=a>朝向：</span>{{data.data.direction}}
                                <div class="hl"></div>
                                <span class=a>所在地：</span>{{data.data.place}}
                                <div class="hl"></div>
                                <span class=a>構造：</span>{{data.data.structure}}
                                <div class="hl"></div>
                                <span class=a>總戶數：</span>{{data.data.householdCount}}
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
                            <div
                                class=n
                            >
                                <img :src="'/image/'+data.data.gallery[focus]">
                            </div>
                            <div
                                class=o
                                @click="focus=Math.max(0,focus-1)"
                            >
                                <img src=/_medievalId/swiper-ml.png>
                            </div>
                            <div
                                class=p
                                @click="focus=Math.min(data.data.gallery.length-1,focus+1)"
                            >
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
                                    </div><div class=o>{{commaNumber(data.data.price)}} 萬日幣</div>
                                    <div class=n>
                                        · 所在地
                                    </div><div class=o>{{data.data.place}}</div>
                                    <div class=n>
                                        · 交通
                                    </div><div class=o>{{data.data.traffic}}</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · 格局
                                    </div><div class=o>{{data.data.pattern}}</div>
                                    <div class=n>
                                        · 專有面積
                                    </div><div class=o>{{data.data.area}} 平方公尺</div>
                                    <div class=n>
                                        · 陽台面積
                                    </div><div class=o>{{data.data.balconyArea}} 平方公尺</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · 竣工年月
                                    </div><div class=o>{{data.data.dateYear}} 年<template v-if=data.data.dateMonth> {{data.data.dateMonth}} 月</template>
                                    </div>
                                    <div class=n>
                                        · 總戶數
                                    </div><div class=o>{{data.data.householdCount}} 戶</div>
                                    <div class=n>
                                        · 現況
                                    </div><div class=o>{{data.data.situation}}</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · 管理費
                                    </div><div class=o>{{commaNumber(data.data.managementFee)}} 日幣</div>
                                    <div class=n>
                                        · 修繕基金
                                    </div><div class=o>{{commaNumber(data.data.repairFund)}} 日幣</div>
                                    <div class=n>
                                        · 朝向
                                    </div><div class=o>{{data.data.direction}}</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · 其他費用
                                    </div><div class=o>{{commaNumber(data.data.otherFee)}} 日幣</div>
                                    <div class=n>
                                        · 構造
                                    </div><div class=o>{{data.data.structure}}</div>
                                    <div class=n>
                                        · 建物總樓層
                                    </div><div class=o>{{data.data.levelCount}}</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · 管理方式
                                    </div><div class=o>{{data.data.manageMethod}}</div>
                                    <div class=n>
                                        · 現況
                                    </div><div class=o>{{data.data.situation}}</div>
                                    <div class=n>
                                        · 停車場
                                    </div><div class=o>{{data.data.parkingLot}}</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · 土地用途
                                    </div>
                                    <div class=o>{{data.data.usage}}</div>
                                    <div class=n>
                                        · 土地權利
                                    </div><div class=o>{{data.data.right}}
                                    </div>
                                    <div class=n>
                                        · 交屋日
                                    </div>
                                    <div class=o>{{data.data.handInDate}}</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · 所在樓層
                                    </div><div class=o>{{data.data.level}}</div>
                                </div>
                            </div>
                            <div class=p>
                                ※ 本區提供資料僅供參考，房屋資料需以謄本標示資料為主。
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
                <mightLike
                    :data=mightLikeData
                ></mightLike>
                <hlFooter
                    :language=language.homepageLike.footer
                    :currentLanguage=currentLanguage
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
