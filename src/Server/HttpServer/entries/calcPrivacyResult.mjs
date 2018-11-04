import calcHomepageLikeResult from  './calcHomepageLikeResult'
import vue from                     '../static/_privacy/vue'
async function main(rq,rs,lang){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '隱私政策',
        clientScript:       '_privacy/main.mjs',
        css:                '_privacy/main.css',
        vue,
        vueData:{
            data:{
                current:rq.url,
            },
        },
    })
}
export default main
