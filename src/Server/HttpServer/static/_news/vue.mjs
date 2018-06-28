import homepageLike from    '../_homepageLike.mjs'
let normalBlock={
    props:['value'],
    template:`
        <div
            :class="{focus:value}"
        >
            <div class=a>
                <div class=a>2018年02月26日</div>
                <div class=b><span>一般公告</span></div>
            </div>
            <div class=b>
                <div
                    class=b
                    @click="$emit('input',!value)"
                >
                    <div
                        class=a
                    >
                        而如果有人認為這只是紀德的自由行動老調重彈，他就是沒有看出這個理論與紀德的理論之間的巨大差別。
                    </div>
                    <div class=b>
                        <img class=a src=/_news/img/arrow.png>
                        <img class=b src=/_news/img/arrow-focus.png>
                    </div>
                </div>
                <div
                    class=c
                >
                    儘管如此，如我曾經說過的，我們是能判斷的，因為人是參照別人進行選擇的；而在參照別人時，人就選擇了自己。首先，人能夠判斷——也許這不是一種價值判斷，但是一種邏輯判斷——在有些事情上，人的選擇是根據一種錯誤，而在另外一些事情上，選擇則是根據真實情況。我們可以判斷一個人，說他欺騙自己。因為我們曾經解釋人類的處境是一種自由選擇的處境，沒有藉口也沒有援助，所以任何人以自己的熱情或者發明什麼決定論學術作為藉口，為自己開脫，就是自我欺騙。人們可以提出反對說：「可是為什麼他不可以選擇自我欺騙呢？」我的回答是，我沒有資格在道德上對他進行判斷，但是我斷定他的自我欺騙是一種錯誤。談到這裡，人們沒法不作一項真偽的判斷。自我欺騙顯然是虛偽的，因為它掩蓋了人有承擔責任的完全自由。根據同樣的標準，如果我宣稱某些價值是我非接受不可的，這也是自我欺騙；我自願挑上這些價值，同時說這些價值是逼著我接受的，這不是自相矛盾嗎？如果有人對我說：「如果我要欺騙自己，那又怎麼樣呢？」我回答說：「我沒有理由說你為什麼不應當這樣做，但是我要宣稱你在自我欺騙，而且只有始終如一的態度才是誠實可靠的態度。」
                </div>
            </div>
        </div>
    `
}
let enewsLikeBlock={
    template:`
        <div>
            <div class=a><div>
                <div class=a>2018年02月26日</div>
                <div class=b><span>ENEWS ‧ 第 161 期</span></div>
            </div></div>
            <div class=b>
                <div
                    class=b
                    @click="$emit('click')"
                >
                    <div
                        class=a
                    >
                        而如果有人認為這只是紀德的自由行動老調重彈，他就是沒有看出這個理論與紀德的理論之間的巨大差別。
                    </div>
                    <div class=b>
                        More +
                    </div>
                </div>
            </div>
        </div>
    `
}
let enewsLikeContent={
    template:`
        <div>
            <div class=a>
                <div class=a>
                    <span>ENEWS ‧ 第 161 期</span>
                </div>
                <div class=b>
                    2018年02月26日
                </div>
            </div>
            <div class=b>
                而如果有人認為這只是紀德的自由行動老調重彈，他就是沒有看出這個理論與紀德的理論之間的巨大差別。
            </div>
            <div class=c>
                儘管如此，如我曾經說過的，我們是能判斷的，因為人是參照別人進行選擇的；而在參照別人時，人就選擇了自己。首先，人能夠判斷——也許這不是一種價值判斷，但是一種邏輯判斷——在有些事情上，人的選擇是根據一種錯誤，而在另外一些事情上，選擇則是根據真實情況。我們可以判斷一個人，說他欺騙自己。因為我們曾經解釋人類的處境是一種自由選擇的處境，沒有藉口也沒有援助，所以任何人以自己的熱情或者發明什麼決定論學術作為藉口，為自己開脫，就是自我欺騙。人們可以提出反對說：「可是為什麼他不可以選擇自我欺騙呢？」我的回答是，我沒有資格在道德上對他進行判斷，但是我斷定他的自我欺騙是一種錯誤。談到這裡，人們沒法不作一項真偽的判斷。自我欺騙顯然是虛偽的，因為它掩蓋了人有承擔責任的完全自由。根據同樣的標準，如果我宣稱某些價值是我非接受不可的，這也是自我欺騙；我自願挑上這些價值，同時說這些價值是逼著我接受的，這不是自相矛盾嗎？如果有人對我說：「如果我要欺騙自己，那又怎麼樣呢？」我回答說：「我沒有理由說你為什麼不應當這樣做，但是我要宣稱你在自我欺騙，而且只有始終如一的態度才是誠實可靠的態度。」
            </div>
            <div class=d>
                <div class=a>
                    <div>
                        <img src="/_news/img/num_l.png">
                        上一則<span class=a>：而如果有人認為……</span>
                    </div>
                </div>
                <div class=b>
                    <div>
                        回列表
                    </div>
                </div>
                <div class=c>
                    <div>
                        下一則<span class=a>：而如果有人認為……</span>
                        <img src="/_news/img/num_r.png">
                    </div>
                </div>
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
        normalBlock,
        enewsLikeBlock,
        enewsLikeContent,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
        year:2018,
        type:'normal',
        normalFocus:{},
        enewsLikeFocus:null,
    }),
    props:['data','language','currentLanguage','mainSeminar',],
    template:`
        <div id=main>
            <hlHeader
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
                v-model=menu
            ></hlHeader>
            <template v-if=!menu>
                <div class=top>
                    <div class=mobile>
                        <div class=a><div>
                            <div class=a>最新消息</div>
                            <div class=b>News</div>
                        </div></div>
                        <div class=b>
                            首頁 > <span class=n>最新消息</span>
                        </div>
                    </div>
                    <div class=desktop><div><div>
                        <div class=n>
                            <div class=a>最新消息</div>
                            <div class=b>NEWS</div>
                        </div>
                        <div class=o>
                            首頁 > 最新消息
                        </div>
                    </div></div></div>
                </div>
                <select class=yearSelect v-model=year>
                    <option value=2018>2018 年</option>
                    <option value=2019>2019 年</option>
                    <option value=2020>2020 年</option>
                    <option value=2021>2021 年</option>
                    <option value=2022>2022 年</option>
                    <option value=2023>2023 年</option>
                    <option value=2024>2024 年</option>
                    <option value=2025>2025 年</option>
                </select>
                <div class=typeSelect>
                    <select class=mobile v-model=type
                        @input="enewsLikeFocus=null"
                    >
                        <option value="normal">一般公告</option>
                        <option value="enews">E-News</option>
                        <option value="president">社長專欄</option>
                        <option value="success">成功案例</option>
                    </select>
                    <div class=desktop>
                        <div
                            :class="{focus:type=='normal'}"
                            @click="type='normal'"
                            @click="enewsLikeFocus=null"
                        >一般公告</div>
                        <div
                            :class="{focus:type=='enews'}"
                            @click="type='enews'"
                            @click="enewsLikeFocus=null"
                        >E-News</div>
                        <div
                            :class="{focus:type=='president'}"
                            @click="type='president'"
                            @click="enewsLikeFocus=null"
                        >社長專欄</div>
                        <div
                            :class="{focus:type=='success'}"
                            @click="type='success'"
                            @click="enewsLikeFocus=null"
                        >成功案例</div>
                    </div>
                </div>
                <div
                    v-if="type=='normal'"
                    class=normal
                >
                    <normalBlock
                        v-for="(a,i) of [,,,,,,,,]"
                        v-model=normalFocus[i]
                    ></normalBlock>
                </div>
                <div
                    v-if="type!='normal'"
                    class=enewsLike
                >
                    <div
                        v-if="enewsLikeFocus==null"
                        class=a
                    >
                        <enewsLikeBlock
                            v-for="(a,i) of [,,,,,,,,]"
                            @click="enewsLikeFocus=i"
                        ></enewsLikeBlock>
                    </div>
                    <enewsLikeContent
                        v-if="enewsLikeFocus!=null"
                        class=b
                    ></enewsLikeContent>
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
            :data=data
            :language=language
            :currentLanguage=currentLanguage
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
