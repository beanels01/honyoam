import optionList from      './optionList.mjs'
let youMightLikeElementInput={
    computed:{
        list(){
            let x=this.data.data
            if(this.data.type=='medieval')
                x=x.filter(a=>
                    ~a.secondId.indexOf(this.prefix)
                )
            return x
        },
    },
    data:()=>({
        prefix:''
    }),
    props:['data','value'],
    template:`
        <div>
            <div v-if="data.type=='medieval'">
                <input placeholder=編號 v-model=prefix>
            </div>
            <select
                :value=value
                @input="e=>$emit('input',e.target.value)"
            >
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
