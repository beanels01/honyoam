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
                    src:typeof data=='string'?'/image/'+data:data.url,
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
            return medievalLike.mightLikeData(
                this.data.medieval.list,
                this.data.medieval.medieval.youMightLike,
                this.language.medieval.e4JapaneseCurrency,
                this.currentLanguage
            )
        },
    },
    data:()=>({
        menu:0,
        focus:0,
        格局圖上常見的日文標示:[
            [
                'ワンルーム',
                'R(Room)',
                '房間',
            ],
            [
                'キッチン',
                'K(Kitchen)',
                '廚房',
            ],
            [
                'ダイニング',
                'D(Dining Room)',
                '餐廳',
            ],
            [
                'リビング',
                'L(Living Room)',
                '客廳',
            ],
            [
                '',
                '3LDK',
                '3房、客廳、飯廳、廚房',
            ],
            [
                '畳/帖(たたみ/じょう)',
                'J',
                '1坪等於約2畳/帖',
            ],
            [
                'ウォークインクローゼット',
                'WIS(Walk-in Closet)',
                '可容人進出的衣帽間',
            ],
            [
                'シューズインクローゼット',
                'SIC(Shoes-in Closet)',
                '可容人進出的鞋櫃間',
            ],
            [
                'バルコニー',
                'Balcony',
                '陽台',
            ],
            [
                'ルーフバルコニー',
                'Roof Balcony',
                '屋頂陽台',
            ],
            [
                'トイレ',
                'Toilet',
                '廁所',
            ],
            [
                'ユーティリティ',
                'Utility',
                '家事室',
            ],
            [
                'キッチン',
                'Kitchen',
                '廚房',
            ],
            [
                'ポーチ',
                '',
                '外玄關',
            ],
            [
                '玄関(げんかん)',
                '',
                '玄關',
            ],
            [
                '浴室(よくしつ)',
                'Bath',
                '浴室',
            ],
            [
                '納戶(なんど)',
                'N',
                '收納的小空間',
            ],
            [
                '物入(ものいれ)',
                '',
                '置物櫃',
            ],
            [
                'テラス',
                'Terrace',
                '一樓露臺',
            ],
            [
                'エレベーター',
                'ELV(Elevator)',
                '電梯',
            ],
            [
                'ゴミ持出し場所/ゴミ置場',
                '',
                '垃圾集中場',
            ],
            [
                'ラウンジ/サロン',
                'Lounge/Salon',
                '交誼廳/沙龍',
            ],
            [
                'エントランス',
                'ENT(Entrance)',
                '出入口',
            ],
            [
                'メールコーナー',
                'Mail Corner',
                '信箱',
            ],
            [
                'エレクトリックパイプスペース',
                'EPS(Electric Pipe Space)',
                '電氣管線間',
            ],
            [
                'メーターボックス',
                'MB(Meter Box)',
                '水錶、電錶的收納空間',
            ],
            [
                'トランクルーム',
                'TR(Trunk Room)',
                '倉庫',
            ],
            [
                'パイプスペース',
                'PS(Pipe Space)',
                '管道間',
            ],
        ],
    }),
    methods:{
        commaNumber,
        money(n){
            return n?
                `${commaNumber(n)} ${this.language.medieval.japaneseCurrency}`
            :
                '-'
        }
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
                        language.medieval.homepage,
                        language.medieval.medieval,
                        data.data.name,
                    ]"
                ></aCurrent>
                <medievalLikeTop
                    :data="{
                        mobile:1,
                        language:language.medieval,
                    }"
                ></medievalLikeTop>
                <div class=a>
                    <div class=n>{{data.data.name}}</div>
                    <div class=o>
                        <div class=a>
                            <div class=n>
                                <img
                                    v-if=data.data.gallery[focus]
                                    :src="
                                        typeof data.data.gallery[focus]=='string'?
                                            '/image/'+data.data.gallery[focus]
                                        :
                                            data.data.gallery[focus].url
                                    "
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
                                <span class=b>{{language.medieval.e4JapaneseCurrency}}</span>
                                <span class=c>
                                    {{language.medieval.notice0}}
                                    <br>
                                    {{language.medieval.notice1}}
                                </span>
                            </div>
                            <div class=hl></div>
                            <div class="desktop o p">
                                <div class=a>
                                    <div>{{language.medieval.pattern}}</div>
                                    <div>{{language.medieval.date}}</div>
                                    <div>{{language.medieval.area}}</div>
                                </div>
                                <div>
                                    <div>{{data.data.pattern}}</div>
                                    <div>{{data.data.dateYear}} 年<template v-if=data.data.dateMonth> {{data.data.dateMonth}} 月</template></div>
                                    <div>{{data.data.area}} {{language.medieval.squaredMeter}}</div>
                                </div>
                            </div>
                            <div class="desktop hl"></div>
                            <div class="desktop o p">
                                <div class=a>
                                    <div>{{language.medieval.balconyArea}}</div>
                                    <div>{{language.medieval.level}}</div>
                                    <div>{{language.medieval.levelCount}}</div>
                                </div>
                                <div>
                                    <div>{{data.data.balconyArea}} {{language.medieval.squaredMeter}}</div>
                                    <div>{{data.data.level}} 樓</div>
                                    <div>地上{{data.data.levelCountUp}}層,地下{{data.data.levelCountDown}}層</div>
                                </div>
                            </div>
                            <div class="desktop hl"></div>
                            <div class="desktop o p">
                                <div class=a>
                                    <div>{{language.medieval.structure}}</div>
                                    <div>{{language.medieval.householdCount}}</div>
                                    <div>{{language.medieval.direction}}</div>
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
                                    <div class=n>{{language.medieval.place}}</div>
                                    <div>{{data.data.place}}</div>
                                </div>
                                <div>
                                    <div class=n>{{language.medieval.traffic}}</div>
                                    <div>{{data.data.traffic}}</div>
                                </div>
                            </div>
                            <div class=mobile>
                                <span class=a>{{language.medieval.pattern}}：</span>{{data.data.pattern}}
                                <div class="hl"></div>
                                <span class=a>{{language.medieval.date}}：</span>{{data.data.dateYear}} 年<template v-if=data.data.dateMonth> {{data.data.dateMonth}} 月</template>
                                <div class="hl"></div>
                                <span class=a>{{language.medieval.area}}：</span>{{data.data.area}} {{language.medieval.squaredMeter}}
                                <div class="hl"></div>
                                <span class=a>{{language.medieval.balconyArea}}：</span>{{data.data.balconyArea}} {{language.medieval.squaredMeter}}
                                <div class="hl"></div>
                                <span class=a>{{language.medieval.level}}：</span>{{data.data.level}} 樓
                                <div class="hl"></div>
                                <span class=a>{{language.medieval.levelCount}}：</span>地上{{data.data.levelCountUp}}層,地下{{data.data.levelCountDown}}層
                                <div class="hl"></div>
                                <span class=a>{{language.medieval.direction}}：</span>{{data.data.direction}}
                                <div class="hl"></div>
                                <span class=a>{{language.medieval.place}}：</span>{{data.data.place}}
                                <div class="hl"></div>
                                <span class=a>{{language.medieval.structure}}：</span>{{data.data.structure}}
                                <div class="hl"></div>
                                <span class=a>{{language.medieval.householdCount}}：</span>{{data.data.householdCount}}
                                <div class="hl"></div>
                                <span class=a>{{language.medieval.traffic}}：</span>{{data.data.traffic}}
                            </div>
                            <div class=hl></div>
                            <div class=r>
                                <reserveButton
                                    :data="{href:href.qaForm}"
                                ></reserveButton>
                                <moreButton
                                    :data="{href:href.loan}"
                                ></moreButton>
                            </div>
                        </div>
                        <div class=c>
                            <div
                                class=n
                            >
                                <img
                                    v-if=data.data.gallery[focus]
                                    :src="
                                        typeof data.data.gallery[focus]=='string'?
                                            '/image/'+data.data.gallery[focus]
                                        :
                                            data.data.gallery[focus].url
                                    "
                                >
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
                        <div class=a>{{language.medieval.details}}</div><div class=hl></div>
                        <div class=b>
                            <div class=n>
                                {{data.data.name}}
                            </div>
                            <div class=o>
                                <div>
                                    <div class=n>
                                        · {{language.medieval.price}}
                                    </div><div class=o>{{commaNumber(data.data.price)}} {{language.medieval.e4JapaneseCurrency}}</div>
                                    <div class=n>
                                        · {{language.medieval.place}}
                                    </div><div class=o>{{data.data.place}}</div>
                                    <div class=n>
                                        · {{language.medieval.traffic}}
                                    </div><div class=o>{{data.data.traffic}}</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · {{language.medieval.pattern}}
                                    </div><div class=o>{{data.data.pattern}}</div>
                                    <div class=n>
                                        · {{language.medieval.area}}
                                    </div><div class=o>{{data.data.area}} {{language.medieval.squaredMeter}}</div>
                                    <div class=n>
                                        · {{language.medieval.balconyArea}}
                                    </div><div class=o>{{data.data.balconyArea}} {{language.medieval.squaredMeter}}</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · {{language.medieval.date}}
                                    </div><div class=o>{{data.data.dateYear}} 年<template v-if=data.data.dateMonth> {{data.data.dateMonth}} 月</template>
                                    </div>
                                    <div class=n>
                                        · {{language.medieval.householdCount}}
                                    </div><div class=o>{{data.data.householdCount}} 戶</div>
                                    <div class=n>
                                        · {{language.medieval.situation}}
                                    </div><div class=o>{{data.data.situation}}</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · {{language.medieval.managementFee}}
                                    </div><div class=o>{{
                                        money(data.data.managementFee)
                                    }}</div>
                                    <div class=n>
                                        · {{language.medieval.repairFund}}
                                    </div><div class=o>{{
                                        money(data.data.repairFund)
                                    }}</div>
                                    <div class=n>
                                        · {{language.medieval.direction}}
                                    </div><div class=o>{{data.data.direction}}</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · {{language.medieval.otherFee}}
                                    </div><div class=o>{{
                                        money(data.data.otherFee)
                                    }}</div>
                                    <div class=n>
                                        · {{language.medieval.structure}}
                                    </div><div class=o>{{data.data.structure}}</div>
                                    <div class=n>
                                        · {{language.medieval.levelCount}}
                                    </div><div class=o>地上{{data.data.levelCountUp}}層,地下{{data.data.levelCountDown}}層</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · {{language.medieval.manageMethod}}
                                    </div><div class=o>{{
                                        data.data.manageMethod
                                    }}</div><div class=n>
                                        · {{language.medieval.level}}
                                    </div><div class=o>{{
                                        data.data.level
                                    }} 樓</div><div class=n>
                                        · {{language.medieval.parkingLot}}
                                    </div><div class=o>{{
                                        data.data.parkingLot||'-'
                                    }}</div>
                                </div>
                                <div>
                                    <div class=n>
                                        · {{language.medieval.usage}}
                                    </div><div class=o>{{
                                        data.data.usage
                                    }}</div><div class=n>
                                        · {{language.medieval.right}}
                                    </div><div class=o>{{
                                        data.data.right
                                    }}</div><div class=n>
                                        · {{language.medieval.handInDate}}
                                    </div><div class=o>{{
                                        data.data.handInDate
                                    }}</div>
                                </div>
                            </div>
                            <div class=p>
                                {{language.medieval.notice2}}
                            </div>
                        </div>
                    </div>
                    <div class=p>
                        <div class=a>{{language.medieval.patternDrawing}}</div><div class=hl></div>
                        <div class=b>
                            <div class=n>
                                <div class=a>
                                    ※ 格局圖上常見的日文標示:
                                </div>
                                <div class=b>
                                    <div class=a>
                                        <div class=a>
                                            <div class=a>日文</div>
                                            <div class=b>英文</div>
                                            <div class=b>中文</div>
                                        </div>
                                        <div v-for="a of 格局圖上常見的日文標示" class=b>
                                            <div class=a>{{a[0]}}</div>
                                            <div class=b>{{a[1]}}</div>
                                            <div class=b>{{a[2]}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class=c>
                                    上述名詞皆為日文與外來語翻譯，各公司與建商表示皆不盡相同，以上翻譯僅供參考，實際仍以房屋內實際現況為主。<br>
                                    {{language.medieval.notice3}}
                                </div>
                            </div>
                            <div class=o>
                                <img :src="
                                    typeof data.data.patternImage=='string'?
                                        '/image/'+data.data.patternImage
                                    :
                                        data.data.patternImage.url
                                ">
                            </div>
                        </div>
                    </div>
                    <div class=o>
                        <div class=a>{{language.medieval.surroundingMap}}</div><div class=hl></div>
                        <div class=b>
                            <div class=n>
                                <iframe :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyBmpfcp2k1_PTevyeo7J-kWcD6k0xYMGPk&q='+encodeURIComponent(data.data.place)" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                            </div>
                            <div class=o>
                                {{language.medieval.notice4}}
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
                        <div class=a>{{language.medieval.contactUs}}</div><div class=hl></div>
                        <div class=b>
                            <contactInfo></contactInfo>
                        </div>
                    </div>
                </div>
                <mightLike
                    :data="{
                        data:mightLikeData,
                        language:language.homepageLike.mightLike,
                    }"
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
