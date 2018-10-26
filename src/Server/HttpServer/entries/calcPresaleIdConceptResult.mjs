import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdConcept/vue'
async function main(rq,rs,lang,patch,id){
    let language=(await this._getLanguage()).res[lang]
    let presaleId=(await this._getPresaleObject(id)).res
    // i for input
    presaleId=(i=>{
        let o={
            banner:                 i.banner.concept,
            showSummary:            i.showSummary,
            showAlbum:              i.showAlbum,
        }
        i=i.language[lang]
        return Object.assign(o,{
            name:                   i.name,
            informationTitle:       i.informationTitle,
            informationContent:     i.informationContent,
            conceptContent:         i.conceptContent,
            showVideo:              i.showVideo,
            showTraffic:            i.showTraffic,
            showEnvironment:        i.showEnvironment,
            showConcept:            i.showConcept,
        })
    })(presaleId)
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `${language.presale.concept} - ${presaleId.name}`,
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleIdConcept/main.css'
                            ],
        clientScript:       '_presaleIdConcept/main.mjs',
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
