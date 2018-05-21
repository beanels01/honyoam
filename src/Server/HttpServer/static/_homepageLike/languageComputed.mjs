import langToPath from './langToPath.mjs'
let languageComputed={
    href(){
        return langToPath(this.currentLanguage)
    },
    currentLanguageInSiteHref(){
        return this.language.showedLang.indexOf(
            this.currentLanguage
        )
    },
    siteHref(){
        return[
            ...this.language.showedLang.map(k=>
                k=='_'?0:{
                    language:this.language.language[k],
                    href:`/${k}`
                }
            ).filter(a=>a),
            {
                language:'日文',
                href:'http://www.honyoam.co.jp/about_us_jp/',
            },
        ]
    },
}
export default languageComputed
