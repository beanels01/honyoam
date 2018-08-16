import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleId/vue'
async function main(rq,rs,lang,patch,id){
    let presaleId=(await this._getPresaleObject(id)).res
    // i for input
    presaleId=(i=>{
        let o={
            banner:i.banner.top,
            top:i.top,
            gallery:                i.gallery,
            showSummary:            i.showSummary,
            showAlbum:              i.showAlbum,
        }
        i=i.language[lang]
        return Object.assign(o,{
            name:                   i.name,
            informationTitle:       i.informationTitle,
            informationContent:     i.informationContent,
            conceptSummary:         i.conceptSummary,
            environmentSummary:     i.environmentSummary,
            trafficSummary:         i.trafficSummary,
            showVideo:              i.showVideo,
            showTraffic:            i.showTraffic,
            showEnvironment:        i.showEnvironment,
            showConcept:            i.showConcept,
        })
    })(presaleId)
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `${presaleId.name}`,
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleId/main.css'
                            ],
        clientScript:       '_presaleId/main.mjs',
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
