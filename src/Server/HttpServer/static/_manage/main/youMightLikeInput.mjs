import optionList from      './optionList.mjs'
let youMightLikeElementInput={
    computed:{
        list(){
            let x=this.data.data
            if(this.data.type=='medieval')
                x=x.filter(a=>
                    ~(a.secondId||'').indexOf(this.prefix)
                ).sort((a,b)=>{
                    let
                        aHny=a.secondId.substring(3)!='HNY',
                        bHny=a.secondId.substring(3)!='HNY'
                    return aHny-bHny||
                        a.secondId.localeCompare(b.secondId)||
                        new Date(b.date)-new Date(a.date)
                })
            return x
        },
    },
    data:()=>({
        prefix:''
    }),
    methods:{
        prefixInput(){
            this.$emit('input',this.list.length==1?this.list[0].id:'')
        },
    },
    props:['data','value'],
    template:`
        <div>
            <div v-if="data.type=='medieval'">
                <input
                    placeholder=編號
                    v-model=prefix
                    @input="prefixInput"
                >
            </div>
            <select
                :value=value
                @input="e=>$emit('input',e.target.value)"
                required
            >
                <option value hidden disabled>物件</option>
                <option v-for="a of list" :value=a.id>
                    <template v-if="data.type=='medieval'">
                        {{a.secondId}}
                    </template>
                    {{a.name}}
                </option>
            </select>
        </div>
    `
}
let youMightLikeInput={
    components:{
        optionList,
    },
    data:()=>({
        youMightLikeElementInput,
    }),
    props:['data','value'],
    template:`
        <optionList
            v-model=value
            :editOption=youMightLikeElementInput
            :editOptionData=data
            @input="v=>$emit('input',v)"
        ></optionList>
    `
}
export default youMightLikeInput
