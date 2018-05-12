import api from                 '../../_api.mjs'
import optionList from          './optionList.mjs'
import patternEditOption from   './presaleObjects/patternEditOption.mjs'
import inputForSpecificLanguage from
    './presaleObjects/inputForSpecificLanguage.mjs'
import languageSelect from      './languageSelect.mjs'
import cropImageUploader from   './cropImageUploader.mjs'
import imageUploader from       './imageUploader.mjs'
let keyValueEditOption={
    created(){
        this.checkValue()
    },
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
                <input
                    placeholder=欄位
                    v-model=value.key
                >
            </p>
            <p>
                <input
                    placeholder=內容
                    v-model=value.value
                >
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
    },
    created(){
        this.in()
    },
    data:()=>({
        version:0,
        patternEditOption,
        keyValueEditOption,
        cropImageUploader,
        value:0,
        selectedLanguage:0,
    }),
    methods:{
        async in(){
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
        <div v-if=value>
            <p>
                <label>
                    <input type=checkbox v-model=value.publish>
                    發布
                </label>
            </p>
            <p>
                <label>
                    <input type=checkbox v-model=value.soldout>
                    已完售
                </label>
            </p>
            <h3>物件小圖片</h3>
            <cropImageUploader
                v-model=value.image
            ></cropImageUploader>
            <h3>橫幅圖片</h3>
            <h4>TOP</h4>
            <imageUploader
                v-model=value.banner.top
            ></imageUploader>
            <h4>建築設計</h4>
            <imageUploader
                v-model=value.banner.concept
            ></imageUploader>
            <h4>周邊環境</h4>
            <imageUploader
                v-model=value.banner.environment
            ></imageUploader>
            <h4>交通方式</h4>
            <imageUploader
                v-model=value.banner.traffic
            ></imageUploader>
            <h4>空間格局</h4>
            <imageUploader
                v-model=value.banner.pattern
            ></imageUploader>
            <h4>物件概要</h4>
            <imageUploader
                v-model=value.banner.summary
            ></imageUploader>
            <h4>影音介紹</h4>
            <imageUploader
                v-model=value.banner.video
            ></imageUploader>
            <h3>格局</h3>
            <optionList
                class=indent
                :editOption=patternEditOption
                :editOptionData=language
                v-model=value.pattern
            ></optionList>
            <h3>概要</h3>
            <optionList
                class=indent
                :editOption=keyValueEditOption
                v-model=value.summary
            ></optionList>
            <h3>畫廊</h3>
            <optionList
                class=indent
                :editOption=cropImageUploader
                v-model=value.gallery
            ></optionList>
            <div>
                <languageSelect
                    :language=language
                    v-model=selectedLanguage
                ></languageSelect>
            </div>
            <inputForSpecificLanguage
                v-if=selectedLanguage
                v-model=value.language[selectedLanguage]
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
        value:0,
        selectedObject:0,
    }),
    props:['language'],
    methods:{
        async in(){
            this.value=(await api.post({
                method:'outPresaleList',
            })).res
        },
        async out(){
            await api.post({
                method:'addPresaleObject',
            })
            alert('新增完成。')
            await this.in()
        },
    },
    template:`
        <div>
            <button
                @click=out
            >新增</button>
            <select
                v-model=selectedObject
            >
                <option
                    v-for="a in value"
                    :value=a.id
                >{{a.name}}</option>
            </select>
            <inputForSpecificObject
                v-if=selectedObject
                :id=selectedObject
                :language=language
            ></inputForSpecificObject>
        </div>
    `,
}
