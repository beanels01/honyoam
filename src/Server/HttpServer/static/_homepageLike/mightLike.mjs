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
        <div class=mightLikeBlock>
            <div class=a>
                <img :src=data.image>
            </div>
            <div class=b>{{data.title}}</div>
            <div class=c>{{data.subtitle}}</div>
        </div>
    `,
}
let mightLikeList={
    components:{mightLikeBlock},
    props:['data'],
    template:`
        <div class=g>
            <mightLikeBlock
                v-for="e in data"
                :data=e
            ></mightLikeBlock>
        </div>
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
        })
    },
    props:['data'],
    template:`
        <div class=h></div>
    `,
}
let mightLike={
    components:{mightLikeList,mightLikeSwiper},
    props:['data'],
    template:`
        <div class=mightLike>
            <div class=f>
                <div>
                    <span class=homepageLikeBlueBar></span>
                    <span class=homepageLikeTitle>您可能會喜歡</span>
                </div>
            </div>
            <mightLikeList
                :data=data
            ></mightLikeList>
            <mightLikeSwiper
                :data=data
            ></mightLikeSwiper>
        </div>
    `,
}
export default mightLike
