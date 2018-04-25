let speakerEditOption={
    created(){
        this.checkValue()
    },
    methods:{
        checkValue(){
            if(this.value)
                return
            this.$emit('input',{
                name:       '',
                unit:       '',
                jobTitle:   '',
            })
        },
    },
    props:['value'],
    template:`
        <div v-if=value>
            <input placeholder=姓名 v-model=value.name>
            <input placeholder=單位 v-model=value.unit>
            <input placeholder=職稱 v-model=value.jobTitle>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        }
    },
}
export default speakerEditOption
