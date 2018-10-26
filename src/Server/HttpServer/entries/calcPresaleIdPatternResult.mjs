import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdPattern/vue'
async function main(rq,rs,lang,patch,id){
    let presaleId=(await this._getPresaleObject(id)).res
    let language=(await this._getLanguage()).res[lang]
    // i for input
    presaleId=(i=>{
        let o={
            banner:                 i.banner.pattern,
            pattern:                i.pattern,
            showSummary:            i.showSummary,
            showAlbum:              i.showAlbum,
        }
        i=i.language[lang]
        return Object.assign(o,{
            name:                   i.name,
            informationTitle:       i.informationTitle,
            informationContent:     i.informationContent,
            showVideo:              i.showVideo,
            showTraffic:            i.showTraffic,
            showEnvironment:        i.showEnvironment,
            showConcept:            i.showConcept,
        })
    })(presaleId)
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `${language.presale.pattern} - ${presaleId.name}`,
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleIdPattern/main.css'
                            ],
        clientScript:       '_presaleIdPattern/main.mjs',
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
