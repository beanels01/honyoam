import calcHomepageLikeResult from './calcHomepageLikeResult'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '中古屋',
        css:                '_medieval/main.css',
        clientScript:       '_medieval/main.js',
        vue:                '_medieval/vue.js',
        vueData:{
        },
    })
}
export default main
