import imageUploader from       '../../imageUploader.mjs'
let block={
    components:{imageUploader},
    props:['value'],
    template:`
        <div>
            <p>
                <input v-model=value.title>
            </p>
            <p>
                <input v-model=value.subtitle>
            </p>
            <p>
                <imageUploader v-model=value.image></imageUploader>
            </p>
        </div>
    `,
}
let investJapan={
    components:{block},
    created(){
        this.checkValue()
    },
    methods:{
        checkValue(){
            if(!this.value)
                this.$emit('input',[
                    {
                        title:'高投報資產',
                        subtitle:'東京都的房地產，不但耐久性、安全性可靠，租屋市場需求更大，長期投資可獲得高投報之租賃收入。',
                        image:0,
                    },
                    {
                        title:'日幣貶值 投資時機爆發',
                        subtitle:'目前日幣匯率走貶，以海外資產配置的角度來看，能以較之前更便宜的價格購入日本房地產，正是投資日本房地產的大好時機。',
                        image:0,
                    },
                    {
                        title:'奧運加持 經濟成長',
                        subtitle:'在2020年東京奧運加持下，近5年赴日觀光人數從數百萬至2016年正式突破2400萬人，並持續穩定大幅成長，成為日本經濟成場的重要動力之一',
                        image:0,
                    },
                ])
        },
    },
    props:['value'],
    template:`
        <div
            v-if=value
        >
            <h4>第一塊</h4>
            <block v-model=value[0]></block>
            <h4>第二塊</h4>
            <block v-model=value[1]></block>
            <h4>第三塊</h4>
            <block v-model=value[2]></block>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    }
}
export default investJapan
