import api from             '../../_api.js'
export default{
    data:()=>({
        username:'',
        password:'',
        confirmPassword:'',
        realname:'',
        jobTitle:'',
        invitationCode:'',
        lock:false,
        error:'',
    }),
    methods:{
        async register(e){
            e.preventDefault()
            if(this.lock)
                return
            this.lock=true
            this.error=''
            ;(async()=>{
                if(this.password!=this.confirmPassword)
                    return this.error='密碼與確認密碼不一致。'
                let res=await api.post({
                    method:'register',
                    username:this.username,
                    password:this.password,
                    realname:this.realname,
                    type:this.jobTitle,
                    invitationCode:this.invitationCode,
                })
                if(res.err)
                    return this.error=res.err
                await api.login(this.username,this.password)
                this.$emit('register',res.res)
            })()
            this.lock=false
        }
    },
    template:`
        <div class=register>
            <p>
                您需要向系統管理員當面索取邀請碼以完成此項操作。
            </p>
            <form @submit=register>
                <p>
                <input
                    placeholder=帳號
                    :disabled=lock
                    v-model=username
                >
                <br>
                一至十六位，由半形阿拉伯數字與小寫英文字母組成。
                </p>
                <p>
                <input
                    type=password
                    placeholder=密碼
                    :disabled=lock
                    v-model=password
                >
                <br>
                六位以上，由半形阿拉伯數字與英文字母組成，必須至少包含一個英文字母以及一個數字。
                <p>
                <input
                    type=password
                    placeholder=確認密碼
                    :disabled=lock
                    v-model=confirmPassword
                >
                </p>
                <p>
                <input
                    placeholder=姓名
                    :disabled=lock
                    v-model=realname
                >
                </p>
                <p>
                <select required v-model=jobTitle>
                    <option value='' hidden>職稱</option>
                    <option value=salesman>業務</option>
                    <option value=editor>編輯</option>
                </select>
                </p>
                <p>
                <input
                    placeholder=邀請碼
                    :disabled=lock
                    v-model=invitationCode
                >
                </p>
                <p>
                <input type=submit value=註冊 :disabled=lock>
                </p>
            </form>
            <p>
            <span v-if=error>註冊失敗，原因：{{error}}</span>
            </p>
        </div>
    `
}
