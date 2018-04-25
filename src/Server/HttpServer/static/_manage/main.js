import api from             '../_api.js'
import register from        './main/register.js'
import login from           './main/login.js'
import logout from          './main/logout.js'
import updatePassword from  './main/updatePassword.js'
import root from            './main/root.js'
import sysadmin from        './main/sysadmin.js'
import salesman from        './main/salesman.js'
import editor from          './main/editor.js'
// this line fix this bug: https://github.com/rollup/rollup/issues/2110
eval('')
;(async()=>{
    new Vue({
        el:document.createElement('div'),
        created(){
            this.getLanguage()
        },
        mounted(){
            document.body.appendChild(this.$el)
        },
        data:{
            user:await api.post({method:'getCurrentUser'}),
            updatePassword:false,
            language:null,
        },
        methods:{
            async getLanguage(){
                this.language=(await api.post({
                    method:'getLanguage',
                })).res
            },
            login(e){
                this.user=e
            },
            logout(){
                this.user=null
                this.updatePassword=false
            },
        },
        components:{
            login,register,updatePassword,logout,
            root,sysadmin,salesman,editor,
        },
        template:`
            <div
                v-if=language
                class=manage
            >
                <div v-if=!user>
                    <h1>登入</h1>
                    <login @login=login></login>
                    <h1>註冊</h1>
                    <register @register=login></register>
                </div>
                <div v-if=user>
                    <h1>用戶：{{user.username}}</h1>
                    <button @click='updatePassword=true'>
                        更改密碼
                    </button>
                    <logout @logout=logout>登出</logout>
                    <div v-if=updatePassword>
                        <h2>更改密碼</h2>
                        <update-password
                            class=indent
                            :user=user
                            @updatePassword=logout
                        ></update-password>
                    </div>
                    <div v-if="user.type=='root'">
                        <h1>根職權</h1>
                        <root :language=language></root>
                    </div>
                    <div v-if="user.type=='sysadmin'">
                        <h1>系統管理員職權</h1>
                        <sysadmin
                            :language=language
                        ></sysadmin>
                    </div>
                    <div v-if="user.type=='salesman'">
                        <h1>業務職權</h1>
                        <salesman></salesman>
                    </div>
                    <div v-if="user.type=='editor'">
                        <h1>編輯職權</h1>
                        <editor
                            :language=language
                        ></editor>
                    </div>
                </div>
                <hr>
                <div class=footer>
                    <p>
                        <a href=doc/api.html>API documentation</a>
                    </p>
                    <p>
                        Programmed by
                        <a href=https://anliting.com/>An-Li Ting</a>.
                    </p>
                </div>
            </div>
        `,
    })
})()
