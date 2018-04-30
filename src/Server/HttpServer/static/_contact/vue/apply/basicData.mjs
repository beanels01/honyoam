let personData={
    created(){
        this.checkValue()
    },
    methods:{
        checkValue(){
            if(this.value)
                return
            this.$emit('input',{
                name:       '',
                gender:     '',
                email:      '',
                phone:      '',
            })
        },
    },
    props:['value'],
    template:`
        <div v-if=value class=a>
            <div class=p>
                <input
                    class=input
                    placeholder=姓名
                    v-model=value.name
                >
            </div>
            <div></div>
            <div class=p>
                <select
                    class=input
                    required
                    v-model=value.gender
                >
                    <option value hidden>稱謂</option>
                    <option value=male>先生</option>
                    <option value=female>小姐</option>
                </select>
            </div>
            <div></div>
            <div class=r>
                <input
                    class=input
                    placeholder=Email
                    v-model=value.email
                >
            </div>
            <div></div>
            <div class=r>
                <input
                    class=input
                    placeholder=電話
                    v-model=value.phone
                >
            </div>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
let basicData={
    components:{personData},
    created(){
        this.checkValue()
    },
    methods:{
        checkValue(){
            if(this.value)
                return
            this.$emit('input',{
                numberOfPeople:'',
                people:[0,0,0,0,0],
            })
        },
    },
    props:['value'],
    template:`
        <div v-if=value class=q>
            <select
                class=input
                required
                v-model=value.numberOfPeople
            >
                <option value hidden>人數</option>
                <option value=1>1人</option>
                <option value=2>2人</option>
                <option value=3>3人</option>
                <option value=4>4人</option>
                <option value=5>5人</option>
            </select>
            <personData
                v-if=value.numberOfPeople
                v-for="(a,i) in value.people.slice(0,+value.numberOfPeople)"
                v-model=value.people[i]
            ></personData>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default basicData
