import calcHomepageLikeResult from  './calcHomepageLikeResult'
import vue from                     '../static/_escrow/vue'
async function main(rq,rs,lang){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '好管家代管服務',
        clientScript:       '_escrow/main.mjs',
        css:                '_escrow/main.css',
        vue,
        vueData:{
            data:{
                current:rq.url,
            },
        },
    })
}
export default main
