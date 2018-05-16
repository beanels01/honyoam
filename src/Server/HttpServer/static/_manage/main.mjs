import api from             '../_api.mjs'
import register from        './main/register.mjs'
import login from           './main/login.mjs'
import logout from          './main/logout.mjs'
import updatePassword from  './main/updatePassword.mjs'
import root from            './main/root.mjs'
import sysadmin from        './main/sysadmin.mjs'
import salesman from        './main/salesman.mjs'
import editor from          './main/editor.mjs'
import resetSysadminPassword from   './main/resetSysadminPassword.mjs'
import invitationCode from          './main/invitationCode.mjs'
import userlist from                './main/userlist.mjs'
import homepage from                './main/homepage.mjs'
import presale from                 './main/presale.mjs'
import presaleObjects from          './main/presaleObjects.mjs'
import contact from                 './main/contact.mjs'
import seminar from                 './main/seminar.mjs'
import contactApply from            './main/contactApply.mjs'
import faq from                     './main/faq.mjs'
import faqFeedback from             './main/faqFeedback.mjs'
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
            root,
            sysadmin,
            salesman,
            editor,
            resetSysadminPassword,
            invitationCode,
            userlist,
            homepage,
            faq,
            faqFeedback,
            contact,
            contactApply,
            seminar,
            presale,
            presaleObjects,
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
                    <div class=n>
                        <div
                            @click="focus='user'"
                            :class="{focus:focus=='user'}"
                        ><div>
                            用戶：{{user.username}}
                        </div></div>
                        <template v-if="user.type=='root'">
                            <div
                                @click="focus='resetSysadminPassword'"
                                :class="{focus:focus=='resetSysadminPassword'}"
                            ><div>
                                重置 sysadmin 密碼
                            </div></div>
                            <div
                                @click="focus='invitationCode'"
                                :class="{focus:focus=='invitationCode'}"
                            ><div>
                                邀請碼
                            </div></div>
                            <div
                                @click="focus='userlist'"
                                :class="{focus:focus=='userlist'}"
                            ><div>
                                用戶清單
                            </div></div>
                            <div
                                @click="focus='homepage'"
                                :class="{focus:focus=='homepage'}"
                            ><div>
                                首頁
                            </div></div>
                            <div
                                @click="focus='presale'"
                                :class="{focus:focus=='presale'}"
                            ><div>
                                新成屋
                            </div></div>
                            <div
                                @click="focus='presaleObjects'"
                                :class="{focus:focus=='presaleObjects'}"
                            ><div>
                                新成屋物件
                            </div></div>
                            <div
                                @click="focus='faq'"
                                :class="{focus:focus=='faq'}"
                            ><div>
                                常見問題
                            </div></div>
                            <div
                                @click="focus='faqFeedback'"
                                :class="{focus:focus=='faqFeedback'}"
                            ><div>
                                常見問題 - 回饋
                            </div></div>
                            <div
                                @click="focus='seminar'"
                                :class="{focus:focus=='seminar'}"
                            ><div>
                                參加說明會 2.0
                            </div></div>
                            <div
                                @click="focus='contact'"
                                :class="{focus:focus=='contact'}"
                            ><div>
                                參加說明會 1.0
                            </div></div>
                            <div
                                @click="focus='contactApply'"
                                :class="{focus:focus=='contactApply'}"
                            ><div>
                                參加說明會 - 報名
                            </div></div>
                        </template>
                        <div
                            @click="focus='legacy'"
                            :class="{focus:focus=='legacy'}"
                        ><div>
                            舊版
                        </div></div>
                        <div
                            @click="focus='about'"
                            :class="{focus:focus=='about'}"
                        ><div>
                            關於
                        </div></div>
                    </div>
                    <div class=o><div>
                        <div v-if="focus=='user'">
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
                        </div>
                        <div v-if="focus=='resetSysadminPassword'">
                            <resetSysadminPassword class=indent></resetSysadminPassword>
                        </div>
                        <div v-if="focus=='invitationCode'">
                            <invitationCode class=indent></invitationCode>
                        </div>
                        <div v-if="focus=='userlist'">
                            <userlist class=indent></userlist>
                        </div>
                        <div v-if="focus=='homepage'">
                            <homepage
                                class=indent
                                :language=language
                            ></homepage>
                        </div>
                        <div v-if="focus=='presale'">
                            <presale
                                class=indent
                                :language=language
                            ></presale>
                        </div>
                        <div v-if="focus=='presaleObjects'">
                            <presaleObjects
                                class=indent
                                :language=language
                            ></presaleObjects>
                        </div>
                        <div v-if="focus=='faq'">
                            <faq class=indent :language=language></faq>
                        </div>
                        <div v-if="focus=='faqFeedback'">
                            <faqFeedback class=indent></faqFeedback>
                        </div>
                        <div v-if="focus=='seminar'">
                            <seminar
                                class=indent
                                :language=language
                            ></seminar>
                        </div>
                        <div v-if="focus=='contact'">
                            <contact
                                class=indent
                                :language=language
                            ></contact>
                        </div>
                        <div v-if="focus=='contactApply'">
                            <contactApply class=indent></contactApply>
                        </div>
                        <div v-if="focus=='legacy'">
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
                            <hr>
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
