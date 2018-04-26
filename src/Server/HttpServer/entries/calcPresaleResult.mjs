import calcHomepageLikeResult from './calcHomepageLikeResult'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '新成屋',
        css:                '_presale/main.css',
        clientScript:       '_presale/main.js',
        vue:                '_presale/vue.js',
        vueData:{
        },
    })
}
export default main
