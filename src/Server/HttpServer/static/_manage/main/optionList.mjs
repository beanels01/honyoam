let optionList={
    created(){
        this.checkValue()
    },
    props:[
        'value',
        'editOption',
        'editOptionData',
    ],
    methods:{
        add(){
            this.value.push(null)
        },
        checkValue(){
            if(!this.value)
                this.$emit('input',[])
        },
        moveUp(i){
            let a=this.value
            a.splice(i-1,2,a[i],a[i-1])
        },
        moveDown(i){
            let a=this.value
            a.splice(i,2,a[i+1],a[i])
        },
        remove(i){
            this.value.splice(i,1)
        },
    },
    template:`
        <div>
            <table>
                <tr v-for="(o,i) in value">
                    <td>
                        <component
                            :is=editOption
                            :data=editOptionData
                            v-model=value[i]
                        ></component>
                    </td>
                    <td>
                        <button
                            :disabled="i==0"
                            @click=moveUp(i)
                        >
                            ↑
                        </button>
                        <button
                            :disabled="i==value.length-1"
                            @click=moveDown(i)
                        >
                            ↓
                        </button>
                        <button @click=remove(i)>
                            ×
                        </button>
                    </td>
                </tr>
            </table>
            <button @click=add>新增項目</button>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default optionList
