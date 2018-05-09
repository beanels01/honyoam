import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdConcept/vue'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '新成屋 - ID - 建築概念',
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleIdConcept/main.css'
                            ],
        clientScript:       '_presaleIdConcept/main.mjs',
        vue,
        vueData:{
            presale:(await this._outPresale()).res,
        },
    })
}
export default main
