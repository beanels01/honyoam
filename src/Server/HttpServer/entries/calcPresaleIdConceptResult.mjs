import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdConcept/vue'
async function main(rq,rs,lang,patch,id){
    let presaleId=(await this._getPresaleObject(id)).res
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `建築概念 - ${presaleId.language[lang].name}`,
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleIdConcept/main.css'
                            ],
        clientScript:       '_presaleIdConcept/main.mjs',
        vue,
        vueData:{
            id,
            presale:(await this._outPresale()).res,
            presaleId,
        },
    })
}
export default main
