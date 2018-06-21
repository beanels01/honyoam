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
                    href:this.current.replace(/^\/[^\/]*\//,`/${k}/`)
                }
            ).filter(a=>a),
        ]
    },
}
export default languageComputed
