import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_about/vue'
async function main(rq,rs,lang){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '關於本葉',
        clientScript:       '_about/main.mjs',
        css:                '_about/main.css',
        vue,
        vueData:{
            data:{
                current:rq.url,
            },
        },
    })
}
export default main
