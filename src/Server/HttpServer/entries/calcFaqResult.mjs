import calcHomepageLikeResult from './calcHomepageLikeResult'
async function main(rq,rs,lang){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '客服Q&A',
        clientScript:       '_qa/main.mjs',
        css:                '_qa/main.css',
        vue:                '_qa/vue.mjs',
        vueData:{
            classes:            (await this._getFaqClasses()).res,
            faq:                (await this._getFaq()).res[lang],
        }
    })
}
export default main
