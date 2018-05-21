import optionList from          '../optionList.mjs'
import cropImageUploader from   '../cropImageUploader.mjs'
import block0 from              './inputForSpecificLanguage/block0.mjs'
import block1 from              './inputForSpecificLanguage/block1.mjs'
import investJapan from         './inputForSpecificLanguage/investJapan.mjs'
import inputOption from         './inputForSpecificLanguage/inputOption.mjs'
import speakersInput from       './inputForSpecificLanguage/speakersInput.mjs'
import flowInput from           './inputForSpecificLanguage/flowInput.mjs'
import quillImageHandler from   '../quillImageHandler.mjs'
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
            <p>
                <label>
                    <input type=checkbox v-model=value.publish>
                    發布
                </label>
            </p>
            <p>
                <label>
                    <input type=checkbox v-model=value.main>
                    主要
                </label>
            </p>
            <h1>人物</h1>
            <speakersInput
                class=indent
                v-model=value.speakers
            ></speakersInput>
            <h1>第一塊</h1>
            <block0
                class=indent
                v-model=value.block0
            ></block0>
            <h1>第二塊</h1>
            <block1
                class=indent
                v-model=value.block1
            ></block1>
            <h1>主講者簡介</h1>
            <div class=indent>
                <textarea
                    v-model=value.presidentsProfile
                ></textarea>
            </div>
            <h1>精選預售房</h1>
            <presale
                class=indent
                v-model=value.presale
            ></presale>
            <h1>活動流程</h1>
            <flowInput
                class=indent
                v-model=value.flow
            ></flowInput>
            <h1>活動花絮</h1>
            <div class=indent>
                <input v-model=value.highlights.date>
                <optionList
                    :editOption=cropImageUploader
                    v-model=value.highlights.images
                ></optionList>
            </div>
            <h1>投資日本</h1>
            <investJapan
                class=indent
                v-model=value.investJapan
            ></investJapan>
            <h1>立即報名 - 議題（最多六個）</h1>
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
