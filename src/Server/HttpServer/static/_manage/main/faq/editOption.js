let
    formats=[
        'link',
        'image',
    ],
    optionsForAnswer={
        placeholder:'答案（文章）',
        modules:{
            toolbar:formats,
        },
        formats,
    }
let editOption={
    components:{
        quillEditor:VueQuillEditor.quillEditor,
    },
    created(){
        this.checkValue()
    },
    data:()=>({
        optionsForAnswer,
    }),
    methods:{
        checkValue(){
            if(!this.value)
                this.$emit('input',{
                    question:   '',
                    answer:     '',
                })
        }
    },
    watch:{
        value(){
            this.checkValue()
        },
    },
    props:['value'],
    template:`
        <div v-if=value>
            <textarea
                style=width:480px
                placeholder=問題（標題）
                v-model=value.question
            ></textarea>
            <br>
            <quillEditor
                style=width:480px
                :options=optionsForAnswer
                v-model=value.answer
            ></quillEditor>
        </div>
    `,
}
export default editOption
