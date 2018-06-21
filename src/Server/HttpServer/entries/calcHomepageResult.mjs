import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_homepage/vue'
async function main(rq,rs,lang,patch){
    let data=patch||(await this._getHomepage()).res
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '首頁',
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
                current:rq.url,
            },
        },
    })
}
export default main
