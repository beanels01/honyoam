import api from             '../../_api.mjs'
let contactApply={
    created(){
        this.update()
    },
    data:()=>({
        array:0,
    }),
    methods:{
        async deleteApply(id){
            await api.post({
                method:'deleteApply',
                id,
            })
            await this.update()
        },
        async update(){
            let res=(await api.post({
                method:'getApplies',
            })).res
            for(let a of res)
                a.updating=0
            this.array=res
        },
        async updateStatus(apply,value){
            apply.updating=1
            console.log(await api.post({
                method:     'updateStatus',
                type:       'apply',
                id:         apply._id,
                value,
            }))
            apply.updating=0
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
            <tbody>
                <tr v-for="a in array">
                    <td>
                        <p>
                            時間：{{
                                (new Date(a.datetime)).toLocaleString()
                            }}
                        </p>
                        <p>
                            場次：{{a.title}}
                        </p>
                        <p>
                            人數：{{a.people.length}}
                        </p>
                        <ul>
                            <li
                                v-for="b in a.people"
                            >
                                姓名：{{b.name}}<br>
                                稱謂：{{
                                    b.gender=='female'?'小姐':'先生'
                                }}<br>
                                Email：{{b.email}}<br>
                                電話：{{b.phone}}
                            </li>
                        </ul>
                        有興趣議題：
                        <ul>
                            <li
                                v-for="b in a.interested.split('\\n')"
                            >
                                {{b}}
                            </li>
                        </ul>
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
                            @dblclick=deleteApply(a._id)
                        >雙擊刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    `
}
export default contactApply
