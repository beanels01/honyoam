import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_medievalId/vue'
async function main(rq,rs,lang,patch,id){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              `中古屋 - ID`,
        css:                [
                                '_medievalLike/main.css',
                                '_medievalId/main.css',
                            ],
        clientScript:       '_medievalId/main.mjs',
        vue,
        vueData:{
            medieval:{
            },
        },
    })
}
export default main
