function langToPath(lang){
    if(lang=='jp')
        return{
            about:      `${lang}/about`,
            homepage:   `${lang}/about`,
            news:       `${lang}/about`,
            medieval:   `${lang}/about`,
            presale:    `${lang}/about`,
            qa:         `${lang}/about`,
            qaForm:     `${lang}/about`,
            seminar:    `${lang}/seminar`,
            user:       `${lang}/about`,
            partner:    `${lang}/about`,
            rent:       `${lang}/about`,
            escrow:     `${lang}/about`,
            terms:      `${lang}/about`,
            privacy:    `${lang}/about`,
        }
    return{
        about:      `${lang}/about`,
        homepage:   `${lang}`,
        news:       `${lang}/news`,
        medieval:   `${lang}/medieval`,
        presale:    `${lang}/presale`,
        qa:         `${lang}/qa`,
        qaForm:     `${lang}/qa#form`,
        seminar:    `${lang}/seminar`,
        partner:    `${lang}/partner`,
        rent:       `${lang}/rent`,
        escrow:     `${lang}/escrow`,
        terms:      `${lang}/terms`,
        privacy:    `${lang}/privacy`,
        user:       `#`,
    }
}
export default langToPath
