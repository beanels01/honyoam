let editOption={
    created(){
        this.checkValue()
    },
    methods:{
        checkValue(){
            if(this.value)
                return
            this.$emit('input',{
                time:       '',
                content:    '',
                speaker:    '',
            })
        },
    },
    props:['value'],
    template:`
        <div v-if=value>
            <input placeholder=時間 v-model=value.time>
            <input placeholder=內容 v-model=value.content>
            <br>
            主講者：<select
                required
                :value=value.speaker
                @input="value.speaker=+$event.target.value"
            >
                <option value=0>無</option>
                <option value=1>主講者一</option>
                <option value=2>主講者二</option>
                <option value=3>主講者三</option>
                <option value=12>主講者一 & 主講者二</option>
                <option value=13>主講者一 & 主講者三</option>
                <option value=23>主講者二 & 主講者三</option>
            </select>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        }
    },
}
export default editOption
