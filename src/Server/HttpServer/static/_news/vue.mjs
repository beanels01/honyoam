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
        year:2018,
        type:'normal',
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
                    <select class=mobile v-model=type>
                        <option>一般公告</option>
                        <option>E-News</option>
                        <option>社長專欄</option>
                        <option>成功案例</option>
                    </select>
                    <div class=desktop>
                        <div
                            :class="{focus:type=='normal'}"
                            @click="type='normal'"
                        >一般公告</div>
                        <div
                            :class="{focus:type=='enews'}"
                            @click="type='enews'"
                        >E-News</div>
                        <div
                            :class="{focus:type=='president'}"
                            @click="type='president'"
                        >社長專欄</div>
                        <div
                            :class="{focus:type=='success'}"
                            @click="type='success'"
                        >成功案例</div>
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
