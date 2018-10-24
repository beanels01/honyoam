import homepageLike from './_homepageLike.mjs'
export default{
    top:{
        components:{homepageLikeTop:homepageLike.top},
        props:['data'],
        template:`
            <homepageLikeTop
                class=presaleLikeTop
                :data="{
                    mobile:             data.mobile,
                    desktop:            data.desktop,
                    title0:             data.language.title,
                    title1:             'PRESOLD HOUSE',
                }"
            ></homepageLikeTop>
        `
    },
}
