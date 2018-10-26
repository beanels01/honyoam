import homepageLike from './_homepageLike.mjs'
let top={
    components:{
        homepageLikeTop:homepageLike.top
    },
    props:['data'],
    template:`
        <homepageLikeTop
            class=medievalLikeTop
            :data="{
                mobile:             data.mobile,
                desktop:            data.desktop,
                title0:             data.language.medieval,
                title1:             'PRE-OWNED HOUSE',
            }"
        ></homepageLikeTop>
    `
}
export default{
    top,
}
