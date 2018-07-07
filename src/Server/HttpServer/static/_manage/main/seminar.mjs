import api from                         '../../_api.mjs'
import languageSelect from              './languageSelect.mjs'
import inputForSpecificLanguage from
    './seminar/inputForSpecificLanguage.mjs'
let inputForSeminar={
    components:{
        inputForSpecificLanguage,
    },
    computed:{
        href(){
            return`${this.seminar.language}/seminar/${this.id}`
        },
    },
    created(){
        this.inSeminar()
    },
    data:()=>({
        seminar:            0,
    }),
    methods:{
        async inSeminar(){
            this.seminar=0
            this.seminar=(await api.post({
                method:'getSeminar',
                id:this.id,
            })).res
        },
        async outSeminar(){
            if(!this.seminar.block1.speakers.every(b=>
                b.speakerPicture
            ))
                return alert('操作失敗，原因：有項目沒有圖片。')
            await api.post({
                method:'setSeminar',
                id:this.id,
                doc:await toServer(this.seminar),
            })
            alert('更新成功。')
            async function toServer(v){
                for(let i in v)
                    if(v[i] instanceof Promise)
                        v[i]=await v[i]
                return v
            }
        },
        preview(){
            api.formPost({
                method:'preview',
                target:'seminar',
                language:this.language,
                patch:JSON.stringify(this.seminar),
                id:this.id,
            })
        },
    },
    props:['id','language'],
    template:`
        <div v-if=seminar>
            <a :href=href>連結</a>
            <inputForSpecificLanguage
                v-model=seminar
            ></inputForSpecificLanguage>
            <button @click=preview>預覽</button>
            <button @click=outSeminar>儲存變更</button>
        </div>
    `,
    watch:{
        id(){
            this.inSeminar()
        },
    },
}
export default{
    components:{
        languageSelect,
        inputForSeminar,
    },
    created(){
        this.updateSeminars()
    },
    data:()=>({
        seminars:           0,
        selectedLanguage:   0,
        selectedSeminar:    0,
    }),
    methods:{
        async addSeminar(){
            let id=(await api.post({
                method:'putSeminar',
                language:this.selectedLanguage,
            })).res
            await this.updateSeminars()
        },
        async cutSeminar(id){
            await api.post({
                method:'cutSeminar',
                id,
            })
            await this.updateSeminars()
        },
        async updateSeminars(){
            this.seminars=(await api.post({
                method:'getSeminars'
            })).res
        },
        seminarsByLanguage(l){
            return this.seminars.filter(a=>a.language==l)
        },
    },
    props:['language'],
    template:`
        <div v-if=seminars>
            <languageSelect
                v-if=!selectedLanguage
                :language=language
                v-model=selectedLanguage
            ></languageSelect>
            <template v-if="selectedLanguage&&!selectedSeminar">
                <div style="margin:15px 0;">
                    <button @click="selectedLanguage=0">←</button>
                    {{
                        language['zh-Hant'].language[selectedLanguage]
                    }}
                </div>
                <button @click=addSeminar>新增</button>
                <div style="display:table">
                    <div
                        v-for="(s,i) of seminarsByLanguage(selectedLanguage)"
                        style="display:table-row"
                    >
                        <div style="display:table-cell">
                            {{s.name}}
                        </div>
                        <div style="display:table-cell;padding-top:15px;padding-left:10px">
                            <button @click="selectedSeminar=s">編輯</button>
                            <button @dblclick="cutSeminar(s.id)">雙擊刪除</button>
                        </div>
                    </div>
                </div>
            </template>
            <template
                v-if="selectedSeminar"
            >
                <div style="margin:15px 0;">
                    <button @click="selectedSeminar=null">←</button>
                    {{
                        language['zh-Hant'].language[selectedLanguage]
                    }} → {{
                        selectedSeminar.name
                    }}
                </div>
                <inputForSeminar
                    :language=selectedLanguage
                    :id=selectedSeminar.id
                ></inputForSeminar>
            </template>
        </div>
    `,
}
