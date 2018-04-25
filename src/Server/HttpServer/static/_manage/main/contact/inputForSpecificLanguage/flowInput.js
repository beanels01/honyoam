import optionList from          '../../optionList.js'
import flowEditOption from      './flowEditOption.js'
let flowInput={
    components:{optionList},
    created(){
        this.checkValue()
    },
    data:()=>({
        flowEditOption,
    }),
    methods:{
        checkValue(){
            if(!this.value)
                this.$emit('input',[
                    {
                        time:'13:30 - 14:00',
                        content:'來賓報導',
                        speaker:0,
                    },
                    {
                        time:'14:00 - 14:10',
                        content:'開場引言',
                        speaker:0,
                    },
                    {
                        time:'14:10 - 14:30',
                        content:'日本投資稅務策略大公開',
                        speaker:2,
                    },
                    {
                        time:'14:30 - 15:25',
                        content:'市場現況及未來投資亮點',
                        speaker:1,
                    },
                    {
                        time:'15:25 - 16:00',
                        content:'台日不動產達人對談',
                        speaker:12,
                    },
                    {
                        time:'15:25 - 16:00',
                        content:'QA問答',
                        speaker:0,
                    },
                ])
        },
    },
    props:['value'],
    template:`
        <optionList
            v-if=value
            :editOption=flowEditOption
            v-model=value
        ></optionList>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default flowInput
