import{dom}from'../_simple.mjs'
function createSwiperContainer(a){
    return dom.div({className:'swiper-container'},
        dom.div({className:'swiper-wrapper'},
            a.map(n=>dom.div({className:'swiper-slide'},n))
        ),
    )
}
let mightLikeBlock={
    props:['data'],
    template:`
        <a class=mightLikeBlock :href=data.href>
            <div class=a>
                <img :src=data.image>
            </div>
            <div class=b>{{data.title}}</div>
            <div class=c>{{data.subtitle}}</div>
        </a>
    `,
}
let mightLikeSwiper={
    mounted(){
        if(typeof window=='undefined')
            return
        let n=createSwiperContainer(
            this.data.map(data=>
                (new Vue({
                    el:dom.div(),
                    components:{mightLikeBlock},
                    data:{
                        data,
                    },
                    template:`
                        <mightLikeBlock
                            :data=data
                        ></mightLikeBlock>
                    `,
                })).$el
            )
        )
        dom(this.$el,n)
        new Swiper(n,{
            centeredSlides:true,
            slidesPerView:5,
            spaceBetween:10,
            loop:true,
        })
    },
    props:['data'],
    template:`
        <div class=h></div>
    `,
}
let mightLike={
    components:{mightLikeSwiper},
    props:['data'],
    template:`
        <div class=mightLike>
            <div class=f>
                <div>
                    <span class=homepageLikeBlueBar></span>
                    <span class=homepageLikeTitle>您可能會喜歡</span>
                </div>
            </div>
            <mightLikeSwiper
                :data=data
            ></mightLikeSwiper>
        </div>
    `,
}
export default mightLike
