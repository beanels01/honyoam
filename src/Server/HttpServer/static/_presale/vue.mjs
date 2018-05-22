import homepageLike from    '../_homepageLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
import mightLike from       './vue/mightLike.mjs'
let presale={
    methods:{
        click(){
            location=`/zh-Hant/presale/${this.data.id}`
        },
        selectClick(e){
            e.stopPropagation()
        },
    },
    props:['data'],
    template:`
        <div
            class=presale
            @click=click
        >
            <div class=a>
                <img :src="'/image/'+data.image">
            </div>
            <div class=b><div>
                <div class=a>
                    <div>
                        <div class=title>
                            {{data.name}}
                        </div>
                        <div class=subtitle>
                            {{data.title}}
                        </div>
                    </div>
                </div>
                <div class=b>
                    <div>
                        <div class=a>格局：{{data.patternMin}} - {{data.patternMax}}</div>
                        <div class=a>面積：{{data.areaMin}} - {{data.areaMax}} 平方公尺</div>
                        <div class=a>價格：{{data.priceMin}} - {{data.priceMax}} 萬
                            <select @click=selectClick>
                                <option>日幣</option>
                                <option>臺幣</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div></div>
            <div
                v-if=data.soldout
                class=c
            ><div>
                <img src=/_presale/saleout.png>
            </div></div>
        </div>
    `
}
let aMain={
    components:{
        hlFooter:       homepageLike.footer,
        hlMenu:         homepageLike.menu,
        hlHeader:       homepageLike.header,
        floatBall:      homepageLike.floatBall,
        presaleLikeTop: presaleLike.top,
        presale,
        mightLike,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
    }),
    props:['language','currentLanguage','data','mainSeminar'],
    template:`
        <div id=main>
            <hlHeader
                shadow=1
                :language=language
                :currentLanguage=currentLanguage
                v-model=menu
                :mainSeminar=mainSeminar
            ></hlHeader>
            <template v-if=!menu>
                <presaleLikeTop
                    :data="{mobile:1,desktop:1}"
                ></presaleLikeTop>
                <div class=b>
                    <div>
                        <span class=blueBar></span>
                        <span class=title>
                            尋找您想要的新成屋<i
                                class="material-icons"
                                style="font-size:1.5em;"
                            >
                                keyboard_arrow_down
                            </i>
                        </span>
                    </div>
                </div>
                <div class=c><div>
                    <div class=a>
                        <div class=block>
                            <div class=a>搜尋區域</div>
                            <select>
                                <option>地區</option>
                            </select>
                            <select>
                                <option>區域</option>
                            </select>
                            <select>
                                <option>車站區域</option>
                            </select>
                        </div>
                    </div>
                    <div class=b>
                        <div class=block>
                            <div class=a>房屋面積</div>
                            <input placeholder=最低>
                            ~
                            <input placeholder=最高>
                            <select>
                                <option>平方公尺</option>
                                <option>坪</option>
                            </select>
                        </div>
                        <div class=margin></div>
                        <div class=block>
                            <div class=a>預算價格</div>
                            <input placeholder=最低>
                            ~
                            <input placeholder=最高>
                            萬
                            <select>
                                <option>日幣</option>
                                <option>臺幣</option>
                            </select>
                            <div class=hint><div>
                                在此標註匯率與相關換算
                            </div></div>
                        </div>
                    </div>
                    <div class=a>
                        <div class=block>
                            <div class=a>
                                房屋格局<br>
                                ＊可複選
                            </div>
                            <label>
                                <input type=checkbox>
                                1K
                            </label>
                            <label>
                                <input type=checkbox>
                                1DK
                            </label>
                            <label>
                                <input type=checkbox>
                                1LDK
                            </label>
                            <label>
                                <input type=checkbox>
                                2LDK
                            </label>
                            <label>
                                <input type=checkbox>
                                3LDK
                            </label>
                            <label>
                                <input type=checkbox>
                                3LDK 以上
                            </label>
                        </div>
                    </div>
                    <div class=c>
                        <div>
                            <button class=o>
                                清除
                            </button><button class=o>
                                搜尋
                            </button>
                        </div>
                    </div>
                </div></div>
                <div class=d>
                    <div>
                        <span class=blueBar></span>
                        <span class=title>新成屋物件</span>
                    </div>
                </div>
                <div class=e>
                    <div>
                        <div v-for="(_,i) in Math.ceil(data.length/2)">
                            <div v-for="a in data.slice(2*i,2*i+2)">
                                <presale
                                    :data=a
                                ></presale>
                            </div>
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
            :data=data
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
