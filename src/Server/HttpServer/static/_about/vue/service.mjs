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
                <div class=content><template
                    v-if="data.href0.type=='none'"
                ><img :src=data.image0></template><template
                    v-if="data.href0.type=='url'"
                ><a :href=data.href0.url><img :src=data.image0></a></template><template
                    v-if="data.href1.type=='none'"
                ><img :src=data.image1></template><template
                    v-if="data.href1.type=='url'"
                ><a :href=data.href1.url><img :src=data.image1></a></template><template
                    v-if="data.href2.type=='none'"
                ><img :src=data.image2></template><template
                    v-if="data.href2.type=='url'"
                ><a :href=data.href2.url><img :src=data.image2></a></template></div>
            </div>
        </div>
    `,
}
let service={
    components:{
        serviceContent,
        aBlock,
        aPartner,
    },
    props:['currentLanguage','language','data'],
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
                    href0:{type:'url',url:data.href.presale},
                    image1:'/_about/img2/350x350-2.png',
                    href1:{type:'url',url:data.href.medieval},
                    image2:'/_about/img2/350x350-3.png',
                    href2:{type:'url',url:data.href.qaForm},
                }"
            ></aBlock>
            <aBlock
                :data="{
                    color:'#a6c486',
                    bgColor:'#ffffff',
                    title:'租貸管理服務',
                    wrapTitle:'租貸管理\\n服務',
                    image0:'/_about/img2/350x350-4.png',
                    href0:{type:'none'},
                    image1:'/_about/img2/350x350-5.png',
                    href1:{type:'none'},
                    image2:'/_about/img2/350x350-6.png',
                    href2:{type:'none'},
                }"
            ></aBlock>
            <aBlock
                :data="{
                    color:'#e1af44',
                    bgColor:'#f5f3f4',
                    title:'居家服務',
                    wrapTitle:'居家服務',
                    image0:'/_about/img2/350x350-7.png',
                    href0:{type:'none'},
                    image1:'/_about/img2/350x350-8.png',
                    href1:{type:'none'},
                    image2:'/_about/img2/350x350-9.png',
                    href2:{type:'none'},
                }"
            ></aBlock>
            <aBlock
                :data="{
                    color:'#9b8bbc',
                    bgColor:'#ffffff',
                    title:'其他服務',
                    wrapTitle:'其他服務',
                    image0:'/_about/img2/350x350-10.png',
                    href0:{type:'url',url:data.href.qaForm},
                    image1:'/_about/img2/350x350-11.png',
                    href1:{type:'url',url:data.href.qaForm},
                    image2:'/_about/img2/350x350-12.png',
                    href2:{type:'none'},
                }"
            ></aBlock>
            <aPartner :language=language></aPartner>
        </div>
    `,
}
export default service
