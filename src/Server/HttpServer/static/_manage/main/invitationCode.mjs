import api from             '../../_api.mjs'
export default{
    data:()=>({
        invitationCode:null,
    }),
    methods:{
        async refresh(e){
            this.invitationCode=(await api.post({
                method:'refreshInvitationCode',
            })).res
        },
    },
    template:`
        <div v-if=invitationCode>
            <ul>
            <li>註冊：<code>{{invitationCode.register}}</code>
            <li>重置密碼：<code>{{invitationCode.resetPassword}}</code>
            </ul>
            <button @click=refresh>刷新</button>
        </div>
    `,
    async created(){
        this.invitationCode=(await api.post({
            method:'getInvitationCode',
        })).res
    },
}
