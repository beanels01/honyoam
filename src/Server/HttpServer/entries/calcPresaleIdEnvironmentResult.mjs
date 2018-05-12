import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdEnvironment/vue'
async function main(rq,rs,lang,patch,id){
    let presaleId=(await this._getPresaleObject(id)).res
    // i for input
    presaleId=(i=>{
        let o={
            banner:                 i.banner.environment,
            gallery:                i.gallery,
        }
        i=i.language[lang]
        return Object.assign(o,{
            name:                   i.name,
            informationTitle:       i.informationTitle,
            informationContent:     i.informationContent,
            environmentContent:     i.environmentContent,
        })
    })(presaleId)
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `周邊環境 - ${presaleId.name}`,
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleIdEnvironment/main.css',
                            ],
        clientScript:       '_presaleIdEnvironment/main.mjs',
        vue,
        vueData:{
            presale:{
                id,
                presale:(await this._outPresale()).res,
                presaleId,
            },
        },
    })
}
export default main
