import api from                 '../../_api.mjs'
import languageSelect from      './languageSelect.mjs'
import quillImageHandler from  './quillImageHandler.mjs'
let
    options={
        placeholder:'內文',
        modules:{
            toolbar:{
                container:[
                    'link',
                    'image',
                ],
                handlers:{
                    image:quillImageHandler
                },
            }
        },
        formats:[
            'link',
            'image',
        ],
    }
let newsInput={
    components:{
        quillEditor:VueQuillEditor.quillEditor,
    },
    created(){
        this.getNews()
    },
    props:['language','selectedLanguage','id'],
    data:()=>({
        data:0,
        options,
    }),
    methods:{
        async getNews(){
            this.data=0
            this.data=(await api.post({
                method:'getNews',
                id:this.id,
            })).res
        },
        async setNews(){
            await api.post({
                method:'setNews',
                id:this.id,
                data:this.data,
            })
            alert('儲存完畢。')
        },
    },
    template:`
        <div v-if=data>
            <div>
                <button @click="$emit('back')">←</button>
                {{language['zh-Hant'].language[selectedLanguage]}} / 
                {{(new Date(data.timestamp)).toLocaleString()}}
            </div>
            <div>
                <label>
                    <input type=checkbox v-model=data.publish> 發布
                </label>
            </div>
            <div>
                類型：<select v-model=data.type>
                    <option value=normal>一般公告</option>
                    <option value=enews>E-News</option>
                    <option value=president>社長專欄</option>
                    <option value=success>成功案例</option>
                </select>
            </div>
            <div>
                標題：<input v-model=data.title>
            </div>
            <div>
                內文：<br>
                <quillEditor
                    :options=options
                    v-model=data.content
                ></quillEditor>
            </div>
            <div>
                <button @click=setNews>儲存變更</button>
            </div>
        </div>
    `,
    watch:{
        id(){
            this.getNews()
        },
    },
}
export default{
    components:{
        languageSelect,
        newsInput,
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
            <template v-if=!selectedNews>
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
            </template>
            <newsInput
                v-if=selectedNews
                :language=language
                :selectedLanguage=selectedLanguage
                :id=selectedNews
                v-on:back="selectedNews=0"
            ></newsInput>
        </div>
    `,
}