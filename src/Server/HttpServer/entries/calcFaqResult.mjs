import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_qa/vue'
async function main(rq,rs,lang){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '客服Q&A',
        clientScript:       '_qa/main.mjs',
        css:                '_qa/main.css',
        vue,
        vueData:{
            classes:            (await this._getFaqClasses()).res,
            faq:                (await this._getFaq()).res[lang],
        }
    })
}
export default main
