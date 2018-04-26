import optionList from          '../optionList.mjs'
import cropImageUploader from   '../cropImageUploader.mjs'
import block0 from './inputForSpecificLanguage/block0.mjs'
import block1 from './inputForSpecificLanguage/block1.mjs'
import investJapan from './inputForSpecificLanguage/investJapan.mjs'
import inputOption from './inputForSpecificLanguage/inputOption.mjs'
import speakersInput from './inputForSpecificLanguage/speakersInput.mjs'
import flowInput from './inputForSpecificLanguage/flowInput.mjs'
let
    options={
        placeholder:'內文',
        modules:{
            toolbar:[
                'link',
                'image',
                {header:1},
            ],
        },
        formats:[
            'link',
            'image',
            'header',
        ],
    }
let presale={
    computed:{
        upToDate(){
            return this.value&&this.value.version==0
        },
    },
    created(){
        this.checkValue()
    },
    components:{
        quillEditor:VueQuillEditor.quillEditor,
    },
    data:()=>({
        options,
    }),
    template:`
        <div v-if=upToDate>
            <quillEditor
                :options=options
                v-model=value.content
            ></quillEditor>
        </div>
    `,
    methods:{
        checkValue(){
            if(this.upToDate)
                return
            this.$emit('input',{
                version:0,
                content:'',
            })
        },
    },
    props:['value'],
    watch:{
        value(){
            this.checkValue()
        },
    },
}
let inputForSpecificLanguage={
    computed:{
        upToDate(){
            return this.value&&this.value.version==this.version
        },
    },
    components:{
        optionList,
        block0,
        block1,
        investJapan,
        speakersInput,
        flowInput,
        presale,
    },
    created(){
        this.checkValue()
    },
    data:()=>({
        version:10,
        inputOption,
        cropImageUploader,
    }),
    props:['value'],
    methods:{
        checkValue(){
            if(this.upToDate)
                return
            this.$emit('input',{
                version:        this.version,
                highlights:{
                    date:'2017-08-26',
                    images:[
                    ],
                },
                topics:[
                    '新成屋資訊',
                    '中古屋資訊',
                    '大型投資物件資訊',
                    '買賣流程資訊',
                    '稅金資訊',
                    '租屋資訊',
                ],
            })
        },
    },
    template:`
        <div v-if=upToDate>
            <h3>人物</h3>
            <speakersInput
                class=indent
                v-model=value.speakers
            ></speakersInput>
            <h3>第一塊</h3>
            <block0
                class=indent
                v-model=value.block0
            ></block0>
            <h3>第二塊</h3>
            <block1
                class=indent
                v-model=value.block1
            ></block1>
            <h3>精選預售房</h3>
            <presale
                class=indent
                v-model=value.presale
            ></presale>
            <h3>活動流程</h3>
            <flowInput
                class=indent
                v-model=value.flow
            ></flowInput>
            <h3>活動花絮</h3>
            <div class=indent>
                <input v-model=value.highlights.date>
                <optionList
                    :editOption=cropImageUploader
                    v-model=value.highlights.images
                ></optionList>
            </div>
            <h3>投資日本</h3>
            <investJapan
                class=indent
                v-model=value.investJapan
            ></investJapan>
            <h3>立即報名 - 議題（最多六個）</h3>
            <div class=indent>
                <optionList
                    :editOption=inputOption
                    v-model=value.topics
                ></optionList>
            </div>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default inputForSpecificLanguage
