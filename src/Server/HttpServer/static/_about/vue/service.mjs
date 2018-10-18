/*let block={
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
}*/
let aA={
    props:['language'],
    template:`
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
    `,
}
let aPartner={
    props:['language'],
    template:`
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
    `
}
let serviceContent={
    props:['data'],
    template:`
        <div class=serviceContent>
            <img class=mobile :src=data.mobile>
            <img class=desktop :src=data.desktop>
        </div>
    `,
}
let aBlock={
    props:['data'],
    template:`
        <div
            class=aBlock
            :style="{backgroundColor:data.bgColor}"
        >
            <div class=mobile>
                <div class="row">
                    <div class="cell title"><div class=vbar
                        :style="{backgroundColor:data.color}"
                    ></div> {{data.wrapTitle}}</div>
                    <div class="cell image">
                        <img :src=data.image0>
                    </div>
                </div>
                <div class="row">
                    <div class="cell image">
                        <img :src=data.image1>
                    </div>
                    <div class="cell image">
                        <img :src=data.image2>
                    </div>
                </div>
            </div>
            <div class=desktop>
                <div class=title>
                    <div class=vbar
                        :style="{backgroundColor:data.color}"
                    ></div>
                    <div class=text>{{data.title}}</div>
                </div>
                <div class=content><img :src=data.image0><img :src=data.image1><img :src=data.image2></div>
            </div>
        </div>
    `,
}
let service={
    components:{
        serviceContent,
        aBlock,
        aA,
        aPartner,
    },
    props:['currentLanguage','language'],
    template:`
        <div class=service>
            <serviceContent
                :data="{
                    mobile:'/_about/img2/serviceContentMobile.png',
                    desktop:{
                        'jp':'/_about/img2/serviceContentDesktopJp.jpg',
                        'zh-Hans':'/_about/img2/serviceContentDesktopZhHans.jpg',
                        'zh-Hant':'/_about/img2/serviceContentDesktopZhHant.jpg',
                    }[currentLanguage]
                }"
            ></serviceContent>
            <aBlock
                :data="{
                    color:'#a1c6d2',
                    bgColor:'#f5f3f4',
                    title:'不動產仲介買賣服務',
                    wrapTitle:'不動產仲介\\n買賣服務',
                    image0:'/_about/img2/350x350-1.png',
                    image1:'/_about/img2/350x350-2.png',
                    image2:'/_about/img2/350x350-3.png',
                }"
            ></aBlock>
            <aBlock
                :data="{
                    color:'#a6c486',
                    bgColor:'#ffffff',
                    title:'租貸管理服務',
                    wrapTitle:'租貸管理\\n服務',
                    image0:'/_about/img2/350x350-4.png',
                    image1:'/_about/img2/350x350-5.png',
                    image2:'/_about/img2/350x350-6.png',
                }"
            ></aBlock>
            <aBlock
                :data="{
                    color:'#e1af44',
                    bgColor:'#f5f3f4',
                    title:'居家服務',
                    wrapTitle:'居家服務',
                    image0:'/_about/img2/350x350-7.png',
                    image1:'/_about/img2/350x350-8.png',
                    image2:'/_about/img2/350x350-9.png',
                }"
            ></aBlock>
            <aBlock
                :data="{
                    color:'#9b8bbc',
                    bgColor:'#ffffff',
                    title:'其他服務',
                    wrapTitle:'其他服務',
                    image0:'/_about/img2/350x350-10.png',
                    image1:'/_about/img2/350x350-11.png',
                    image2:'/_about/img2/350x350-12.png',
                }"
            ></aBlock>
            <aA :language=language></aA>
            <aPartner :language=language></aPartner>
        </div>
    `,
}
export default service
