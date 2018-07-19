import optionList from      './optionList.mjs'
let youMightLikeElementInput={
    props:['data','value'],
    template:`
        <select
            :value=value
            @input="e=>$emit('input',e.target.value)"
        >
            <option v-for="a of data" :value=a.id>{{a.name}}</option>
        </select>
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
