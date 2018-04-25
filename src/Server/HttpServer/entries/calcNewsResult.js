let calcHomepageLikeResult=require('./calcHomepageLikeResult')
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
module.exports=main
