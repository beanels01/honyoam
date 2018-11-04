import calcHomepageLikeResult from  './calcHomepageLikeResult'
import vue from                     '../static/_partner/vue'
async function main(rq,rs,lang){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '我們的簽約合作夥伴',
        clientScript:       '_partner/main.mjs',
        css:                '_partner/main.css',
        vue,
        vueData:{
            data:{
                current:rq.url,
            },
        },
    })
}
export default main
