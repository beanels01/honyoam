let block={
    props:['data'],
    template:`
        <div class=d>
            <div class=n>
                <div class=a>
                    <div class=n>
                        {{data.number}}
                    </div>
                    <div class=o>
                        {{data.title}}
                    </div>
                </div>
                <div class=b>
                    {{data.content0}}
                </div>
                <div class=c>
                    {{data.content1}}
                </div>
            </div>
            <div class=o>
            </div>
            <div class=p>
                <img :src=data.image>
            </div>
        </div>
    `,
}
let service={
    components:{
        aBlock:block,
    },
    props:['language'],
    template:`
        <div class=service>
            <div class=a>
                <div class=a>營業項目</div>
                <ol>
                <li>不動產仲介買賣服務</li>
                    <ul>
                    <li>預售屋(新成屋)代理銷售</li>
                    <li>中古物件仲介買賣</li>
                    <li>商用不動產仲介買賣</li>
                    </ul>
                </li>
                <li>租賃管理服務
                    <ul>
                    <li>招租募集</li>
                    <li>契約更新</li>
                    <li>契約解除</li>
                    <li>製作租金收支報告書</li>
                    <li>與管委會及承租方日常應對</li>
                    </ul>
                </li>
                <li>居家服務:協助您融入當地的生活,解答日本生活上的疑難等等
                    <ul>
                    <li>自用及空屋的代管服務</li>
                    <li>交通、清潔、家事代行安排</li>
                    <li>家具選購陪同、廠商介紹</li>
                    </ul>
                </li>
                <li>其他服務
                    <ul>
                    <li>協助設立日本在地公司 ( 合作 律師 , 稅理士及 行政書 士介紹)</li>
                    <li>不動產投資顧問服務 ( 結合稅務及法務行政提供投資架構建議) </li>
                    <li>貸款銀行介紹及手續上的協助</li>
                    </ul>
                </li>
                </ol>
            </div>
            <div class=partner>
                <div class=a>{{language.partner[0]}}</div>
                <div class=b>
                    <div>
                        <div class=a><img src=/_about/img/d0.png></div>
                        <div class=b></div>
                        <div class=a><img src=/_about/img/d1.jpg></div>
                    </div>
                </div>
                <div class=c>{{language.partner[1]}}</div>
                <div class=d>
                    <div class=a>
                        <div class=a><img src=/_about/img/e0.png></div>
                        <div class=b></div>
                        <div class=a><img src=/_about/img/e1.png></div>
                        <div class=b></div>
                        <div class=a><img src=/_about/img/e2.png></div>
                        <div class=b></div>
                        <div class=a><img src=/_about/img/e3.png></div>
                    </div>
                    <div class=b>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class=a>
                        <div class=a><img src=/_about/img/e4.png></div>
                        <div class=b></div>
                        <div class=a><img src=/_about/img/e5.png></div>
                        <div class=b></div>
                        <div class=a><img src=/_about/img/e6.png></div>
                    </div>
                </div>
                <div class=c>{{language.partner[2]}}</div>
                <div class=d>
                    <div class=a>
                        <div class=a><img src=/_about/img/f0.jpg></div>
                        <div class=b></div>
                        <div class=a><img src=/_about/img/f1.png></div>
                        <div class=b></div>
                        <div class=a><img src=/_about/img/f2.jpeg></div>
                        <div class=b></div>
                        <div class=a><img src=/_about/img/f3.png></div>
                    </div>
                    <div class=b>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class=a>
                        <div class=a><img src=/_about/img/f4.jpg></div>
                        <div class=b></div>
                        <div class=a><img src=/_about/img/f5.png></div>
                        <div class=b></div>
                        <div class=a><img src=/_about/img/f6.png></div>
                    </div>
                </div>
            </div>
        </div>
    `,
}
export default service
