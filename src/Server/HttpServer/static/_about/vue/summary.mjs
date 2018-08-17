let summary={
    data:()=>({
        data:[
            {
                key:'公司名稱',
                value:`本葉国際資產管理株式会社
Honyo International Assets Management LTD.`,

            },
            {
                key:'公司地址',
                value:`〒 105-0012
日本國東京都港区芝大門 2‐4‐1 IZUMI ビル 4 階`,
            },
            {
                key:'電話(日本)',
                value:`TEL (81) 03－6809－1836`,
            },
            {
                key:'代表取締役社長',
                value:`林彦宏`,
            },
            {
                key:'設立年月日',
                value:`2013年12月12日`,
            },
            {
                key:'營業執照',
                value:`東京都知事（1）第96199號`,
            },
            {
                key:'所屬團體',
                value:`公益社団法人東京都宅地建物取引業協会
公益社団法人全国宅地建物取引業保証協会
公益財団法人東日本不動産流通機構`,
            },
            {
                key:'公司網頁',
                value:`https://www.honyoam.com`,
            },
            {
                key:'顧問律師',
                value:`諏訪坂法律事務所 弁護士 望月 晶子 Akiko Mochizuki`,
            },
            {
                key:'台北事務所',
                value:`104台北市中山區松江路122號11樓
Tel：02-2785-5865`,
            },
        ],
        more:0,
    }),
    props:[
        'currentLanguage',
        'language',
    ],
    template:`
        <div class=summary>
            <div class=a>
                <div class=a>
                    <span class=a>公司概要</span> / SUMMARY
                </div>
                <div class=b>
                    <div>
                        <div v-for="a in data">
                            <div class=a>{{a.key}}</div>
                            <div class=b>{{a.value}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=p><div>
                <div class=a>
                    <img src=/_about/img/icon0.png><br>
                    <br>
                    <div v-html=language.p[0]></div>
                </div>
                <div class=b></div>
                <div class=a>
                    <img src=/_about/img/icon2.png><br>
                    <br>
                    <div v-html=language.p[1]></div>
                </div>
                <div class=b></div>
                <div class=a>
                    <img src=/_about/img/icon1.png><br>
                    <br>
                    <div v-html=language.p[2]></div>
                </div>
            </div></div>
            <div class=u>
                <div v-html=language.u>
                </div>
                <img src=/_about/img/a0.png style=width:20%>
                <img src=/_about/img/a1.png style=width:70%>
            </div>
            <div class=n>團隊介紹</div>
            <div class=o>
                <h2>代表取締役社長 林彦宏</h2>
                <p>
                    對土地有熱情,對建築有專業,本著近30年不動產經驗,有感於客戶對日本不動產投資的需求,為提供客戶量身訂做的服務,召集了相關專業及有經驗人士,建立了這個專門提供日本不動產投資服務的團隊。簡歷
                <ul>
                <li>1990 年進入信義房屋集團</li>
                <li>1996 年信義房屋集團安信建築經理(股)經理</li>
                <li>2003 年信義房屋集團義富資產管理服務公司副總經理</li>
                <li>2009 年信義房屋集團日本信義房屋的第一任代表取締役社長</li>
                <li>2014 年本葉國際資產管理株式会社代表取締役社長至今資格</li>
                <li>台灣首屆取得國際認證不動產投資師 (CCIM,Certified Commercial Investment Member）資格</li>
                <li>不動產經紀人執照字號:北市經字第01182號</li>
                </ul>
                <h3>最新採訪與報導</h3>
                <ul>
                <li><a href=https://money.udn.com/money/story/5930/3253098>【經濟日報 2018,07.15 】東京銀座房市 投資客搶進</a></li>
                <li><a href=https://goo.gl/A2U4ez>【經濟日報 2018,07.12 】日消費稅明年調漲 擬赴日置產應即早規劃</a></li>
                <li v-if=!more><button @click="more=1">點此看更多</button></li>
                <template v-if=more>
                    <li><a href=https://news.tvbs.com.tw/world/920738>【TVBS 2018,05.16 】東京澀谷都更連連 房仲：可觀察投資機會</a></li>
                    <li><a href=https://money.udn.com/money/story/5641/3145054>【經濟日報 2018,05.16 】</a></li>
                    <li><a href=https://tw.finance.appledaily.com/daily/20180402/37976171/>【蘋果日報 2018,04.02】半百跳脫舒適圈 赴日本創業</a></li>
                    <li>各大媒體報導~本葉2018,03.03&04於台北及台中的說明會
                        <ul>
                        <li><a href=https://goo.gl/P4gtMJ>【理財周刊】</a></li>
                        <li><a href=https://goo.gl/1erYmH>【蘋果日報】</a></li>
                        <li><a href=http://estate.ltn.com.tw/article/4839>【自由時報】</a></li>
                        </ul>
                    <li><a href="https://tw.appledaily.com/new/realtime/20180228/1305701/">【蘋果日報2018,02.28】在日本買不動產地震險不強制</a></li>
                    <li>書籍《錢進日本》達人帶路,東京房地產完全攻略於 2016,05 出版</li>
                    <li>【財訊】雙週刊 2015,02.26 471 期的特別報導 ~ 《海外買房新顯學》日本不動產主題 林彥宏社長採訪</li>
                    <li>【日本週刊住宅】2014,08.04 專訪林彥宏社長</li>
                    <li>『商業周刊第 1016 期-2007/05/14 』 報導:台灣首批國際認證不動產投資師出爐</li>
                        <ul>
                        <li><a href=http://www.gallop.com.tw/news_doc/story366.htm>http://www.gallop.com.tw/news_doc/story366.htm</a></li>
                        <li><a href="http://m.blog.sina.com.tw/uh_mark/article.php?pbgid=59208&entryid=577736">http://m.blog.sina.com.tw/uh_mark/article.php?pbgid=59208&entryid=577736</a></li>
                        </ul>
                    <li><a href="http://m.blog.sina.com.tw/uh_mark/article.php?pbgid=59208&entryid=577736">日本信義前社長自立門戶 出書談日本房市</a></li>
                    <li><a href="https://www.trademag.org.tw/content02.asp?id=615211&type=50&url=/index.asp?">腳踏實地 信義房屋敲開東京不動產界大門</a></li>
                </template>
                </ul>
            </div>
            <div class=n>社長的話</div>
            <div class=o>
                <p>
                    從事不動產工作近 30 年 , 累積了從兩岸三地到日本的多方經驗 , 尤其旅居日本的這些年來歷經雷曼事件到 311 大地震 , 看到了日本經濟的大變化及不動產的價 值 , 也 慢慢發現日本這個民族的韌性 , 這個國家還有很大發展空間 , 就整體不 動 產市場 而言 , 像一顆未被雕琢的寶石 , 值 得你我共同去關注 。
                </p>
                <p>
                    開設本葉國際的初衷與其說是為了開一家公司 , 不如說是個人累積的經驗很想與大家分享 , 從一個台灣人的眼中如何 看日本的不動產 , 從一個台灣人的眼中怎麼看東京 , 希望可以對大家有些許的幫助 !  期望能在這變動的時代裡 成為 投資人信任 的夥伴 , 且在我們提供方便貼心的溝通橋樑與在 地化的專業 服務下 , 能 夠 在日本不動產投資的過程中 買 的開心 、賣的放心 也 住 的 順心 。
                </p>
                <p>
                    在客戶服務方面
                </p>
                <p>
                    海外置產不同於國內購屋 , 因此本葉國際慣以資產管理之名 , 為客戶打造個別專屬的服務及資產配置與管理 , 不但提供日本不 動產投資買賣仲介 , 同時也提供資產管理與投資顧問的相關配套服務 , 本葉深深認為 , 服務是從成交之後開始
                </p>
                <p>
                    在投資標的服務方面
                </p>
                <p>
                    有 別於 其他不動產仲介公司最大的不同 , 在於本葉國際資產管理受到 三菱 地 所 Residence 及 NTT 都市 開發等日本大手建商 的 信賴 , 除一般中古物件外 , 針對大中華圈 客戶 代理 販售預售 屋及新成屋 , 提供與日本國內消費者相同的購屋服務 。
                </p>
                <p>
                    有幸受到 投資客戶的信賴與支持 , 給予我們團隊源源不斷的動力 , 整體業務也持續成長中 , 今後 , 我們仍會 秉持 著創業時的初衷 以專業及熱忱精神貫徹並實行著 , 為 所有客戶提供更多附加價 值 的理念 。
                </p>
            </div>
        </div>
    `
}
export default summary
