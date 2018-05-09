/*
import editOption from      './faq/editOption.mjs'
import optionList from      './optionList.mjs'
*/
import api from             '../../_api.mjs'
import languageSelect from  './languageSelect.mjs'
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
            <h3>注意事項</h3>
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
    },
    created(){
        this.in()
    },
    data:()=>({
        selectedLanguage:0,
        value:0,
    }),
    props:['language'],
    methods:{
        async in(){
            this.value=(await api.post({
                method:'outPresale',
            })).res
        },
        async out(){
            console.log(this.value)
            await api.post({
                method:'inPresale',
                value:this.value,
            })
            alert('儲存成功。')
        },
    },
    template:`
        <div>
            <languageSelect
                :language=language
                v-model=selectedLanguage
            ></languageSelect>
            <inputForSpecificLanguage
                v-if=selectedLanguage
                class=indent
                v-model=value[selectedLanguage]
            ></inputForSpecificLanguage>
            <div>
                <button @click=out>儲存變更</button>
            </div>
        </div>
    `,
}
