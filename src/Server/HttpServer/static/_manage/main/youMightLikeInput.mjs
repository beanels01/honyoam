import optionList from      './optionList.mjs'
let youMightLikeElementInput={
    computed:{
        list(){
            return this.data.filter(a=>
                ~a.secondId.indexOf(this.prefix)
            )
        },
    },
    data:()=>({
        prefix:''
    }),
    props:['data','value'],
    template:`
        <div>
            <div>
                <input placeholder=編號 v-model=prefix>
            </div>
            <select
                :value=value
                @input="e=>$emit('input',e.target.value)"
            >
                <option v-for="a of list" :value=a.id>
                    {{a.secondId}} {{a.name}}
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
