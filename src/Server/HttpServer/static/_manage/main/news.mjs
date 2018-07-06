import api from  '../../_api.mjs'
import languageSelect from  './languageSelect.mjs'
/*
let startYear=110
        thisYear(){
            return(new Date).getYear()
        },
        yearList(){
            return[...Array(this.thisYear-startYear+1)].map((a,i)=>
                startYear+i
                )
        },
*/
export default{
    components:{
        languageSelect,
    },
    computed:{
    },
    data:()=>({
        selectedLanguage:0,
        list:0,
    }),
    props:['language'],
    methods:{
        async inList(){
            this.list=0
            this.list=(await api.post({
                method:'getNewsList',
                language:this.selectedLanguage,
            })).res
            console.log(this.list)
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
                        <td>{{a.timestamp}}</td>
                        <td>
                            <button>編輯</button>
                            <button>雙擊刪除</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `,
}
