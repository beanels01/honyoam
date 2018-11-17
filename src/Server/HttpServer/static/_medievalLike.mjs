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
function mightLikeData(
    data,
    mightLike,
    e4JapaneseCurrency,
    currentLanguage
){
    let a={}
    for(let b of data)
        a[b.id]=b
    return mightLike.map(b=>{
        let c=a[b]
        return c&&{
            image:typeof c.image=='string'?
                '/image/'+c.image
            :
                c.image.url,
            title:c.name,
            subtitle:`${c.price} ${e4JapaneseCurrency}`,
            href:`${currentLanguage}/medieval/${c.id}`
        }
    }).filter(a=>a)
}
export default{
    top,
    mightLikeData,
}
