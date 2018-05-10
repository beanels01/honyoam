import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleId/vue'
async function main(rq,rs,lang,patch,id){
    let presaleId=(await this._getPresaleObject(id)).res
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `${presaleId.language[lang].name}`,
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleId/main.css'
                            ],
        clientScript:       '_presaleId/main.mjs',
        vue,
        vueData:{
            id,
            presale:(await this._outPresale()).res,
            presaleId,
        },
    })
}
export default main
