import api from             '../../_api.mjs'
//import languageSelect from  './languageSelect.mjs'
/*let inputForSpecificObject={
    created(){
        this.checkValue()
    },
    methods:{
        checkValue(){
            if(this.value)
                return
            this.$emit('input',{})
        },
    },
    props:['value'],
    template:`
        <div>
            <h3>注意事項</h3>
            <template v-if=value>
                <textarea
                    v-model=value.precautions
                ></textarea>
            </template>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}*/
export default{
    components:{
        /*languageSelect,
        inputForSpecificObject,*/
    },
    created(){
        this.in()
    },
    data:()=>({
        value:0,
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
            <select>
                <option
                    v-for="a in value"
                    :value=a.id
                >{{a.name}}</option>
            </select>
            <!--
                <inputForSpecificObject
                ></inputForSpecificObject>
            -->
        </div>
    `,
}
