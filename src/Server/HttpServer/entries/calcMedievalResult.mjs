import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_medieval/vue'
async function main(rq,rs,lang,patch){
    let language=(await this._getLanguage()).res[lang]
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              language.homepageLike.medieval,
        css:                [
                                '_medieval/main.css',
                                '_medievalLike/main.css',
                            ],
        clientScript:       '_medieval/main.mjs',
        vue,
        vueData:{
            data:{
                current:rq.url,
                place:(await this._getPlace()).res,
                rail:(await this._getRail()).res,
                medieval:(await this._getMedieval()).res,
                rate:(await this._getRate()).res,
                data:(await this._getMedievalList0(lang)).res,
            },
        },
    })
}
export default main
