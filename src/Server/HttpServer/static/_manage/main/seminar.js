import api from                         '../../_api.js'
import languageSelect from              './languageSelect.js'
import inputForSpecificLanguage from
    './contact/inputForSpecificLanguage.js'
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
                method:'updateSeminar',
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
        img:0,
    }),
    methods:{
        async addSeminar(){
            let id=(await api.post({
                method:'addSeminar',
                language:this.selectedLanguage,
            })).res
            await this.updateSeminars()
            this.selectedSeminar=id
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
            <cropImageUploader
                v-model=img
            ></cropImageUploader>
            <languageSelect
                :language=language
                @input="selectedSeminar=0"
                v-model=selectedLanguage
            ></languageSelect>
            <template v-if=selectedLanguage>
                <button @click=addSeminar>新增</button>
                <select
                    v-model=selectedSeminar
                >
                    <option
                        v-for="s of seminarsByLanguage(selectedLanguage)"
                        :value=s.id
                    >{{s.name}}</option>
                </select>
                <inputForSeminar
                    v-if=selectedSeminar
                    :language=selectedLanguage
                    :id=selectedSeminar
                ></inputForSeminar>
            </template>
        </div>
    `,
}
