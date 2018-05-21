import optionList from          '../../optionList.mjs'
import speakerEditOption from   './speakerEditOption.mjs'
let speakersInput={
    components:{optionList},
    created(){
        this.checkValue()
    },
    data:()=>({
        speakerEditOption,
    }),
    methods:{
        checkValue(){
            if(!this.value)
                this.$emit('input',[
                    {
                        name:'林彥宏',
                        unit:'本葉國際資產管理株式會社',
                        jobTitle:'社長',
                    },
                    {
                        name:'藤本裕二',
                        unit:'本葉國際資產管理株式會社',
                        jobTitle:'營業部長',
                    },
                ])
        },
    },
    props:['value'],
    template:`
        <optionList
            v-if=value
            :editOption=speakerEditOption
            v-model=value
        ></optionList>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default speakersInput
