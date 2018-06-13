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
    }),
    props:['language','currentLanguage','mainSeminar'],
    template:`
        <div id=main>
            <hlHeader
                shadow=1
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
                v-model=menu
            ></hlHeader>
            <template v-if=!menu>
                <div class=a>
                    <div class=n>
                        <img src=/_about/img/logo.png>
                    </div>
                    <div class=o>
                        <div class=a>
                            <ul>
                            <li>成立於 2013 年</li>
                            <li>總公司本葉国際資産管理株式会社</li>
                            <li>位於東京港區、台北松江路設有辦公室</li>
                            <li>業務內容:
                                <ul>
                                <li>不動產預售代銷</li>
                                <li>中古屋仲介買賣、投資諮詢</li>
                                <li>不動產租賃管理一站式服務</li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        <div class=b>
                            <div class=n>
                                <div class=a>
                                    <div class=n>
                                        東京辦公室
                                    </div>
                                    <div class=n>
                                        本葉国際資產管理株式会社
                                        〒105-0012　東京都港区芝大門2‐4‐1　IZUMIビル4階
                                        TEL 03－6809－1836
                                    </div>
                                </div>
                                <div class=a>
                                    <div class=n>
                                        台北辦公室
                                    </div>
                                    <div class=o>
                                        本葉國際資產管理股份有限公司
104台北市中山區松江路122號11樓
Tel：02-2785-5865
                                    </div>
                                </div>
                                <div class=a>
                                    <div class=n>
                                        代表取締役社長
                                    </div>
                                    <div class=p>
                                        林彦宏
                                    </div>
                                </div>
                                <div class=a>
                                    <div class=n>
                                        設立年月日
                                    </div>
                                    <div class=o>
                                        2013年12月19日
                                    </div>
                                </div>
                                <div class=a>
                                    <div class=n>
                                        營業執照
                                    </div>
                                    <div class=p>
                                        東京都知事（1）第96199號
                                    </div>
                                </div>
                                <div class=a>
                                    <div class=n>
                                        所屬團體
                                    </div>
                                    <div>
                                        <div class=o>
                                            公益社団法人東京都宅地建物取引業協会
                                        </div>
                                        <div class=p>
                                            公益社団法人全国宅地建物取引業保証協会
                                        </div>
                                    </div>
                                </div>
                                <div class=a>
                                    <div class=n>
                                        公司網頁
                                    </div>
                                    <div class=o>
                                        www.honyoam.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=p>
                        <div class=a>
                        </div>
                        <div class=a>
                        </div>
                        <div class=a>
                        </div>
                    </div>
                    <div class=q>
                    </div>
                    <div class=r>
                    </div>
                    <div class=s>
                    </div>
                    <div class=t>
                    </div>
                    <div class=u>
                    </div>
                    <div class=v>
                    </div>
                    <div class=w>
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
    `
}
