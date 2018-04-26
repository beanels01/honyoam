import api from             '../../_api.mjs'
let faqFeedback={
    created(){
        this.update()
    },
    data:()=>({
        array:0,
    }),
    methods:{
        async deleteFeedback(id){
            await api.post({
                method:'deleteFeedback',
                id,
            })
            await this.update()
        },
        async update(){
            let res=(await api.post({
                method:'getFeedbacks',
            })).res
            for(let a of res)
                a.updating=0
            this.array=res
        },
        async updateStatus(f,value){
            f.updating=1
            await api.post({
                method:     'updateStatus',
                type:       'feedback',
                id:         f._id,
                value,
            })
            f.updating=0
        },
    },
    template:`
        <table v-if=array>
            <thead>
                <tr>
                    <th>資料</th>
                    <th>狀態</th>
                    <th>操作</th>
                </tr>
            </thead>
            <thead>
                <tr v-for="a in array">
                    <td>
                        姓名：{{a.name}}<br>
                        Email：{{a.email}}<br>
                        電話：{{a.phone}}<br>
                        問題：{{a.question}}
                    </td>
                    <td>
                        <select
                            v-model=a.status
                            @input="e=>updateStatus(a,e.target.value)"
                            :disabled="a.updating==1"
                        >
                            <option value=0>未聯絡</option>
                            <option value=1>已聯絡</option>
                            <option value=2>已結案</option>
                        </select>
                    </td>
                    <td>
                        <button
                            @dblclick=deleteFeedback(a._id)
                        >雙擊刪除</button>
                    </td>
                </tr>
            </thead>
        </table>
    `
}
export default faqFeedback
