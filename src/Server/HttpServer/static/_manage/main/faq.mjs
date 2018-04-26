import api from             '../../_api.mjs'
import editOption from      './faq/editOption.mjs'
import languageSelect from  './languageSelect.mjs'
import optionList from      './optionList.mjs'
export default{
    components:{
        languageSelect,optionList,
    },
    data:()=>({
        classes:            null,
        list:               null,
        selectedLanguage:   '',
        selectedClass:      '',
        editOption,
    }),
    props:['language'],
    methods:{
        changeClass(){
            if(!(this.selectedClass in this.list[this.selectedLanguage]))
                Vue.set(
                    this.list[this.selectedLanguage],
                    this.selectedClass,
                    []
                )
        },
        changeLanguage(){
            if(!(this.selectedLanguage in this.list))
                Vue.set(this.list,this.selectedLanguage,{})
        },
        async getClasses(){
            this.classes=(await api.post({
                method:'getFaqClasses',
            })).res
        },
        async getList(){
            this.list=(await api.post({
                method:'getFaq',
            })).res
        },
        async update(){
            await api.post({
                method:     'updateFaq',
                doc:        this.list,
            })
            alert('送出成功。')
        },
    },
    async created(){
        await Promise.all([
            this.getClasses(),
            this.getList(),
        ])
    },
    template:`
        <div>
            <div v-if=!(classes&&list)>
                載入中……
            </div>
            <div v-if=classes&&list>
                <p>
                    <languageSelect
                        :language=language
                        v-model=selectedLanguage
                        @input=changeLanguage
                    ></languageSelect>
                    <select
                        required
                        v-if=selectedLanguage
                        v-model=selectedClass
                        @change=changeClass
                    >
                        <option value='' hidden>分類</option>
                        <option :value=c v-for="c in classes">{{
                            language['zh-Hant'].faqClasses[c]
                        }}</option>
                    </select>
                </p>
                <optionList
                    v-if=selectedLanguage&&selectedClass
                    :editOption=editOption
                    v-model=list[selectedLanguage][selectedClass]
                ></optionList>
                <p>
                    <button @click=update>儲存變更</button>
                </p>
            </div>
        </div>
    `,
}
