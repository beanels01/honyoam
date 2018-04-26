import calcHomepageLikeResult from './calcHomepageLikeResult'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '最新消息',
        css:                '_news/main.css',
        clientScript:       '_news/main.js',
        vue:                '_news/vue.js',
        vueData:{
        },
    })
}
export default main
