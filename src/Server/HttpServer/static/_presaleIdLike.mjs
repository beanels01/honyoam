import{dom}from'./_simple.mjs'
let header={
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
}
let top={
    computed:{
        title(){
            return this.data.title+
                (this.data.part?` > ${this.data.part}`:'')
        },
    },
    props:['data'],
    methods:{
        change(e){
            location={
                top:'/zh-Hant/presaleId',
                concept:'/zh-Hant/presaleIdConcept',
                environment:'/zh-Hant/presaleIdEnvironment',
                traffic:'/zh-Hant/presaleIdTraffic',
                pattern:'/zh-Hant/presaleIdPattern',
                summary:'/zh-Hant/presaleIdSummary',
                video:'/zh-Hant/presaleIdAv',
            }[e.target.value]
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
            <img :src=data.src>
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
    data:(()=>({
        photos:[...Array(2)].map((e,i)=>({
            src:'/_presaleIdConcept/test-hypertext-'+i
        }))
    })),
    props:['data'],
    template:`
        <div class=presaleIdLikeHypertext>
            <div class=a>
                <div class=n>
                    <span class=a>建案相關介紹</span> / INFORMATION
                </div>
                <div class=o>
                    <hypertextPhoto
                        v-for="e in photos"
                        :data=e
                    ></hypertextPhoto>
                </div>
                <hypertextPhotoSwiper
                    :data=photos
                ><hypertextPhotoSwiper>
            </div>
            <div class=b>
                <div v-html=data></div>
            </div>
        </div>
    `,
}
let footer={
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
}
export default{
    header,
    top,
    main,
    hypertext,
    footer,
}
