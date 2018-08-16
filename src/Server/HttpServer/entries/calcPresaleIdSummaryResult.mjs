import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdSummary/vue'
async function main(rq,rs,lang,patch,id){
    let presaleId=(await this._getPresaleObject(id)).res
    // i for input
    presaleId=(i=>{
        let o={
            banner:                 i.banner.summary,
            summary:                i.summary,
            showSummary:            i.showSummary,
            showAlbum:              i.showAlbum,
        }
        i=i.language[lang]
        return Object.assign(o,{
            name:                   i.name,
            showVideo:              i.showVideo,
            showTraffic:            i.showTraffic,
            showEnvironment:        i.showEnvironment,
            showConcept:            i.showConcept,
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
                presale:(await this._getPresale()).res,
                presaleId,
            },
            data:{
                current:rq.url,
            },
        },
    })
}
export default main
