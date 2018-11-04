import homepageLike from    '../_homepageLike.mjs'
let aMain={
    components:{
        hlFooter:           homepageLike.footer,
        hlMenu:             homepageLike.menu,
        hlHeader:           homepageLike.header,
        floatBall:          homepageLike.floatBall,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
    }),
    props:['data','language','currentLanguage','mainSeminar'],
    template:`
        <div id=main>
            <hlHeader
                shadow=1
                :language=language
                :current=data.current
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
                v-model=menu
            ></hlHeader>
            <template v-if=!menu>
                <div class=a>
                    <h1 class=a>國外不動產投資，具有風險性，請投資人詳閱行銷文件並審慎考量後再行交易</h1>
                    <p>
                    * 本葉國際（以下簡稱本網站）登載的資訊皆是我們根據至公開時為止，認定其為可信的各種資訊、資料所編寫的。雖然已經盡力登載合宜的內容，以免讓使用網站的用戶遭遇任何無法預料的損害、妨礙及利益損失，但仍然無法保證其
正確性、妥適性與完整性。
                    </p>
                    <p>
                    * 對於任何並無經由本公司負責人即根據本網站登載資訊所引發的行為，進而導致的損害、妨礙及利益損失，本公司將不負擔責任。<br>
                    * 來自客戶的電子郵件或資料請求等等，如果因網路上的錯誤情況或意外導致沒有確實發送到本公司，本公司對此將一概不負擔責任。
                    </p>
                    <p>
                    * 記載於本網站文件上的事項，將有可能未經預先通知即進行更改或中止，請先行諒解。
                    </p>
                </div>
                <hlFooter
                    :language=language.homepageLike.footer
                    :currentLanguage=currentLanguage
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
            </template>
            <hlMenu
                v-if=menu
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
            ></hlMenu>
        </div>
    `,
}
export default{
    components:{aMain},
    template:`
        <aMain
            :data=data
            :language=language
            :currentLanguage=currentLanguage
            :mainSeminar=mainSeminar
        ></aMain>
    `
}
