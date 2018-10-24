import{dom}from'../_simple.mjs'
import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
let hypertextPhoto={
    props:['data'],
    template:`
        <span class=presaleIdLikeHypertextPhoto>
            <img :src=data>
        </span>
    `,
}
let photoSwiper={
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
        this.swiper=new Swiper(n,{
            centeredSlides:true,
            slidesPerView:5,
            spaceBetween:10,
            loop:true,
        })
    },
    data:()=>({
        swiper:0,
    }),
    props:['data','value'],
    template:`
        <div class=p></div>
    `,
    watch:{
        value(n,p){
            if(this.value){
                this.swiper[this.value==-1?'slidePrev':'slideNext']()
                this.$emit('input',0)
            }
        }
    },
}
let hypertextPhotoSwiper={
    components:{photoSwiper},
    data:()=>({
        focus:0,
    }),
    props:['data'],
    methods:{
        goLeft(){
            this.focus=-1
        },
        goRight(){
            this.focus=1
        },
    },
    template:`
        <div class=a>
            <photoSwiper
                :data=data
                v-model=focus
            ></photoSwiper>
            <div class="arrow left" @click=goLeft>
                <i class=material-icons>chevron_left</i>
            </div>
            <div class="arrow right" @click=goRight>
                <i class=material-icons>chevron_right</i>
            </div>
        </div>
    `,
}
let block={
    computed:{
        style(){
            return{
                backgroundImage:`url(${JSON.stringify(this.background)})`
            }
        },
    },
    methods:{
        click(){
            location=this.more
        },
    },
    props:['background','title','content','more','data',],
    template:`
        <div class=a :style=style><div>
            <div>
                <div class=a>{{title}}</div>
                <div class=b>{{content}}</div>
                <button class=c @click=click>+ {{data.language.knowMore}}</button>
            </div>
        </div></div>
    `,
}
let aMain={
    components:{
        hlFooter:               homepageLike.footer,
        hlMenu:                 homepageLike.menu,
        hlHeader:               homepageLike.header,
        floatBall:              homepageLike.floatBall,
        presaleLikeTop:         presaleLike.top,
        presaleIdLikeTop:       presaleIdLike.top,
        presaleIdLikeMain:      presaleIdLike.main,
        presaleIdLikeFooter:    presaleIdLike.footer,
        presaleIdLikeHeader:    presaleIdLike.header,
        hypertextPhotoSwiper,
        block,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
        presaleIdHref(){
            return presaleIdLike.href(
                this.currentLanguage,
                this.presale.id,
            )
        },
        gallery(){
            return this.presale.presaleId.gallery.map(a=>`/image/${a}`)
        },
    },
    data:()=>({
        menu:0,
    }),
    methods:{
        imagePath(id){
            return`/image/${id}`
        },
    },
    props:[
        'data',
        'language',
        'currentLanguage',
        'presale',
        'mainSeminar',
    ],
    template:`
        <div id=main>
            <hlHeader
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                v-model=menu
                :mainSeminar=mainSeminar
            ></hlHeader>
            <template v-if=!menu>
                <presaleLikeTop
                    :data="{
                        mobile:1,
                        language:language.presale,
                    }"
                ></presaleLikeTop>
                <presaleIdLikeTop
                    :data="{
                        focus:'top',
                        title:presale.presaleId.name,
                        background:presale.presaleId.banner,
                        show:presale.presaleId,
                        language:language.presale,
                    }"
                    :href=presaleIdHref
                ></presaleIdLikeTop>
                <presaleIdLikeMain
                    :data="{
                        part:[language.presale.information,'INFORMATION'],
                        title:presale.presaleId.informationTitle,
                        content:presale.presaleId.informationContent,
                        href:href.qaForm,
                    }"
                ></presaleIdLikeMain>
                <block
                    v-if=presale.presaleId.showConcept
                    :title=language.presale.concept
                    :background=imagePath(presale.presaleId.top.concept)
                    :content=presale.presaleId.conceptSummary
                    :more=presaleIdHref.concept
                    :data="{
                        language:language.presale,
                    }"
                ></block>
                <block
                    v-if=presale.presaleId.showEnvironment
                    :title=language.presale.environment
                    :background=imagePath(presale.presaleId.top.environment)
                    :content=presale.presaleId.environmentSummary
                    :more=presaleIdHref.environment
                    :data="{
                        language:language.presale,
                    }"
                ></block>
                <block
                    v-if=presale.presaleId.showTraffic
                    :title=language.presale.traffic
                    :background=imagePath(presale.presaleId.top.traffic)
                    :content=presale.presaleId.trafficSummary
                    :more=presaleIdHref.traffic
                    :data="{
                        language:language.presale,
                    }"
                ></block>
                <div
                    v-if=presale.presaleId.showAlbum
                    class=album
                >
                    <div class=n>
                        <span class=a>{{language.presale.album}}</span> / ALBUM
                    </div>
                    <hypertextPhotoSwiper
                        :data=gallery
                    ></hypertextPhotoSwiper>
                </div>
                <presaleIdLikeFooter
                    :data="{
                        language:language.presale,
                        content:presale.presale.language[currentLanguage].precautions,
                    }"
                ></presaleIdLikeFooter>
                <hlFooter
                    :language=language.homepageLike.footer
                    :currentLanguage=currentLanguage
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
                <presaleIdLikeHeader
                    :data="{
                        focus:'top',
                        show:presale.presaleId,
                        language:language.presale,
                    }"
                    :href=presaleIdHref
                ></presaleIdLikeHeader>
            </template>
            <hlMenu
                v-if=menu
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
            ></hlMenu>
        </div>
    `,
}
export default{
    components:{aMain},
    template:`
        <aMain
            :data=data
            :language=language
            :currentLanguage=currentLanguage
            :presale=presale
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
