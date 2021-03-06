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
            data:{
                current:rq.url,
                presale:(await this._getPresale()).res,
                place:(await this._getPlace()).res,
                rate:(await this._getRate()).res,
                data:(await this._getPresaleList0(lang)).res,
            },
        },
    })
}
export default main
