import api from                 '../../_api.mjs'
import optionList from          './optionList.mjs'
import patternEditOption from   './presaleObjects/patternEditOption.mjs'
let inputForSpecificObject={
    components:{optionList},
    created(){
        this.in()
    },
    data:()=>({
        value:0,
        patternEditOption,
    }),
    methods:{
        async in(){
            this.value=(await api.post({
                method:'getPresaleObject',
                id:this.id,
            })).res
        },
        async out(){
            return console.log(this.value)
            await api.post({
                method:'setPresaleObject',
                id:this.id,
                value:this.value,
            })
            alert('儲存完成。')
        }
    },
    props:['id','language',],
    template:`
        <div v-if=value>
            <h3>格局</h3>
            <optionList
                class=indent
                :editOption=patternEditOption
                :editOptionData=language
                v-model=value.pattern
            ></optionList>
            <button @click=out>儲存變更</button>
        </div>
    `,
    watch:{
        id(){
            this.in()
        },
    },
}
export default{
    components:{
        inputForSpecificObject,
    },
    created(){
        this.in()
    },
    data:()=>({
        value:0,
        selectedObject:0,
    }),
    props:['language'],
    methods:{
        async in(){
            this.value=(await api.post({
                method:'outPresaleList',
            })).res
        },
        async out(){
            await api.post({
                method:'addPresaleObject',
            })
            alert('新增完成。')
            await this.in()
        },
    },
    template:`
        <div>
            <button
                @click=out
            >新增</button>
            <select
                v-model=selectedObject
            >
                <option
                    v-for="a in value"
                    :value=a.id
                >{{a.name}}</option>
            </select>
            <inputForSpecificObject
                v-if=selectedObject
                :id=selectedObject
                :language=language
            ></inputForSpecificObject>
        </div>
    `,
}
