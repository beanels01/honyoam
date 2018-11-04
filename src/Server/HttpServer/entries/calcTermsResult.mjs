import calcHomepageLikeResult from  './calcHomepageLikeResult'
import vue from                     '../static/_terms/vue'
async function main(rq,rs,lang){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '使用條款',
        clientScript:       '_terms/main.mjs',
        css:                '_terms/main.css',
        vue,
        vueData:{
            data:{
                current:rq.url,
            },
        },
    })
}
export default main
