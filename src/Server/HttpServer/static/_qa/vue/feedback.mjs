import api from                 '../../_api.mjs'
import recaptcha from           '../../_recaptcha.mjs'
import classes from             './feedback/classes.mjs'
import classesComponent from    './feedback/classesComponent.mjs'
let feedback={
    components:{
        recaptcha,
        classesComponent,
    },
    data:()=>({
        recaptcha:          '',
        name:               '',
        email:              '',
        phone:              '',
        classesSelected:    [0,0,0,0,0,0],
        question:           '',
        success:            0,
        errorAlert:         0,
    }),
    methods:{
        async submit(){
            if(!(
                this.name&&
                this.email&&
                this.phone
            ))
                return this.errorAlert='請充分填寫「姓名」、「Email」、「電話」、「問題分類」後再送出。'
            if(!this.recaptcha)
                return this.errorAlert='請完成人機驗證（下方「我不是機器人」欄位）後再送出。'
            this.errorAlert=''
            await api.post({
                method:         'putFeedback',
                recaptcha:      this.recaptcha,
                name:           this.name,
                email:          this.email,
                phone:          this.phone,
                question:`
                    （分類：${this.classesSelected.map(
                        (a,i)=>a?classes[i]:0
                    ).filter(a=>a).join('、')}）
                    ${this.question}
                `,
            })
            this.success=1
        },
    },
    props:[],
    template:`
        <div class=huiKui>
            <a id=form></a>
            <div class=title>給我們些回饋</div>
            <p>
                找不到想要的問題嗎？
                上方的問答中，沒有解答到您心中的疑問嗎？<br>
                沒關係！歡迎您直接來信詢問，我們將儘速回覆您。
            </p>
            <template v-if=!success>
                <div class=a>
                    <div>
                        <input
                            placeholder=姓名
                            v-model=name
                        >
                    </div>
                    <div>
                        <input
                            placeholder=Email
                            v-model=email
                        >
                    </div>
                    <div>
                        <input
                            placeholder=電話
                            v-model=phone
                        >
                    </div>
                </div>
                <div class=d>問題分類：</div>
                <classesComponent
                    v-model=classesSelected
                ></classesComponent>
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
