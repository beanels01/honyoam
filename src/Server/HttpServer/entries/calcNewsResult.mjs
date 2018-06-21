import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_news/vue'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '最新消息',
        css:                '_news/main.css',
        clientScript:       '_news/main.mjs',
        vue,
        vueData:{
            data:{
                current:rq.url,
            },
        },
    })
}
export default main
