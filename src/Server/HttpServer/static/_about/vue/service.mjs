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
                        <template
                            v-if="data.href0.type=='none'"
                        ><img :src=data.image0></template><template
                            v-if="data.href0.type=='url'"
                        ><a :href=data.href0.url><img :src=data.image0></a></template>
                    </div>
                </div>
                <div class="row">
                    <div class="cell image">
                        <template
                            v-if="data.href1.type=='none'"
                        ><img :src=data.image1></template><template
                            v-if="data.href1.type=='url'"
                        ><a :href=data.href1.url><img :src=data.image1></a></template>
                    </div>
                    <div class="cell image">
                        <template
                            v-if="data.href2.type=='none'"
                        ><img :src=data.image2></template><template
                            v-if="data.href2.type=='url'"
                        ><a :href=data.href2.url><img :src=data.image2></a></template>
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
    computed:{
        image(){
            return[...Array(12)].map((e,i)=>
                `/_about/img2/${this.currentLanguage}/350x350-${1+i}.png`
            )
        },
    },
    components:{
        serviceContent,
        aBlock,
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
                    title:language.a[0].title,
                    wrapTitle:language.a[0].wrapTitle,
                    image0:image[0],
                    href0:{type:'url',url:data.href.presale},
                    image1:image[1],
                    href1:{type:'url',url:data.href.medieval},
                    image2:image[2],
                    href2:{type:'url',url:data.href.qaForm},
                }"
            ></aBlock>
            <aBlock
                :data="{
                    color:'#a6c486',
                    bgColor:'#ffffff',
                    title:language.a[1].title,
                    wrapTitle:language.a[1].wrapTitle,
                    image0:image[3],
                    href0:{type:'url',url:data.href.rent},
                    image1:image[4],
                    href1:{type:'url',url:data.href.rent},
                    image2:image[5],
                    href2:{type:'url',url:data.href.rent},
                }"
            ></aBlock>
            <aBlock
                :data="{
                    color:'#e1af44',
                    bgColor:'#f5f3f4',
                    title:language.a[2].title,
                    wrapTitle:language.a[2].wrapTitle,
                    image0:image[6],
                    href0:{type:'url',url:data.href.escrow},
                    image1:image[7],
                    href1:{type:'url',url:data.href.escrow},
                    image2:image[8],
                    href2:{type:'url',url:data.href.escrow},
                }"
            ></aBlock>
            <aBlock
                :data="{
                    color:'#9b8bbc',
                    bgColor:'#ffffff',
                    title:language.a[3].title,
                    wrapTitle:language.a[3].wrapTitle,
                    image0:image[9],
                    href0:{type:'url',url:data.href.qaForm},
                    image1:image[10],
                    href1:{type:'url',url:data.href.qaForm},
                    image2:image[11],
                    href2:{type:'url',url:data.href.partner},
                }"
            ></aBlock>
        </div>
    `,
}
export default service
