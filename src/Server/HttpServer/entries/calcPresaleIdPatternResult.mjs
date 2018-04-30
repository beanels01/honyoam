import calcHomepageLikeResult from './calcHomepageLikeResult'
import vue from '../static/_presaleIdPattern/vue'
async function main(rq,rs,lang,patch){
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              '新成屋 - ID - 空間格局',
        css:                [
                                '_presaleIdLike/main.css',
                                '_presaleIdPattern/main.css'
                            ],
        clientScript:       '_presaleIdPattern/main.mjs',
        vue,
        vueData:{
        },
    })
}
export default main
