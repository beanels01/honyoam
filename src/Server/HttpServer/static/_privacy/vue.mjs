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
                    <h1>保障隱私權聲明:</h1>
                    <p>
                        本葉國際（以下簡稱本網站）為了提供您房地產的專業資訊與個人化的需求服務，當您使用本網站特定功能時，將要求您填寫個人相關資料，基於對個人資料保護及線上隱私權的支持，您所填寫的資料將受以下聲明保障：
                    </p>
                    <p>
                    <span style="font-weight:bold">*個人資料取得</span><br>
                    本葉國際於本公司營業期間內，基於不動產服務、統計與分析之相關範圍內，蒐集、處理及利用台端的姓名、身分證字號、連絡電話、聯絡地址、居住地址等個人資料，以確認身分、維護交易安全及提供售後服務，並於日後不定期寄送相關不動產參考資訊。台端享有向本公司請求查詢、閱覽、複製、更正、刪除個人資料檔案等權利。
                    </p>
                    <p>
                    <span style="font-weight:bold">*個人資料利用</span><br>
                    本網站所取得的個人資料，僅供於內部於不動產仲介與客戶管理之服務、統計調查與資訊分析之執行、處理等用途。不會將使用者個人資料提供給第三人、或移作其他目的使用，並且嚴禁內部人員私自使用這些資料。
                    <p>
                    <span style="font-weight:bold">*與外站連結</span><br>
                    本相關網站或網頁有可能包含其他網站或網頁的連結，對於不屬於「本葉國際」之網站或網頁，本網站將遵循相關法令及隱私權政策
                    進行。
                    <p>

                    <span style="font-weight:bold">*網路安全</span><br>
                    當您個人資料有變更、或發現個人資料不正確的時候，您可隨時利用會員區的功能，進行個人資料的修改與維護。惟本網站所提供之隱私權保障聲明，並不包括本網站內所連結之其他網站及網頁。
                    </p>
                    <p>
                    <span style="font-weight:bold">*隱私權政策聲明的修改</span><br>
                    本網站為保護會員隱私及服務需要與配合社會環境及法令規定, 將保留修改這份聲明的權利並儘速公告週知。當本聲明有任何修改時，我們會在網站上公告，或經由電子郵件通知您。如您無法接受本聲明的任何變更時，您可經由線上留言，由我們為您取消會員資格，否則即代表您同意經過修改之內容。
                    </p>
                    <p>
                    *本網站對會員及網友個人資料的蒐集、處理及利用，將遵守中華民國『個人資料保護法』 之規範 。
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
