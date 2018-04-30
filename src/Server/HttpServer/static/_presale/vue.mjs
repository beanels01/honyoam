import homepageLike from    '../_homepageLike.mjs'
let presale={
    methods:{
        click(){
            location='/zh-Hant/presaleId'
        },
    },
    props:['data'],
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
                            {{data.title}}
                        </div>
                        <div class=subtitle>
                            {{data.subtitle}}
                        </div>
                    </div>
                </div>
                <div class=b>
                    <div>
                        <div class=a>格局：{{data.pattern}}</div>
                        <div class=a>面積：{{data.area}}</div>
                        <div class=a>價格：{{data.price}}</div>
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
        data:{
            array:[
                {
                    title:'ウエリス新宿早稲田の森',
                    subtitle:'副都心線&大江戶線組合成的都心便利交通',
                    pattern:'1LDK - 3LDK',
                    area:'44.77m² - 81.20m²',
                    price:'4,998万円 - 9,238万円',
                    soldout:false,
                },
                {
                    title:'ザ・パークワンズ 渋谷本町',
                    subtitle:'構成東京中核之一的副都心「新宿」',
                    pattern:'2LDK~4LDK',
                    area:'64.69M2~87.58M2',
                    price:'3758萬円~5408萬円',
                    soldout:false,
                },
                {
                    title:'ザ・パークワンズ 渋谷本町',
                    subtitle:'構成東京中核之一的副都心「新宿」',
                    pattern:'2LDK~4LDK',
                    area:'64.69M2~87.58M2',
                    price:'3758萬円~5408萬円',
                    soldout:false,
                },
                {
                    title:'ザ・パークワンズ 渋谷本町',
                    subtitle:'構成東京中核之一的副都心「新宿」',
                    pattern:'2LDK~4LDK',
                    area:'64.69M2~87.58M2',
                    price:'3758萬円~5408萬円',
                    soldout:true,
                },
                {
                    title:'ザ・パークワンズ 渋谷本町',
                    subtitle:'構成東京中核之一的副都心「新宿」',
                    pattern:'2LDK~4LDK',
                    area:'64.69M2~87.58M2',
                    price:'3758萬円~5408萬円',
                    soldout:true,
                },
                {
                    title:'ザ・パークワンズ 渋谷本町',
                    subtitle:'構成東京中核之一的副都心「新宿」',
                    pattern:'2LDK~4LDK',
                    area:'64.69M2~87.58M2',
                    price:'3758萬円~5408萬円',
                    soldout:false,
                },
                {
                    title:'ザ・パークワンズ 渋谷本町',
                    subtitle:'構成東京中核之一的副都心「新宿」',
                    pattern:'2LDK~4LDK',
                    area:'64.69M2~87.58M2',
                    price:'3758萬円~5408萬円',
                    soldout:false,
                },
            ]
        },
    }),
    props:['language','currentLanguage'],
    template:`
        <div id=main>
            <template v-if=!menu>
                <div class=static>
                    <div>
                        <div class=a>新成屋</div>
                        <div class=b>PRESOLD HOUSE</div>
                    </div>
                </div>
                <div class=a>
                    <div>
                        首頁 > <span class=current>新成屋</span>
                    </div>
                </div>
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
                            </select>
                        </div>
                        <div class=margin></div>
                        <div class=block>
                            <div class=a>預算價格</div>
                            <input placeholder=最低>
                            ~
                            <input placeholder=最高>
                            萬日幣
                        </div>
                    </div>
                    <div class=b>
                        <div class=block>
                            <div class=a>房屋年齡</div>
                            <input placeholder=自由輸入值>
                            年以內
                        </div>
                        <div class=margin></div>
                        <div class=block>
                            <div class=a>距離車站</div>
                            <input placeholder=自由輸入值>
                            分鐘以內
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
                </div></div>
                <div class=d>
                    <div>
                        <span class=blueBar></span>
                        <span class=title>新成屋物件</span>
                    </div>
                </div>
                <div class=e>
                    <div>
                        <div v-for="(_,i) in Math.ceil(data.array.length/2)">
                            <div v-for="a in data.array.slice(2*i,2*i+2)">
                                <presale
                                    :data=a
                                ></presale>
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
                    <div v-for="e in [,,,,]">
                        <div class=a>
                            <img src=/_presale/test>
                        </div>
                        <div class=b>
                            標題可能很長 長到會換行 不夠 再長一點
                        </div>
                        <div class=c>副標</div>
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
                shadow=1
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
