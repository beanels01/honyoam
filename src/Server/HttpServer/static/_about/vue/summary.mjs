let summary={
    data:()=>({
        more:0,
    }),
    props:[
        'currentLanguage',
        'data',
        'language',
    ],
    template:`
        <div class=summary>
            <div class=a>
                <img class=bga src=/_about/img2/bu01.jpg>
                <img class=bgb src=/_about/img2/bu02.jpg>
                <div class=a>
                    <span class=a>{{language.公司概要}}</span> / OUTLINE
                </div>
                <div class=b>
                    <div v-for="a in language.table">
                        <div class=a>{{a.key}}</div>
                        <div class=b>{{a.value}}</div>
                    </div>
                </div>
            </div>
            <div class=p><div>
                <div class=a>
                    <img src=/_about/img2/001-01.png><br>
                    <br>
                    <div v-html=language.p[0]></div>
                </div>
                <div class=b></div>
                <div class=a>
                    <img src=/_about/img2/002-01.png><br>
                    <br>
                    <div v-html=language.p[1]></div>
                </div>
                <div class=b></div>
                <div class=a>
                    <img src=/_about/img2/003-01.png><br>
                    <br>
                    <div v-html=language.p[2]></div>
                </div>
            </div></div>
            <div class=vla>
                <div></div>
            </div>
            <div class=n>{{language.團隊介紹}}</div>
            <div class=o>
                <div class=a>{{language.代表取締役社長}}</div>
                <div class=b>
                    <p>
                        {{language.p0}}
                    </p>
                    <ul>
                        <li v-for="a of language.ul0">{{a}}</li>
                    </ul>
                    <div class=a>{{language.資格}}</div>
                    <ul>
                        <li v-for="a of language.ul1">{{a}}</li>
                    </ul>
                    <div class=a>{{language.最新採訪與報導}}</div>
                    <ul>
                    <li><a href=https://money.udn.com/money/story/5930/3253098>【經濟日報 2018,07.15 】東京銀座房市 投資客搶進</a></li>
                    <li><a href=https://goo.gl/A2U4ez>【經濟日報 2018,07.12 】日消費稅明年調漲 擬赴日置產應即早規劃</a></li>
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
                    <li><a :href=data.href.news>點此看更多</a></li>
                    </ul>
                </div>
                <div class=a>{{language.營業部部長}}</div>
                <div class=b>
                    <div>
                        {{language.p1}}
                    </div>
                    <ul>
                        <li v-for="a of language.ul2">{{a}}</li>
                    </ul>
                    <div class=a>{{language.資格}}</div>
                    <ul>
                        <li v-for="a of language.ul3">{{a}}</li>
                    </ul>
                </div>
                <div class=c>{{language.p2}}</div>
                <div class=c>{{language.p3}}</div>
                <div class=c>{{language.p4}}</div>
            </div>
            <div class=vla>
                <div></div>
            </div>
            <div class=n>{{language.社長的話}}</div>
            <div class=o>
                <p>{{language.p5}}</p>
                <p>{{language.p6}}</p>
                <p>{{language.p7}}</p>
                <p>{{language.p8}}</p>
                <p>{{language.p9}}</p>
                <p>{{language.p10}}</p>
                <p>{{language.p11}}</p>
            </div>
        </div>
    `
}
export default summary
