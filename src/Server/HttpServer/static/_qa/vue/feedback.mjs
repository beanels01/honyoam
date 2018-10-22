import api from                 '../../_api.mjs'
import recaptcha from           '../../_recaptcha.mjs'
let feedback={
    components:{
        recaptcha,
    },
    data:()=>({
        success:            0,
        errorAlert:         0,
        recaptcha:          '',
        姓名:               '',
        性別:               '',
        聯絡電話:           '',
        email:              '',
        居住地:             '',
        需求選項:           '',
        需求文字:           '',
    }),
    methods:{
        async submit(){
            if(!(
                this.姓名&&
                this.性別&&
                this.聯絡電話&&
                this.email&&
                this.需求選項
            ))
                return this.errorAlert='請充分填寫「姓名」、「性別」、「聯絡電話」、「E-mail」、「需求」後再送出。'
            if(!this.recaptcha)
                return this.errorAlert='請完成人機驗證（下方「我不是機器人」欄位）後再送出。'
            this.errorAlert=''
            await api.post({
                method:         'putFeedback',
                recaptcha:      this.recaptcha,
                content:`姓名：${this.姓名}
性別：${this.性別}
聯絡電話：${this.聯絡電話}
E-mail：${this.email}
居住地：${this.居住地}
需求選項：${this.需求選項}
需求文字：${this.需求文字}
`,
            })
            this.success=1
        },
    },
    template:`
        <div class=huiKui>
            <a id=form></a>
            <div class=c>
                <div class=a>
                    <div class=title>給我們些回饋</div>
                    <p>
                        如果上面的問題沒有回答到您心中的疑問，<br>
                        如果您想預約看房或是對本網站上刊登的物件資訊想更進一步了解,<br>
                        都歡迎您填寫下方表格，我們將盡快與您聯絡。
                    </p>
                    <p>
                        標示星號 (<span style="color:red;">*</span>) 為必填項目
                    </p>
                </div>
                <div class=b>
                    <img src="/_homepageLike/line.png">
                    <img src="/_homepageLike/wechat.png">
                </div>
            </div>
            <template v-if=!success>
                <div class=a>
                    <div>
                        <div>
                            姓名 <span style="color:red;">*</span>
                        </div>
                        <div>
                            <input class=a v-model=姓名>
                        </div>
                    </div>
                    <div>
                        <div>
                            性別 <span style="color:red;">*</span>
                        </div>
                        <div>
                            <label>
                                <input type=radio v-model=性別 value=先生>
                                先生
                            </label>
                            <label>
                                <input type=radio v-model=性別 value=女士>
                                女士
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>
                            聯絡電話 <span style="color:red;">*</span>
                        </div>
                        <div>
                            <input class=a v-model=聯絡電話>
                        </div>
                    </div>
                    <div>
                        <div>
                            E-mail <span style="color:red;">*</span>
                        </div>
                        <div>
                            <input class=a v-model=email>
                        </div>
                    </div>
                    <div>
                        <div>
                            居住地
                        </div>
                        <div>
                            <label>
                                <input
                                    type=radio
                                    v-model=居住地
                                    value=台灣
                                 >
                                台灣
                            </label>
                            <label>
                                <input
                                    type=radio
                                    v-model=居住地
                                    value=海外
                                >
                                海外
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>
                            需求 <span style="color:red;">*</span>
                        </div>
                        <div>
                            <label>
                                <input
                                    type=radio
                                    v-model=需求選項
                                    value=買賣日本不動產
                                >
                                買賣日本不動產
                            </label>
                            <label>
                                <input
                                    type=radio
                                    v-model=需求選項
                                    value=租賃管理
                                >
                                租賃管理
                            </label>
                            <label>
                                <input
                                    type=radio
                                    v-model=需求選項
                                    value=預約看房
                                >
                                預約看房
                            </label>
                            <label>
                                <input
                                    type=radio
                                    v-model=需求選項
                                    value=其它問題
                                >
                                其它問題
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>
                        </div>
                        <div>
                            <textarea class=b>
                            </textarea>
                        </div>
                    </div>
                </div>
                <!--
                    <div>
                        【個人資料保護 】
                        當您填寫線上諮詢表格時，我們需要您的聯絡資料作為回覆依據，並不會將您的個人資料另作他用 。送出以上資料前，須同意本公司的「隱私權保護政策」。請詳細閱讀隱私權保護政策，確定同意後，點選「我同意隱私權保護政策並前往確認頁面」。
                    </div>
                -->
                <div
                    class="alert error"
                    v-if=errorAlert
                >
                    {{errorAlert}}
                </div>
                <div class=b>
                    <div>
                        <div class=n>
                            <recaptcha
                                v-model=recaptcha
                            ></recaptcha>
                        </div>
                        <div class=o>
                            <button
                                @click=submit
                            >送出</button>
                        </div>
                    </div>
                </div>
            </template>
            <div
                class="alert success"
                v-if=success
            >
                送出成功。
            </div>
        </div>
    `,
}
export default feedback
