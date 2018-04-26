let calcHomepageLikeResult=require('./calcHomepageLikeResult')
async function main(rq,rs,lang,patch){
    let
        data=patch||(await this._getContact()).res,
        language=(await this._getLanguage()).res[lang]
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              language.contact.title,
        clientScript:       '_contact/main.mjs',
        css:                '_contact/main.css',
        vue:                '_contact/vue.mjs',
        vueData:{
            value:data[lang],
        },
        og:{
            title:data[lang].block0.title,
            description:data[lang].block1.subtitle,
            image:`https://honyoam.anliting.com/image/${
                data[lang].block1.banner
            }`,
        },
    })
}
module.exports=main
