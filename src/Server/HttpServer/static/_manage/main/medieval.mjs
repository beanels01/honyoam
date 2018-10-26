import api from                 '../../_api.mjs'
import youMightLikeInput from   './youMightLikeInput.mjs'
export default{
    components:{
        youMightLikeInput,
    },
    created(){
        this.in()
    },
    data:()=>({
        version:0,
        value:0,
        list:0,
    }),
    props:['language'],
    methods:{
        async in(){
            this.list=(await api.post({
                method:'getMedievalList',
            })).res
            let value=(await api.post({
                method:'getMedieval',
            })).res
            if(value.version!=this.version)
                value={
                    version:this.version,
                    language:{},
                }
            this.value=value
        },
        async out(){
            await api.post({
                method:'setMedieval',
                value:this.value,
            })
            alert('儲存成功。')
        },
    },
    template:`
        <div v-if=value>
            <h1>您可能會喜歡</h1>
            <div class=indent>
                <youMightLikeInput
                    :data=list
                    v-model=value.youMightLike
                ></youMightLikeInput>
            </div>
            <div>
                <button @click=out>儲存變更</button>
            </div>
        </div>
    `,
}
