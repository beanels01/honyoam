import optionList from          '../../../optionList.js'
import imageUploader from       '../../../imageUploader.js'
let
    options={
        placeholder:'內文',
        modules:{
            toolbar:[
                'link',
                'image',
                {'list':'bullet'},
                {'list':'ordered'},
            ],
        },
        formats:[
            'link',
            'image',
            'list',
        ],
    }
let contentEditOption={
    created(){
        this.checkValue()
    },
    methods:{
        checkValue(){
            if(typeof this.value=='string')
                return
            this.$emit('input','')
        },
    },
    props:['value'],
    template:`
        <input
            placeholder=標題
            :value=value
            @input="$emit('input',event.target.value)"
        >
    `,
    watch:{
        value(){
            this.checkValue()
        }
    },
}
let editOption={
    components:{
        imageUploader,
        optionList,
        quillEditor:VueQuillEditor.quillEditor,
    },
    created(){
        this.checkValue()
    },
    data:()=>({
        contentEditOption,
        options,
    }),
    methods:{
        checkValue(){
            if(this.value)
                return
            this.$emit('input',{
                speaker:        0,
                speakerPicture: 0,
                summary:        '',
                contentTitle:   '',
                content:        0,
            })
        },
    },
    props:['value'],
    template:`
        <div v-if=value>
            <select required v-model=value.speaker>
                <option value hidden>主講者</option>
                <option value=0>主講者一</option>
                <option value=1>主講者二</option>
                <option value=2>主講者三</option>
            </select>
            <imageUploader v-model=value.speakerPicture></imageUploader>
            <input placeholder=簡介 v-model=value.summary>
            <input placeholder=主講內容標題 v-model=value.contentTitle>
            <optionList
                :editOption=contentEditOption
                v-model=value.content
            ></optionList>
            <quillEditor
                :options=options
                v-model=value.additionalContent
            ></quillEditor>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        }
    },
}
export default editOption
