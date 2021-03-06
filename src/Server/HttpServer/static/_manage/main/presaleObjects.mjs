import api from                 '../../_api.mjs'
import optionList from          './optionList.mjs'
import patternEditOption from   './presaleObjects/patternEditOption.mjs'
import inputForSpecificLanguage from
    './presaleObjects/inputForSpecificLanguage.mjs'
import languageSelect from      './languageSelect.mjs'
import cropImageUploader from   './cropImageUploader.mjs'
import imageUploader from       './imageUploader.mjs'
import galleryCropImageUploader from    './galleryCropImageUploader.mjs'
import plainCropImageUploader from      './plainCropImageUploader.mjs'
import quillImageHandler from   './quillImageHandler.mjs'
let
    options={
        placeholder:'內文',
        modules:{
            toolbar:{
                container:[
                    'link',
                    'image',
                    {header:1},
                ],
                handlers:{
                    image:quillImageHandler
                },
            }
        },
        formats:[
            'link',
            'image',
            'header',
        ],
    }
let keyValueEditOption={
    components:{
        quillEditor:VueQuillEditor.quillEditor,
    },
    created(){
        this.checkValue()
    },
    data:()=>({
        options,
    }),
    methods:{
        checkValue(){
            if(this.value)
                return
            this.$emit('input',{
                key:'',
                value:'',
            })
        },
    },
    props:['value'],
    template:`
        <div v-if=value>
            <p>
                欄位：
                <input
                    v-model=value.key
                >
            </p>
            <p>
                內容：<br>
                <quillEditor
                    :options=options
                    v-model=value.value
                ></quillEditor>
            </p>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
let inputForSpecificObject={
    components:{
        optionList,
        languageSelect,
        inputForSpecificLanguage,
        cropImageUploader,
        imageUploader,
        plainCropImageUploader,
    },
    created(){
        this.in()
    },
    data:()=>({
        place:0,
        version:0,
        patternEditOption,
        keyValueEditOption,
        galleryCropImageUploader,
        value:0,
        selectedLanguage:0,
    }),
    methods:{
        async in(){
            this.place=(await api.post({
                method:'getPlace',
            })).res
            let value=(await api.post({
                method:'getPresaleObject',
                id:this.id,
            })).res
            if(value.version!=this.version)
                value={
                    version:this.version,
                    language:{},
                }
            if(!value.banner)
                value.banner={}
            if(!value.top)
                value.top={}
            this.value=value
        },
        async out(){
            await api.post({
                method:'setPresaleObject',
                id:this.id,
                value:this.value,
            })
            alert('儲存完成。')
        }
    },
    props:['id','language',],
    template:`
        <div v-if=place&&value>
            <p>
                <label>
                    <input type=checkbox v-model=value.publish>
                    發布
                </label>
            </p>
            <p>
                日期：<input type=date v-model=value.date>
            </p>
            <p>
                <label>
                    <input type=checkbox v-model=value.soldout>
                    已完售
                </label>
            </p>
            <p>
                地區：<select v-model=value.place0>
                    <option
                        v-for="a of place.place0"
                        :value=a
                    >{{a}}</option>
                </select>
            </p>
            <p>
                區域：<select v-model=value.place1>
                    <option
                        v-for="a of place.place1.medieval[value.place0=='東京都'?0:1]"
                        :value=a
                    >{{a}}</option>
                </select>
            </p>
            <h1>物件小圖片</h1>
            <cropImageUploader
                v-model=value.image
            ></cropImageUploader>
            <h1>橫幅圖片</h1>
            <div class=indent>
                <h2>TOP</h2>
                <plainCropImageUploader
                    v-model=value.banner.top
                ></plainCropImageUploader>
                <h2>建築設計</h2>
                <plainCropImageUploader
                    v-model=value.banner.concept
                ></plainCropImageUploader>
                <h2>周邊環境</h2>
                <plainCropImageUploader
                    v-model=value.banner.environment
                ></plainCropImageUploader>
                <h2>交通方式</h2>
                <plainCropImageUploader
                    v-model=value.banner.traffic
                ></plainCropImageUploader>
                <h2>空間格局</h2>
                <plainCropImageUploader
                    v-model=value.banner.pattern
                ></plainCropImageUploader>
                <h2>物件概要</h2>
                <plainCropImageUploader
                    v-model=value.banner.summary
                ></plainCropImageUploader>
                <h2>影音介紹</h2>
                <plainCropImageUploader
                    v-model=value.banner.video
                ></plainCropImageUploader>
            </div>
            <h1>TOP</h1>
            <div class=indent>
                <h2>建築設計</h2>
                <imageUploader
                    v-model=value.top.concept
                ></imageUploader>
                <h2>周邊環境</h2>
                <imageUploader
                    v-model=value.top.environment
                ></imageUploader>
                <h2>交通方式</h2>
                <imageUploader
                    v-model=value.top.traffic
                ></imageUploader>
            </div>
            <h1>格局</h1>
            <p>
                至少一個格局。格局必須有格局圖。
            <optionList
                class=indent
                :editOption=patternEditOption
                :editOptionData=language
                v-model=value.pattern
            ></optionList>
            <h1>概要</h1>
            <div class=indent>
                <label>
                    <input type=checkbox v-model=value.showSummary>
                    顯示以下項目
                </label>
                <optionList
                    v-if=value.showSummary
                    :editOption=keyValueEditOption
                    v-model=value.summary
                ></optionList>
            </div>
            <h1>建案相片集</h1>
            <div class=indent>
                <label>
                    <input type=checkbox v-model=value.showAlbum>
                    顯示以下項目
                </label>
                <optionList
                    v-if=value.showAlbum
                    :editOption=galleryCropImageUploader
                    v-model=value.gallery
                ></optionList>
            </div>
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
                method:'cutPresaleObject',
                id:this.value[i].id,
            })
            alert('刪除完成。')
            await this.in()
        },
        async in(){
            this.value=(await api.post({
                method:'getPresaleList',
            })).res.sort((a,b)=>
                new Date(b.date)-new Date(a.date)
            )
        },
        async out(){
            await api.post({
                method:'putPresaleObject',
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
                    新成屋物件 > {{value[selectedObject].name}}
                </div>
                <inputForSpecificObject
                    :id=value[selectedObject].id
                    :language=language
                ></inputForSpecificObject>
            </template>
        </div>
    `,
}
