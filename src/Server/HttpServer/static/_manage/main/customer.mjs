import api from                 '../../_api.mjs'
let inputForSpecificObject={
    created(){
        this.in()
    },
    data:()=>({
        version:0,
        value:0,
    }),
    methods:{
        async in(){
            let value=(await api.post({
                method: 'getCustomer',
                id:     this.id,
            })).res
            delete value._id
            this.value=value
        },
        async out(){
            await api.post({
                method: 'setCustomer',
                id:     this.id,
                value:  this.value,
            })
            alert('儲存完成。')
        },
    },
    props:['id','language',],
    template:`
        <div v-if=value>
            <p>
                編號：<code>{{value._id}}</code>
            </p>
            <p>
                等級（整數）：<input v-model=value.rank>
            </p>
            <p>
                Email：<input v-model=value.email>
            </p>
            <p>
                客戶名：<input v-model=value.name>
            </p>
            <p>
                擔當者：<select></select>
            </p>
            <p>
                <label>
                    <input type=checkbox v-model=value.subscribe>
                    訂閱
                </label>
            </p>
            <p>
                其他資料：<br>
                <textarea v-model=value.else></textarea>
            </p>
            <p>
                新資料：<br>
                <textarea v-model=value.new></textarea>
            </p>
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
        value:null,
        selectedObject:null,
    }),
    props:['language'],
    methods:{
        async in(){
            this.value=(await api.post({
                method:'getCustomerList',
            })).res
        },
        async cut(i){
            await api.post({
                method: 'cutCustomer',
                id:     this.value[i]._id,
            })
            alert('刪除完成。')
            await this.in()
        },
        async put(){
            await api.post({
                method:'putCustomer',
            })
            alert('新增完成。')
            await this.in()
        },
    },
    template:`
        <div>
            <template
                v-if="selectedObject==null"
            >
                <button
                    @click=put
                >新增</button>
                <div style="display:table;">
                    <div
                        style="display:table-row;"
                    >
                        <div
                            style="display:table-cell;"
                        >編號末四碼</div>
                        <div
                            style="display:table-cell;padding-left:16px;"
                        >等級</div>
                        <div
                            style="display:table-cell;padding-left:16px;"
                        >客戶名</div>
                        <div
                            style="display:table-cell;padding-left:16px;"
                        >操作</div>
                    </div>
                    <div
                        v-for="(a,i) in value"
                        style="display:table-row;"
                    >
                        <div
                            style="display:table-cell;"
                        >{{a._id.substring(20)}}</div>
                        <div
                            style="display:table-cell;padding-left:16px;"
                        >{{a.rank}}</div>
                        <div
                            style="display:table-cell;padding-left:16px;"
                        >{{a.name}}</div>
                        <div
                            style="display:table-cell;padding-left:16px;"
                        >
                            <button
                                @click="selectedObject=i"
                            >編輯</button>
                            <button
                                @dblclick="cut(i)"
                            >雙擊刪除</button>
                        </div>
                    </div>
                </div>
            </template>
            <template
                v-if="selectedObject!=null"
            >
                <div>
                    <button
                        @click="selectedObject=null"
                    >←</button>
                </div>
                <div>
                    客戶名單 > {{value[selectedObject].name}}
                </div>
                <inputForSpecificObject
                    :id=value[selectedObject]._id
                    :language=language
                ></inputForSpecificObject>
            </template>
        </div>
    `,
}
