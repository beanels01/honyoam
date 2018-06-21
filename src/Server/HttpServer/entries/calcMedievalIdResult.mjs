import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_medievalId/vue'
async function main(rq,rs,lang,patch,id){
    let medieval=(await this._getMedievalObject(id)).res
    // i for input
    medieval=(i=>{
        let o={
            price:          i.price,
            pattern:        i.pattern,
            date:           i.date,
            area:           i.area,
            balconyArea:    i.balconyArea,
            householdCount: i.householdCount,
            managementFee:  i.managementFee,
            otherFee:       i.otherFee,
            repairFund:     i.repairFund,
            map:            i.map,
            gallery:        i.gallery,
        }
        i=i.language[lang]
        return Object.assign(o,{
            name:                   i.name,
            place:                  i.place,
            traffic:                i.traffic,
            situation:              i.situation,
            direction:              i.direction,
            patternImage:           i.pattern,
            patternTitle:           i.patternTitle,
            patternContent:         i.patternContent,
            videoId:                i.videoId,
            videoContent:           i.videoContent,
        })
    })(medieval)
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `中古屋 - ID`,
        css:                [
                                '_medievalLike/main.css',
                                '_medievalId/main.css',
                            ],
        clientScript:       '_medievalId/main.mjs',
        vue,
        vueData:{
            data:{
                current:rq.url,
                data:medieval,
            },
        },
    })
}
export default main
