import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_seminar/vue'
async function main(rq,rs,lang,patch,id){
    let
        data=patch||(await this._getSeminar(id)).res,
        language=(await this._getLanguage()).res[lang]
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              language.contact.title,
        clientScript:       '_seminar/main.mjs',
        css:                '_seminar/main.css',
        vue,
        vueData:{
            value:data,
            data:{
                current:rq.url,
            },
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
export default main
