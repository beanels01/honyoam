let calcHomepageLikeResult=require('./calcHomepageLikeResult')
async function main(rq,rs,lang,patch,id){
    let
        data=patch||(await this._getSeminar(id)).res,
        language=(await this._getLanguage()).res[lang]
    return calcHomepageLikeResult.call(this,{
        currentLanguage:    lang,
        title:              language.contact.title,
        clientScript:       '_contact/main.js',
        css:                '_contact/main.css',
        vue:                '_contact/vue.js',
        vueData:{
            value:data,
        },
        og:lang=='zh-Hans'?{
            title:'东京大改造－解读最新东京城市改造计划',
            description:`近年来日本政府积极推动观光以振兴经济，访日观光客于2013年突破1000万人次以后，更立下2020年达成4000万人，2030年达成6000万人的目标。同时东京都知事小池百合子也积极推动「国家战略特区计划」，目标将东京打造成亚洲第一国际金融都市。
2027年即将开通的东京-名古屋磁浮列车可将两地车程缩短至45分钟；相隔40年即将新增的山手线新站带动外围大规模开发计划；涉古车站前的大工地将会变成何种新样貌。
2018年5月19日，由林彦宏社长带您一探大改造中的东京，掌握最新都市开发计划，并抢先介绍三菱地所Residence 2018最新建案。
`,
            image:'https://honyoam.anliting.com/_contact/zh-Hans-og-image.jpg',
        }:{
            title:'東京大改造-解讀最新東京城市改造計劃。',
            description:`近年來日本政府積極推動觀光以振興經濟，訪日觀光客於2013年突破1000萬人次以後，更立下2020年達成4000萬人，2030年達成6000萬人的目標。同時東京都知事小池百合子也積極推動「國家戰略特區計劃」，目標將東京打造成亞洲第一國際金融都市。
2027年即將開通的東京-名古屋磁浮列車可將兩地車程縮短至45分鐘；相隔40年即將新增的山手線新站帶動外圍大規模開發計劃；澀谷車站前的大工地將會變成何種新樣貌。2018年5月19日，由林彥宏社長帶您一探大改造中的東京，掌握最新都市開發計劃，並搶先介紹三菱地所Residence 2018最新建案。
`,
            image:'https://honyoam.anliting.com/_contact/zh-Hant-0.jpg',
        },
    })
}
module.exports=main
