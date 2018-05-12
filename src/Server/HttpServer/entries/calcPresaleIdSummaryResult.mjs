import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdSummary/vue'
async function main(rq,rs,lang,patch,id){
    let presaleId=(await this._getPresaleObject(id)).res
    // i for input
    presaleId=(i=>{
        let o={
            banner:                 i.banner.summary,
            summary:                i.summary,
        }
        i=i.language[lang]
        return Object.assign(o,{
            name:                   i.name,
        })
    })(presaleId)
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `物件概要 - ${presaleId.name}`,
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleIdSummary/main.css',
                            ],
        clientScript:       '_presaleIdSummary/main.mjs',
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
