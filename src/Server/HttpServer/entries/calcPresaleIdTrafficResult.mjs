import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdTraffic/vue'
async function main(rq,rs,lang,patch,id){
    let presaleId=(await this._getPresaleObject(id)).res
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `交通方式 - ${presaleId.language[lang].name}`,
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleIdTraffic/main.css',
                            ],
        clientScript:       '_presaleIdTraffic/main.mjs',
        vue,
        vueData:{
            id,
            presale:(await this._outPresale()).res,
            presaleId,
        },
    })
}
export default main
