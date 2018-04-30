import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdVideo/vue'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '新成屋 - ID - 影音介紹',
        css:                [
                                '_presaleIdLike/main.css',
                                '_presaleIdVideo/main.css',
                            ],
        clientScript:       '_presaleIdVideo/main.mjs',
        vue,
        vueData:{
        },
    })
}
export default main
