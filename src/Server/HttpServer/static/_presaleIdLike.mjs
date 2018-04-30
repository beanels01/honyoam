let presaleIdLike={
    header:{
        props:['data'],
        template:`
            <div class=presaleIdLikeHeader>
                <a
                    href=/zh-Hant/presaleId
                    :class="{active:data.focus=='top'}"
                >TOP</a>
                <a
                    href=/zh-Hant/presaleIdConcept
                    :class="{active:data.focus=='concept'}"
                >建築概念</a>
                <a
                    href=/zh-Hant/presaleIdEnvironment
                    :class="{active:data.focus=='environment'}"
                >周邊環境</a>
                <a
                    href=/zh-Hant/presaleIdTraffic
                    :class="{active:data.focus=='traffic'}"
                >交通方式</a>
                <a
                    href=/zh-Hant/presaleIdPattern
                    :class="{active:data.focus=='pattern'}"
                >空間格局</a>
                <a
                    href=/zh-Hant/presaleIdSummary
                    :class="{active:data.focus=='summary'}"
                >物件概要</a>
                <a
                    href=/zh-Hant/presaleIdAv
                    :class="{active:data.focus=='video'}"
                >影音介紹</a>
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
        props:['data'],
        template:`
            <div class=presaleIdLikeHypertext>
                <div class=a>
                    <div class=n>
                        <span class=a>建案相關介紹</span> / INFORMATION
                    </div>
                    <div class=o>
                        <span v-for="(e,i) in [,,,,,]">
                            <img :src="'/_presaleIdConcept/test-hypertext-'+i">
                        </span>
                    </div>
                </div>
                <div class=b>
                    <div v-html=data></div>
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
