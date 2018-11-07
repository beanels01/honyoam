import calcHomepageLikeResult from  './calcHomepageLikeResult'
import vue from                     '../static/_loan/vue'
async function main(rq,rs,lang){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '貸款試算',
        clientScript:       '_loan/main.mjs',
        css:                '_loan/main.css',
        vue,
        vueData:{
            data:{
                current:rq.url,
            },
        },
    })
}
export default main
