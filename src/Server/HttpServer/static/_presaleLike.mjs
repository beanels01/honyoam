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
                    title0:             '新成屋',
                    title1:             'PRESOLD HOUSE',
                }"
            ></homepageLikeTop>
        `
    },
}
