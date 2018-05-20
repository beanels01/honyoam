import invitationCode from  './invitationCode.mjs'
import userlist from        './userlist.mjs'
import homepage from        './homepage.mjs'
export default{
    data:()=>({
    }),
    props:['language'],
    components:{invitationCode,userlist,homepage},
    methods:{
    },
    created(){
    },
    template:`
        <div>
            <h2>邀請碼</h2>
            <invitationCode class=indent></invitationCode>
            <h2>用戶清單</h2>
            <userlist class=indent></userlist>
            <h2>首頁</h2>
            <homepage
                class=indent
                :language=language
            ></homepage>
        </div>
    `,
}
