import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_news/vue'
async function main(rq,rs,lang,patch,id){
    let news=(await this._getAllNews(lang)).res
    let language=(await this._getLanguage()).res[lang]
    if(patch)
        for(let a of news)
            if(a._id==id)
                Object.assign(a,patch)
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              language.homepageLike.news,
        css:                '_news/main.css',
        clientScript:       '_news/main.mjs',
        vue,
        vueData:{
            data:{
                current:rq.url,
                news,
                id,
            },
        },
    })
}
export default main
