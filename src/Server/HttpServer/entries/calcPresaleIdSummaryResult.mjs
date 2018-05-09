import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdSummary/vue'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '新成屋 - ID - 物件概要',
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleIdSummary/main.css',
                            ],
        clientScript:       '_presaleIdSummary/main.mjs',
        vue,
        vueData:{
            presale:(await this._outPresale()).res,
        },
    })
}
export default main
