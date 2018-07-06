import api from  '../../_api.mjs'
import languageSelect from  './languageSelect.mjs'
export default{
    components:{
        languageSelect,
    },
    computed:{
    },
    data:()=>({
        list:0,
        selectedLanguage:0,
        selectedNews:0,
    }),
    props:['language'],
    methods:{
        async cutNews(id){
            await api.post({
                method:'cutNews',
                id,
            })
            await this.inList()
        },
        async inList(){
            this.list=0
            this.list=(await api.post({
                method:'getNewsList',
                language:this.selectedLanguage,
            })).res
            this.list.sort((a,b)=>
                new Date(b.timestamp)-new Date(a.timestamp)
            )
        },
        async putNews(){
            await api.post({
                method:'putNews',
                language:this.selectedLanguage,
            })
            await this.inList()
        },
    },
    template:`
        <div>
            <languageSelect
                :language=language
                v-model=selectedLanguage
                @input="inList()"
            ></languageSelect>
            <div v-if=list>
                <button @click=putNews>新增</button>
                <table>
                    <tr v-for="a of list">
                        <td>{{
                            (new Date(a.timestamp)).toLocaleString()
                        }}</td>
                        <td>
                            <button @click="selectedNews=a._id">
                                編輯
                            </button>
                            <button @dblclick="cutNews(a._id)">
                                雙擊刪除
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `,
}
