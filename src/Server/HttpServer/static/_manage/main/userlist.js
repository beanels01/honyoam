import api from             '../../_api.js'
export default{
    created(){
        this.updateUserlist()
    },
    data:()=>({
        userlist:null,
    }),
    methods:{
        userDeletable(u){
            return u.type=='salesman'||u.type=='editor'||
                u.type==undefined
        },
        async freezeUser(u){
            await api.post({
                method:'freezeUser',
                user:u._id,
            })
            await this.updateUserlist()
        },
        async updateUserlist(){
            this.userlist=(await api.post({
                method:'getUserlist',
            })).res.filter(u=>
                ['sysadmin','salesman','editor'].includes(u.type)&&
                !u.freezed
            )
        }
    },
    template:`
        <div class=userlist v-if=userlist>
            <table>
                <thead>
                    <tr>
                        <th>帳號</th>
                        <th>姓名</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="u in userlist">
                        <td><code>{{u.username}}</code></td>
                        <td>{{u.realname}}</td>
                        <td>
                            <button
                                :disabled=!userDeletable(u)
                                @click=freezeUser(u)
                            >
                                刪除
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
}
