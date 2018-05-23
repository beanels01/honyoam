import homepageLike from './_homepageLike.mjs'
export default{
    top:{
        components:{homepageLikeTop:homepageLike.top},
        props:['data'],
        template:`
            <homepageLikeTop
                class=medievalLikeTop
                :data="{
                    mobile:             data.mobile,
                    desktop:            data.desktop,
                    title0:             '中古屋',
                    title1:             'PRE-OWNED HOUSE',
                }"
            ></homepageLikeTop>
        `
    },
}
