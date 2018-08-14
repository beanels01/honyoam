import api from                 '../../_api.mjs'
import languageSelect from      './languageSelect.mjs'
import quillImageHandler from       './quillImageHandler.mjs'
import plainCropImageUploader from  './plainCropImageUploader.mjs'
let
    options={
        placeholder:'內文',
        modules:{
            toolbar:{
                container:[
                    'link',
                    'image',
                    {color:[]},
                    {header:1},
                    {header:2},
                ],
                handlers:{
                    image:quillImageHandler
                },
            }
        },
        formats:[
            'link',
            'image',
            'color',
            'header',
        ],
    }
let newsInput={
    components:{
        quillEditor:VueQuillEditor.quillEditor,
        plainCropImageUploader,
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
        preview(){
            api.formPost({
                method:'preview',
                target:'news',
                language:this.selectedLanguage,
                id:this.id,
                patch:JSON.stringify(this.data),
            })
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
                    <option value=enews>E-news</option>
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
            <div v-if="data.type=='success'">
                首頁圖：<br>
                <plainCropImageUploader
                    v-model=data.image
                ></plainCropImageUploader>
            </div>
            <div>
                <button @click=preview>預覽</button>
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
                            <td>{{
                                {
                                    normal:'一般公告',
                                    enews:'E-news',
                                    president:'社長專欄',
                                    success:'成功案例',
                                }[a.type]
                            }}</td>
                            <td>{{
                                a.title
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
                v-on:back="selectedNews=0;inList()"
            ></newsInput>
        </div>
    `,
}
