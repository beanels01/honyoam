import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_homepage/vue'
async function main(rq,rs,lang,patch){
    let news=(await this._getAllNews(lang)).res
    let data=patch||(await this._getHomepage()).res
    let language=(await this._getLanguage()).res[lang]
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              language.首頁,
        clientScript:       '_homepage/main.mjs',
        css:                '_homepage/main.css',
        vue,
        vueData:{
            homepage:{
                mission:data.mission,
                rotation:data.rotation[lang],
                event:data.event[lang],
            },
            data:{
                place:(await this._getPlace()).res,
                current:rq.url,
                news,
            },
        },
    })
}
export default main
