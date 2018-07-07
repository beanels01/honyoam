import api from             '../../_api.mjs'
export default{
    props:['user'],
    data:()=>({
        error:'',
        password:'',
        confirmPassword:'',
        updating:false,
    }),
    methods:{
        async updatePassword(e){
            e.preventDefault()
            if(this.updating)
                return
            this.updating=true
            if(this.password==this.confirmPassword){
                this.error=''
                let res=await api.post({
                    method:'setPassword',
                    user:this.user._id,
                    password:this.password,
                })
                if(res.err)
                    this.error=res.err
                else{
                    api.logout()
                    this.$emit('updatePassword')
                }
            }else
                this.error='密碼與確認密碼不一致。'
            this.updating=false
        }
    },
    template:`
        <div class=updatePassword>
            <p>
                此項操作會導致您登出；在更改密碼後，若仍要繼續操作，請使用新密碼登入。
            <form @submit=updatePassword>
                <input
                    type=password
                    placeholder=密碼
                    v-model=password
                >
                <input
                    type=password
                    placeholder=確認密碼
                    v-model=confirmPassword
                >
                <input type=submit value=更改>
                <br>
                六位以上，由半形阿拉伯數字與英文字母組成，必須至少包含一個英文字母以及一個數字。
            </form>
            <span v-if=error>{{error}}</span>
        </div>
    `
}
