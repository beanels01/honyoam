let calcHomepageLikeResult=require('./calcHomepageLikeResult')
async function main(rq,rs,lang,patch,id){
    let
        data=patch||(await this._getSeminar(id)).res,
        language=(await this._getLanguage()).res[lang]
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              language.contact.title,
        clientScript:       '_contact/main.mjs',
        css:                '_contact/main.css',
        vue:                '_contact/vue.mjs',
        vueData:{
            value:data,
        },
        og:{
            title:data.block0.title,
            description:data.block1.subtitle,
            image:`https://honyoam.anliting.com/image/${
                data.block1.banner
            }`,
        },
    })
}
module.exports=main
