import api from             '../../_api.mjs'
export default{
    data:()=>({
        username:'',
        password:'',
        checking:false,
        error:'',
    }),
    methods:{
        async login(e){
            e.preventDefault()
            if(this.checking)
                return
            this.checking=true
            let res=await api.login(
                this.username,
                this.password,
            )
            if(res){
                this.error=''
                this.$emit('login',res)
            }else
                this.error='帳號或密碼錯誤。'
            this.checking=false
        }
    },
    template:`
        <div class=login>
            <form @submit=login>
                <input
                    placeholder=帳號
                    :disabled=checking
                    v-model=username
                >
                <input
                    type=password
                    placeholder=密碼
                    :disabled=checking
                    v-model=password
                >
                <input type=submit value=登入 :disabled=checking>
            </form>
            <span v-if=error>{{error}}</span>
        </div>
    `
}
