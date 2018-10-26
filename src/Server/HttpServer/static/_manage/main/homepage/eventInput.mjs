let singleEventInput={
    created(){
        this.checkValue()
    console.log(this.data)
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
    props:['data','value'],
    template:`
        <div>
            <p>
                標題：<input v-model=value.title>
            </p>
            <p>
                日期：<input v-model=value.date>
            </p>
            <p>
                時間：<input type=date v-model=value.time>
            </p>
            <p>
                副標：<input v-model=value.subtitle>
            </p>
            <p>
                內容：<br>
                <textarea v-model=value.content></textarea>
            </p>
            <p>
                說明會：<br>
                <select v-model="value.seminar">
                    <option
                        v-for="a of data"
                        :value=a.id
                    >{{a.name}}</option>
                </select>
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
    props:['value','data'],
    template:`
        <div v-if=value>
            <h4>第一個說明會</h4>
            <singleEventInput
                :data=data
                v-model=value[0]
            ></singleEventInput>
            <h4>第二個說明會</h4>
            <singleEventInput
                :data=data
                v-model=value[1]
            ></singleEventInput>
            <h4>第三個說明會</h4>
            <singleEventInput
                :data=data
                v-model=value[2]
            ></singleEventInput>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default eventInput
