import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_medieval/vue'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '中古屋',
        css:                [
                                '_medieval/main.css',
                                '_medievalLike/main.css',
                            ],
        clientScript:       '_medieval/main.mjs',
        vue,
        vueData:{
        },
    })
}
export default main
