let housePattern={
    computed:{
        language(){
            return this.data.language
        }
    },
    created(){
        this.checkValue()
    },
    methods:{
        checkValue(){
            if(!this.value)
                this.$emit('input',{
                    '1R':0,
                    '1K':0,
                    '1DK':0,
                    '1LDK':0,
                    '2LDK':0,
                    '3LDK':0,
                    '>3LDK':0,
                })
        },
    },
    props:['data','value'],
    template:`
        <div class=block v-if=value>
            <div class=a>
                {{language.房屋格局}}<br>
                ＊{{language.可複選}}
            </div>
            <label>
                <input type=checkbox v-model="value['1R']">
                1R
            </label>
            <label>
                <input type=checkbox v-model="value['1K']">
                1K
            </label>
            <label>
                <input type=checkbox v-model="value['1DK']">
                1DK
            </label>
            <label>
                <input type=checkbox v-model="value['1LDK']">
                1LDK
            </label>
            <label>
                <input type=checkbox v-model="value['2LDK']">
                2LDK
            </label>
            <label>
                <input type=checkbox v-model="value['3LDK']">
                3LDK
            </label>
            <label>
                <input type=checkbox v-model="value['>3LDK']">
                3LDK 以上
            </label>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default housePattern
