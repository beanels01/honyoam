import api from                     '../_api.mjs'
import register from                './main/register.mjs'
import login from                   './main/login.mjs'
import logout from                  './main/logout.mjs'
import updatePassword from          './main/updatePassword.mjs'
import resetSysadminPassword from   './main/resetSysadminPassword.mjs'
import invitationCode from          './main/invitationCode.mjs'
import userlist from                './main/userlist.mjs'
import homepage from                './main/homepage.mjs'
import presale from                 './main/presale.mjs'
import presaleObjects from          './main/presaleObjects.mjs'
import seminar from                 './main/seminar.mjs'
import contactApply from            './main/contactApply.mjs'
import faq from                     './main/faq.mjs'
import faqFeedback from             './main/faqFeedback.mjs'
// this line fix this bug: https://github.com/rollup/rollup/issues/2110
//eval('')
let aMenu={
    props:['value','user'],
    template:`
        <div class=n><div>
            <div
                @click="$emit('input','user')"
                :class="{focus:value=='user'}"
            ><div>
                用戶：{{user.username}}
            </div></div>
            <template v-if="user.type=='root'">
                <div
                    @click="$emit('input','resetSysadminPassword')"
                    :class="{focus:value=='resetSysadminPassword'}"
                ><div>
                    重置 sysadmin 密碼
                </div></div>
                <div
                    @click="$emit('input','invitationCode')"
                    :class="{focus:value=='invitationCode'}"
                ><div>
                    邀請碼
                </div></div>
                <div
                    @click="$emit('input','userlist')"
                    :class="{focus:value=='userlist'}"
                ><div>
                    用戶清單
                </div></div>
                <div
                    @click="$emit('input','homepage')"
                    :class="{focus:value=='homepage'}"
                ><div>
                    首頁
                </div></div>
                <div
                    @click="$emit('input','presale')"
                    :class="{focus:value=='presale'}"
                ><div>
                    新成屋
                </div></div>
                <div
                    @click="$emit('input','presaleObjects')"
                    :class="{focus:value=='presaleObjects'}"
                ><div>
                    新成屋物件
                </div></div>
                <div
                    @click="$emit('input','faq')"
                    :class="{focus:value=='faq'}"
                ><div>
                    常見問題
                </div></div>
                <div
                    @click="$emit('input','faqFeedback')"
                    :class="{focus:value=='faqFeedback'}"
                ><div>
                    常見問題 - 回饋
                </div></div>
                <div
                    @click="$emit('input','seminar')"
                    :class="{focus:value=='seminar'}"
                ><div>
                    參加說明會 2.0
                </div></div>
                <div
                    @click="$emit('input','contactApply')"
                    :class="{focus:value=='contactApply'}"
                ><div>
                    參加說明會 - 報名
                </div></div>
            </template>
            <div
                @click="$emit('input','about')"
                :class="{focus:value=='about'}"
            ><div>
                關於
            </div></div>
        </div></div>
    `,
}
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
            focus:'user',
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
            login,
            register,
            updatePassword,
            logout,
            resetSysadminPassword,
            invitationCode,
            userlist,
            homepage,
            faq,
            faqFeedback,
            contactApply,
            seminar,
            presale,
            presaleObjects,
            aMenu,
        },
        template:`
            <div
                v-if=language
                class=manage
            >
                <div
                    v-if=!user
                    class=b
                >
                    <h1>登入</h1>
                    <login @login=login></login>
                    <h1>註冊</h1>
                    <register @register=login></register>
                </div>
                <div
                    v-if=user
                    class=a
                >
                    <aMenu :user=user v-model=focus></aMenu>
                    <div class=o><div>
                        <div v-if="focus=='user'">
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
                        </div>
                        <div v-if="focus=='resetSysadminPassword'">
                            <resetSysadminPassword></resetSysadminPassword>
                        </div>
                        <div v-if="focus=='invitationCode'">
                            <invitationCode></invitationCode>
                        </div>
                        <div v-if="focus=='userlist'">
                            <userlist></userlist>
                        </div>
                        <div v-if="focus=='homepage'">
                            <homepage
                                :language=language
                            ></homepage>
                        </div>
                        <div v-if="focus=='presale'">
                            <presale
                                :language=language
                            ></presale>
                        </div>
                        <div v-if="focus=='presaleObjects'">
                            <presaleObjects
                                :language=language
                            ></presaleObjects>
                        </div>
                        <div v-if="focus=='faq'">
                            <faq :language=language></faq>
                        </div>
                        <div v-if="focus=='faqFeedback'">
                            <faqFeedback></faqFeedback>
                        </div>
                        <div v-if="focus=='seminar'">
                            <seminar
                                :language=language
                            ></seminar>
                        </div>
                        <div v-if="focus=='contactApply'">
                            <contactApply></contactApply>
                        </div>
                        <div v-if="focus=='about'">
                            <div>
                                <p>
                                    <a href=doc/api.html>API documentation</a>
                                </p>
                                <p>
                                    Programmed by
                                    <a href=https://anliting.com/>An-Li Ting</a>.
                                </p>
                            </div>
                        </div>
                    </div></div>
                </div>
            </div>
        `,
    })
})()
