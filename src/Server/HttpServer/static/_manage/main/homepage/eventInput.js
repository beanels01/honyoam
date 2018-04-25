let singleEventInput={
    created(){
        this.checkValue()
    },
    methods:{
        checkValue(){
            if(!this.value)
                this.$emit('input',{
                    title:      '',
                    date:       '',
                    time:       '',
                    subtitle:   '',
                    content:    '',
                })
        },
    },
    props:['value'],
    template:`
        <div>
            <p>
                標題：<input v-model=value.title>
            </p>
            <p>
                日期：<input v-model=value.date>
            </p>
            <p>
                時間：<input v-model=value.time>
            </p>
            <p>
                副標：<input v-model=value.subtitle>
            </p>
            <p>
                內容：<br>
                <textarea v-model=value.content></textarea>
            </p>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
let eventInput={
    components:{singleEventInput},
    created(){
        this.checkValue()
    },
    methods:{
        checkValue(){
            if(!this.value)
                this.$emit('input',[0,0,0])
        },
    },
    props:['value'],
    template:`
        <div v-if=value>
            <h4>第一個說明會</h4>
            <singleEventInput v-model=value[0]></singleEventInput>
            <h4>第二個說明會</h4>
            <singleEventInput v-model=value[1]></singleEventInput>
            <h4>第三個說明會</h4>
            <singleEventInput v-model=value[2]></singleEventInput>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default eventInput
