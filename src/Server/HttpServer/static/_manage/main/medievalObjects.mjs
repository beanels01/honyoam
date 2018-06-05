import api from                 '../../_api.mjs'
import optionList from          './optionList.mjs'
import inputForSpecificLanguage from
    './medievalObjects/inputForSpecificLanguage.mjs'
import languageSelect from      './languageSelect.mjs'
import cropImageUploader from   './cropImageUploader.mjs'
import imageUploader from       './imageUploader.mjs'
let inputForSpecificObject={
    components:{
        optionList,
        languageSelect,
        inputForSpecificLanguage,
        cropImageUploader,
        imageUploader,
    },
    created(){
        this.in()
    },
    data:()=>({
        version:0,
        cropImageUploader,
        value:0,
        selectedLanguage:0,
    }),
    methods:{
        async in(){
            let value=(await api.post({
                method:'getMedievalObject',
                id:this.id,
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
                method:'setMedievalObject',
                id:this.id,
                value:this.value,
            })
            alert('儲存完成。')
        }
    },
    props:['id','language',],
    template:`
        <div v-if=value>
            <p>
                <label>
                    <input type=checkbox v-model=value.publish>
                    發布
                </label>
            </p>
            <h1>物件小圖片</h1>
            <cropImageUploader
                v-model=value.image
            ></cropImageUploader>
            <h1>相片集</h1>
            <optionList
                class=indent
                :editOption=cropImageUploader
                v-model=value.gallery
            ></optionList>
            <div>
                <languageSelect
                    :language=language
                    v-model=selectedLanguage
                ></languageSelect>：
            </div>
            <inputForSpecificLanguage
                v-if=selectedLanguage
                v-model=value.language[selectedLanguage]
                class="indent"
            ></inputForSpecificLanguage>
            <button @click=out>儲存變更</button>
        </div>
    `,
    watch:{
        id(){
            this.in()
        },
    },
}
export default{
    components:{
        inputForSpecificObject,
    },
    created(){
        this.in()
    },
    data:()=>({
        value:null,
        selectedObject:null,
    }),
    props:['language'],
    methods:{
        async cut(i){
            await api.post({
                method:'cutMedievalObject',
                id:this.value[i].id,
            })
            alert('刪除完成。')
            await this.in()
        },
        async in(){
            this.value=(await api.post({
                method:'getMedievalList',
            })).res
        },
        async out(){
            await api.post({
                method:'addMedievalObject',
            })
            alert('新增完成。')
            await this.in()
        },
    },
    template:`
        <div>
            <template
                v-if="selectedObject==null"
            >
                <button
                    @click=out
                >新增</button>
                <div style="display:table;">
                    <div
                        v-for="(a,i) in value"
                        style="display:table-row;"
                    >
                        <div
                            style="display:table-cell;"
                        >{{a.name}}</div>
                        <div
                            style="display:table-cell;padding-left:8px;"
                        >
                            <button
                                @click="selectedObject=i"
                            >編輯</button>
                            <button
                                @dblclick="cut(i)"
                            >雙擊刪除</button>
                        </div>
                    </div>
                </div>
            </template>
            <template
                v-if="selectedObject!=null"
            >
                <div>
                    <button
                        @click="selectedObject=null"
                    >←</button>
                </div>
                <div>
                    中古屋物件 > {{value[selectedObject].name}}
                </div>
                <inputForSpecificObject
                    :id=value[selectedObject].id
                    :language=language
                ></inputForSpecificObject>
            </template>
        </div>
    `,
}
