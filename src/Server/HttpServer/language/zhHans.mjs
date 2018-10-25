import about from       './zhHans/about'
import contact from     './zhHans/contact'
import news from        './zhHans/news'
import presale from     './zhHans/presale'
import medieval from    './zhHans/medieval'
import homepage from    './zhHans/homepage'
import qa from          './zhHans/qa'
export default{
    about,
    contact,
    news,
    presale,
    medieval,
    qa,
    faqClasses:{
        class00:'新手上路-买卖',
        class01:'新手上路-租赁管理',
        class02:'购买前',
        class03:'购买时',
        class04:'购买后',
        class05:'租赁管理',
    },
    homepage,
    homepageLike:{
        news:           '最新消息',
        medieval:       '二手房',
        presale:        '新成屋',
        qa:             '客服Q&A',
        contact:        '参加说明会',
        user:           '会员登入',
        footer:{
            privacyPolicy:      '隐私政策',
            termOfService:      '使用条款',
            copyright:          '版权讯息',
            sitemap:            '网站地图',
            copyrightContent:   '© 2018 本叶国际资产管理股份有限公司. All Rights Reserved.',
            footer0:{
                presale:        '新成屋',
                medieval:       '二手房',
                news:           '最新消息',
                loan:           '貸款試算',
                qa:             '客服Q&A',
                about:          '關於我們',
                qaForm:         '聯絡我們',
                c:{
                    title:          '订阅电子报',
                    content:        '想得到最新的日本购屋租屋讯息吗？<br>快来订阅我们的电子报，消息不漏接。',
                    placeholder:    '输入您的E-mail',
                },
            }
        },
    },
    language:{
        'jp':       '日文',
        'zh-Hans':  '简体中文',
        'zh-Hant':  '繁体中文',
    },
    showedLang:['jp','zh-Hans','zh-Hant'],
}
