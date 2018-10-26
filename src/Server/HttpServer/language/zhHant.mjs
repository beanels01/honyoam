import about from           './zhHant/about'
import contact from         './zhHant/contact'
import news from            './zhHant/news'
import presale from         './zhHant/presale'
import medieval from        './zhHant/medieval'
import homepage from        './zhHant/homepage'
import qa from              './zhHant/qa'
import homepageLike from    './zhHant/homepageLike'
export default{
    about,
    contact,
    news,
    presale,
    medieval,
    qa,
    faqClasses:{
        class00:'新手上路 ~ 買賣 Q&A',
        class01:'新手上路 ~ 租賃管理 Q&A',
        class02:'交易流程與費用',
        class03:'日本不動產知識',
    },
    homepage,
    homepageLike,
    language:{
        'jp':       '日文',
        'zh-Hans':  '簡體中文',
        'zh-Hant':  '繁體中文',
    },
    showedLang:['jp','zh-Hans','zh-Hant'],
}
