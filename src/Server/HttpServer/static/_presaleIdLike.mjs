let presaleIdLike={
    header:{
        template:`
            <div class=presaleIdLikeHeader>
                <a href=/zh-Hant/presaleId>TOP</a>
                <a href=/zh-Hant/presaleIdConcept>建築概念</a>
                <a href=/zh-Hant/presaleIdEnvironment>周邊環境</a>
                <a href=/zh-Hant/presaleIdTraffic>交通方式</a>
                <a href=/zh-Hant/presaleIdPattern>空間格局</a>
                <a href=/zh-Hant/presaleIdSummary>物件概要</a>
                <a href=/zh-Hant/presaleIdAv>影音介紹</a>
            </div>
        `,
    },
    top:{
        computed:{
            title(){
                return this.data.title+
                    (this.data.part?` > ${this.data.part}`:'')
            },
        },
        props:['data'],
        template:`
            <div class=presaleIdLikeTop>
                <div>
                    <div>{{title}}</div>
                </div>
            </div>
        `,
    },
    main:{
        props:['data'],
        template:`
            <div class=presaleIdLikeMain>
                <div class=b>
                    <span class=a>{{data.part[0]}}</span> /
                    {{data.part[1]}}
                </div>
                <div class=c>
                    <div class=a>
                        <div class=title>
                            {{data.title}}
                        </div>
                        <div class=content>
                            {{data.content}}
                        </div>
                    </div>
                    <div class=b>
                        <div class=n>
                            <a><span>> 預約看房</span></a>
                        </div>
                        <div class=o>
                            <a><span>> 更多訊息</span></a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    hypertext:{
        template:`
            <div class=presaleIdLikeHypertext>
                <div class=a>
                    <div class=n>
                        <span class=a>建案相關介紹</span> / INFORMATION
                    </div>
                    <div class=o>
                        <span v-for="e in [,,,,,]">
                            <img src=/_presale/test>
                        </span>
                    </div>
                </div>
                <div class=b>
                    <div>
                        <img src=/_presaleIdLike/test-hypertext-0>
                        新宿2KM商業圈內，位於山手線內側的都心<br>
                        這個物件的特點在，位於「JR山手線」內側的位置<br>
                        伊勢丹與高島屋的左近，感受最佳的生活便利性<br>
                        受鄰近文教地區的薰陶，周圍也是綠地滿溢<br>
                        感受都市躍動的同時，也有住宅區安穩的氛圍
                        <img src=/_presaleIdLike/test-hypertext-1>
                        運動、文化設施健全，充實每一天的生活<br>
                        徒步1分鐘「新宿區立新宿交流活動中心」<br>
                        設有標準制/兒童用泳池、籃球場、桌球桌等運動場地<br>
                        天花板上的天象儀更是一大特色，且距離圖書館只要徒步3分鐘<br>
                        無論大人小孩都能在這裡享受自己的假日<br>
                        (愛子公主上的學校就在對面
                        <img src=/_presaleIdLike/test-hypertext-2>
                        <img src=/_presaleIdLike/test-hypertext-3>
                        <img src=/_presaleIdLike/test-hypertext-4>
                    </div>
                </div>
            </div>
        `,
    },
    footer:{
        template:`
            <div class=presaleIdLikeFooter>
                <div>
                    注意事項：<br>
                    ◎ 注意事項一：再者，正如紀德說得好，一種偽裝的情感，一種真摯的情感，兩者是很難區別的。決定愛自己母親而同她待在一起，和演一齣喜劇其結果是同母親待在一起，這兩者差不多是一樣的。<br>
                    ◎ 注意事項二：為了使你更加理解「聽任」這個說法的意思，讓我舉我的一個學生為例。他是在下述的情況下來找我的。他的父親正和他的母親吵架，而且打算當「法奸」；他的哥哥在 1940 年德軍大舉進攻時陣亡，這個年輕人懷著一種相當天真但是崇高的感情，發誓要替哥哥報仇。<br>
                    ◎ 注意事項三：因為沒有一個上帝或者什麼先天的規劃能使世界和它所有的可能性去適應我的意志。<br>
                    ◎ 注意事項四：當笛卡兒說「征服你自己，而不要征服世界」，他基本上也是這個意思——即我們應當不懷著希望行動。<br>
                </div> 
            </div>
        `
    },
}
export default presaleIdLike
