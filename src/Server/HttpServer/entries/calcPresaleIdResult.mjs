import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleId/vue'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '新成屋 - ID',
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleId/main.css'
                            ],
        clientScript:       '_presaleId/main.mjs',
        vue,
        vueData:{
        },
    })
}
export default main
