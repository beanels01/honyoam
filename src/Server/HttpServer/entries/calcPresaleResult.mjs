import calcHomepageLikeResult from './calcHomepageLikeResult'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '新成屋',
        css:                '_presale/main.css',
        clientScript:       '_presale/main.mjs',
        vue:                '_presale/vue.mjs',
        vueData:{
        },
    })
}
export default main
