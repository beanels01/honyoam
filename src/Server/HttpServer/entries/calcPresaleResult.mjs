import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presale/vue'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '新成屋',
        css:                [
                                '_presaleLike/main.css',
                                '_presale/main.css',
                            ],
        clientScript:       '_presale/main.mjs',
        vue,
        vueData:{
        },
    })
}
export default main
