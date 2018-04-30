import api from         '../../_api.mjs'
import recaptcha from   '../../_recaptcha.mjs'
import basicData from   './apply/basicData.mjs'
import topics from      './apply/topics.mjs'
let apply={
    components:{basicData,topics,recaptcha},
    data:()=>({
        recaptcha:      '',
        basicData:      null,
        interested:     [0,0,0,0,0,0],
        success:        0,
        errorAlert:     0,
    }),
    methods:{
        async submit(){
            if(!(
                this.basicData.numberOfPeople&&
                this.basicData.people.slice(
                    0,this.basicData.numberOfPeople
                ).every(a=>
                    a.name&&
                    a.gender&&
                    a.email&&
                    a.phone
                )
            ))
                return this.errorAlert=this.language.error0
            if(!this.recaptcha)
                return this.errorAlert=this.language.error1
            this.errorAlert=''
            await api.post({
                method:         'addApply',
                recaptcha:      this.recaptcha,
                people:this.basicData.people.slice(
                    0,this.basicData.numberOfPeople
                ),
                interested:     this.interested.map((a,i)=>a&&this.topics[i]).filter(a=>a).join('\n'),
                title:          this.content.title,
                currentLanguage:this.currentLanguage,
            })
            this.success=1
        },
    },
    props:[
        'currentLanguage',
        'language',
        'topics',
        'content',
    ],
    template:`
        <div class=j><div>
            <a id=form></a>
            <div class=n>{{language.title}}·APPLY</div>
            <div class=o>{{language.subtitle}} | {{content.title}}</div>
            <template v-if=!success>
                <div class=p>
                    {{language.note0}}
                </div>
                <basicData
                    v-model=basicData
                ></basicData>
                <div class=r>
                    {{language.note1}}
                </div>
                <topics
                    :topics=topics
                    :interested=interested
                ></topics>
                <div
                    v-if=errorAlert
                    class="alert error"
                >
                    {{errorAlert}}
                </div>
                <div class=t>
                    <div>
                        <div class=n>
                            <recaptcha v-model=recaptcha></recaptcha>
                        </div>
                        <div class=o>
                            <button @click=submit>送出</button>
                        </div>
                    </div>
                </div>
            </template>
            <div
                v-if=success
                class="alert success"
            >
                送出成功。
            </div>
        </div></div>
    `
}
export default apply
