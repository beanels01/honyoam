import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_about/vue'
async function main(rq,rs,lang){
    let language=(await this._getLanguage()).res[lang]
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              language.homepageLike.footer.footer0.about,
        clientScript:       '_about/main.mjs',
        css:                '_about/main.css',
        vue,
        vueData:{
            data:{
                current:rq.url,
            },
        },
    })
}
export default main
