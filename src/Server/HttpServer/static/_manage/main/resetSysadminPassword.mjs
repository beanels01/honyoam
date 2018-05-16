import api from                     '../../_api.mjs'
let resetSysadminPassword={
    data:()=>({
        error:'',
        maskPassword:false,
        password:'',
    }),
    methods:{
        async submit(e){
            e.preventDefault()
            let res=await api.post({
                method:'updatePassword',
                user:(await api.post({
                    method:'getUserByType',
                    type:'sysadmin',
                })).res,
                password:this.password,
            })
            if(res.err)
                this.error=res.err
            else
                this.password=''
        }
    },
    template:`
        <form @submit=submit>
            <input
                placeholder=密碼
                :type="maskPassword?'password':'text'"
                v-model:value=password
            >
            <label>
                <input
                    type=checkbox
                    v-model:value=maskPassword
                >
                遮蔽密碼
            </label>
            <input type=submit value=送出>
            <br>
            <span v-if=error>錯誤：{{error}}</span>
        </form>
    `,
}
export default resetSysadminPassword
