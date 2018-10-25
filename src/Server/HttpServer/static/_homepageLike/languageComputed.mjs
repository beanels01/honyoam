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
            ...this.language.showedLang.map(k=>(
                {
                    language:this.language.language[k],
                    href:this.current.replace(/^\/[^\/]*/,`/${k}`)
                }
            )),
        ]
    },
}
export default languageComputed
