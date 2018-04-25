let calcHomepageLikeResult=require('./calcHomepageLikeResult')
async function main(rq,rs,lang){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '客服Q&A',
        clientScript:       '_qa/main.js',
        css:                '_qa/main.css',
        vue:                '_qa/vue.js',
        vueData:{
            classes:            (await this._getFaqClasses()).res,
            faq:                (await this._getFaq()).res[lang],
        }
    })
}
module.exports=main
