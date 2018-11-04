import calcHomepageLikeResult from  './calcHomepageLikeResult'
import vue from                     '../static/_rent/vue'
async function main(rq,rs,lang){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '租賃管理服務',
        clientScript:       '_rent/main.mjs',
        css:                '_rent/main.css',
        vue,
        vueData:{
            data:{
                current:rq.url,
            },
        },
    })
}
export default main
