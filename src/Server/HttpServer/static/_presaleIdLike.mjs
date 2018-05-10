import{dom}from'./_simple.mjs'
let href=(currentLanguage,id)=>({
    top:`/${currentLanguage}/presale/${id}`,
    concept:`/${currentLanguage}/presale/${id}/concept`,
    environment:`/${currentLanguage}/presale/${id}/environment`,
    traffic:`/${currentLanguage}/presale/${id}/traffic`,
    pattern:`/${currentLanguage}/presale/${id}/pattern`,
    summary:`/${currentLanguage}/presale/${id}/summary`,
    video:`/${currentLanguage}/presale/${id}/video`,
})
let header={
    props:['data','href'],
    template:`
        <div class=presaleIdLikeHeader>
            <a
                :href=href.top
                :class="{active:data.focus=='top'}"
            >TOP</a>
            <a
                :href=href.concept
                :class="{active:data.focus=='concept'}"
            >建築概念</a>
            <a
                :href=href.environment
                :class="{active:data.focus=='environment'}"
            >周邊環境</a>
            <a
                :href=href.traffic
                :class="{active:data.focus=='traffic'}"
            >交通方式</a>
            <a
                :href=href.pattern
                :class="{active:data.focus=='pattern'}"
            >空間格局</a>
            <a
                :href=href.summary
                :class="{active:data.focus=='summary'}"
            >物件概要</a>
            <a
                :href=href.video
                :class="{active:data.focus=='video'}"
            >影音介紹</a>
        </div>
    `,
}
let top={
    computed:{
        title(){
            return this.data.title+
                (this.data.part?` > ${this.data.part}`:'')
        },
    },
    props:[
        'data',
        'href',
    ],
    methods:{
        change(e){
            location=this.href[e.target.value]
        },
    },
    template:`
        <div class=presaleIdLikeTop>
            <div class=a>
                <select
                    :value=data.focus
                    @change=change
                >
                    <option value=top>TOP</option>
                    <option value=concept>建築概念</option>
                    <option value=environment>周邊環境</option>
                    <option value=traffic>交通方式</option>
                    <option value=pattern>空間格局</option>
                    <option value=summary>物件概要</option>
                    <option value=video>影音介紹</option>
                </select>
            </div>
            <div class=b>
                <div>
                    <div>{{title}}</div>
                </div>
            </div>
        </div>
    `,
}
let main={
    props:['data'],
    template:`
        <div class=presaleIdLikeMain>
            <div class=b>
                <span class=a>{{data.part[0]}}</span> /
                {{data.part[1]}}
            </div>
            <div class=c>
                <div class=a>
                    <div class=title>{{data.title}}</div>
                    <div class=content>{{data.content}}</div>
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
}
let hypertextPhoto={
    props:['data'],
    template:`
        <span class=presaleIdLikeHypertextPhoto>
            <img :src=data>
        </span>
    `,
}
let hypertextPhotoSwiper={
    mounted(){
        function createSwiperContainer(a){
            return dom.div({className:'swiper-container'},
                dom.div({className:'swiper-wrapper'},
                    a.map(n=>dom.div({className:'swiper-slide'},n))
                ),
            )
        }
        if(typeof window=='undefined')
            return
        let n=createSwiperContainer(
            this.data.map(data=>
                (new Vue({
                    el:dom.div(),
                    components:{hypertextPhoto},
                    data:{
                        data,
                    },
                    template:`
                        <hypertextPhoto
                            :data=data
                        ></hypertextPhoto>
                    `,
                })).$el
            )
        )
        dom(this.$el,n)
        new Swiper(n,{
            centeredSlides:true,
            slidesPerView:5,
            spaceBetween:10,
        })
    },
    props:['data'],
    template:`
        <div class=p></div>
    `,
}
let hypertext={
    components:{hypertextPhoto,hypertextPhotoSwiper},
    computed:{
        gallery(){
            return this.data.gallery.map(a=>`/image/${a}`)
        },
    },
    props:['data'],
    template:`
        <div class=presaleIdLikeHypertext>
            <div class=a>
                <div class=n>
                    <span class=a>建案相關介紹</span> / INFORMATION
                </div>
                <div class=o>
                    <hypertextPhoto
                        v-for="e in gallery"
                        :data=e
                    ></hypertextPhoto>
                </div>
                <hypertextPhotoSwiper
                    :data=gallery
                ></hypertextPhotoSwiper>
            </div>
            <div class=b>
                <div v-html=data.hypertext></div>
            </div>
        </div>
    `,
}
let footer={
    props:['data'],
    template:`
        <div class=presaleIdLikeFooter>
            <div>注意事項：
                {{data}}</div>
        </div>
    `
}
export default{
    header,
    top,
    main,
    hypertext,
    footer,
    href,
}
