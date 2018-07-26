let outline={
    data:()=>({
        data:[
            {
                key:'東京辦公室',
                value:`本葉国際資產管理株式会社
〒105-0012　東京都港区芝大門2‐4‐1　IZUMIビル4階
TEL 03－6809－1836
`,

            },
            {
                key:'台北辦公室',
                value:`本葉國際資產管理股份有限公司
104台北市中山區松江路122號11樓
Tel：02-2785-5865`,

            },
            {
                key:'代表取締役社長',
                value:`林彦宏`,
            },
            {
                key:'設立年月日',
                value:`2013年12月19日`,
            },
            {
                key:'營業執照',
                value:`東京都知事（1）第96199號`,
            },
            {
                key:'所屬團體',
                value:`公益社団法人東京都宅地建物取引業協会
公益社団法人全国宅地建物取引業保証協会
`,
            },
            {
                key:'公司網頁',
                value:`www.honyoam.com
`,
            },
        ],
    }),
    props:[
        'currentLanguage',
        'language',
    ],
    template:`
        <div class=outline>
            <div class=n>
                <span class=a>物件概要</span> / BRAND
            </div>
            <div class=o>
                <div>
                    <div v-for="a in data">
                        <div class=a>{{a.key}}</div>
                        <div class=b>{{a.value}}</div>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default outline
