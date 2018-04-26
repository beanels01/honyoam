let inputOption={
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
        <input v-model=value @input="e=>$emit('input',e.target.value)">
    `,
    watch:{
        value(){
            this.checkValue()
        }
    },
}
export default inputOption
