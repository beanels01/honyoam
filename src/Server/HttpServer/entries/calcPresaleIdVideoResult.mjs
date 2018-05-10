import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdVideo/vue'
async function main(rq,rs,lang,patch,id){
    let presaleId=(await this._getPresaleObject(id)).res
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `影音介紹 - ${presaleId.language[lang].name}`,
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleIdVideo/main.css',
                            ],
        clientScript:       '_presaleIdVideo/main.mjs',
        vue,
        vueData:{
            id,
            presale:(await this._outPresale()).res,
            presaleId,
        },
    })
}
export default main
