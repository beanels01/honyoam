import homepageLike from    '../_homepageLike.mjs'
let presale={
    methods:{
        click(){
            location='/zh-Hant/presaleId'
        },
    },
    template:`
        <div
            class=presale
            @click=click
        >
            <div class=a>
                <img src=/_presale/test>
            </div>
            <div class=b><div>
                <div class=a>
                    <div>
                        <div class=title>
                            ザ・パークワンズ 渋谷本町
                        </div>
                        <div class=subtitle>構成東京中核之一的副都心「新宿」</div>
                    </div>
                </div>
                <div class=b>
                    <div>
                        <div class=a>格局：2LDK~4LDK</div>
                        <div class=a>面積：64.69M2~87.58M2</div>
                        <div class=a>價格：3758萬円~5408萬円</div>
                    </div>
                </div>
            </div></div>
        </div>
    `
}
let aMain={
    components:{
        hlFooter:   homepageLike.footer,
        hlMenu:     homepageLike.menu,
        hlHeader:   homepageLike.header,
        floatBall:  homepageLike.floatBall,
        presale,
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
                        <div class=a>預售屋</div>
                        <div class=b>PRESOLD HOUSE</div>
                    </div>
                </div>
                <div class=a>
                    <div>
                        首頁 > <span class=current>預售屋</span>
                    </div>
                </div>
                <div class=b>
                    <div>
                        <span class=blueBar></span>
                        <span class=title>尋找您想要的預售屋 v</span>
                    </div>
                </div>
                <div class=c>
                    <div>
                        <div class=a>
                            <div class="block">
                                搜尋區域
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
                                房屋面積
                                <input placeholder=最低>
                                ~
                                <input placeholder=最高>
                                <select>
                                    <option>平方公尺</option>
                                </select>
                            </div>
                            <div class=margin></div>
                            <div class=block>
                                預算價格
                                <input placeholder=最低>
                                ~
                                <input placeholder=最高>
                                萬日幣
                            </div>
                        </div>
                        <div class=b>
                            <div class=block>
                                房屋年齡
                                <input placeholder=自由輸入值>
                                年以內
                            </div>
                            <div class=margin></div>
                            <div class=block>
                                距離車站
                                <input placeholder=自由輸入值>
                                分鐘以內
                            </div>
                        </div>
                        <div class=a>
                            <div class=block>
                                <span class=a>
                                    房屋格局<br>
                                    ＊可複選
                                </span>
                                <label>
                                    <input type=checkbox>
                                    1K
                                </label>
                                <label>
                                    <input type=checkbox>
                                    1R
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
                                    2DK
                                </label>
                                <label>
                                    <input type=checkbox>
                                    2LDK
                                </label>
                                <label>
                                    <input type=checkbox>
                                    3LDK
                                </label>
                            </div>
                        </div>
                        <div class=c>
                            <button>清除</button>
                            <button>搜尋</button>
                        </div>
                    </div>
                </div>
                <div class=d>
                    <div>
                        <span class=blueBar></span>
                        <span class=title>預售屋物件</span>
                    </div>
                </div>
                <div class=e>
                    <div>
                        <div v-for="a in [,,,]">
                            <div>
                                <presale></presale>
                            </div>
                            <div></div>
                            <div>
                                <presale></presale>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=f>
                    <div>
                        <span class=blueBar></span>
                        <span class=title>您可能會喜歡</span>
                    </div>
                </div>
                <div class=g>
                    <div>
                        ......
                    </div>
                </div>
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
