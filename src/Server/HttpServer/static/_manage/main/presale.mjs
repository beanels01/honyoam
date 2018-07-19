import api from                 '../../_api.mjs'
import languageSelect from      './languageSelect.mjs'
import youMightLikeInput from   './youMightLikeInput.mjs'
let inputForSpecificLanguage={
    created(){
        this.checkValue()
    },
    methods:{
        checkValue(){
            if(this.value)
                return
            this.$emit('input',{})
        },
    },
    props:['value'],
    template:`
        <div>
            <h1>注意事項</h1>
            <template v-if=value>
                <textarea
                    v-model=value.precautions
                ></textarea>
            </template>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default{
    components:{
        languageSelect,
        inputForSpecificLanguage,
        youMightLikeInput,
    },
    created(){
        this.in()
    },
    data:()=>({
        version:0,
        selectedLanguage:0,
        value:0,
        list:0,
    }),
    props:['language'],
    methods:{
        async in(){
            this.list=(await api.post({
                method:'getPresaleList',
            })).res
            let value=(await api.post({
                method:'getPresale',
            })).res
            if(value.version!=this.version)
                value={
                    version:this.version,
                    language:{},
                }
            this.value=value
        },
        async out(){
            await api.post({
                method:'setPresale',
                value:this.value,
            })
            alert('儲存成功。')
        },
    },
    template:`
        <div v-if=value>
            <h1>您可能會喜歡</h1>
            <div class=indent>
                <youMightLikeInput :data=list v-model=value.youMightLike
                ></youMightLikeInput>
            </div>
            <h1>語言特定資料</h1>
            <div class=indent>
                <languageSelect
                    :language=language
                    v-model=selectedLanguage
                ></languageSelect>
                <inputForSpecificLanguage
                    v-if=selectedLanguage
                    class=indent
                    v-model=value.language[selectedLanguage]
                ></inputForSpecificLanguage>
            </div>
            <div>
                <button @click=out>儲存變更</button>
            </div>
        </div>
    `,
}
