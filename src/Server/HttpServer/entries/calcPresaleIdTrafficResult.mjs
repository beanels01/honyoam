import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdTraffic/vue'
async function main(rq,rs,lang,patch,id){
    let presaleId=(await this._getPresaleObject(id)).res
    // i for input
    presaleId=(i=>{
        let o={
            gallery:                i.gallery,
        }
        i=i.language[lang]
        return Object.assign(o,{
            name:                   i.name,
            informationTitle:       i.informationTitle,
            informationContent:     i.informationContent,
            trafficContent:         i.trafficContent,
        })
    })(presaleId)
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `交通方式 - ${presaleId.name}`,
        css:                [
                                '_presaleLike/main.css',
                                '_presaleIdLike/main.css',
                                '_presaleIdTraffic/main.css',
                            ],
        clientScript:       '_presaleIdTraffic/main.mjs',
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
