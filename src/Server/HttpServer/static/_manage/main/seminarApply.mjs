import api from             '../../_api.mjs'
let statusInput={
    created(){
        this.checkValue()
    },
    computed:{
        valueUpToDate(){
            return typeof this.value=='object'&&
                this.value.version==this.version
        },
    },
    data:()=>({
        version:0,
    }),
    props:['value'],
    methods:{
        checkValue(){
            if(this.value==undefined)
                this.$emit('input',{version:0,main:0,})
            else if(typeof this.value=='string')
                this.$emit('input',{version:0,main:+this.value,})
        },
    },
    template:`
        <div v-if=valueUpToDate>
            <p>
                <select v-model="value.main">
                    <option value=0>未聯絡</option>
                    <option value=1>已聯絡</option>
                    <option value=2>已結案</option>
                </select>
            <p>
                負責業務：<input v-model="value.saleman">
            <p>
                追蹤狀況：<br>
                <textarea v-model="value.trackStatus"></textarea>
            <p>
                <button @click="$emit('input',value)">儲存變更</button>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
let contactApply={
    components:{
        statusInput,
    },
    created(){
        this.update()
    },
    data:()=>({
        array:0,
    }),
    methods:{
        async deleteApply(id){
            await api.post({
                method:'cutApply',
                id,
            })
            await this.update()
        },
        async update(){
            let res=(await api.post({
                method:'getApplies',
            })).res
            res.sort((a,b)=>
                new Date(b.datetime)-new Date(a.datetime)
            )
            for(let a of res)
                a.updating=0
            this.array=res
        },
        async updateStatus(apply,value){
            apply.updating=1
            await api.post({
                method:     'setStatus',
                type:       'apply',
                id:         apply._id,
                value,
            })
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
                        <statusInput
                            v-model=a.status
                            @input="v=>updateStatus(a,v)"
                            :disabled="a.updating==1"
                        ></statusInput>
                    </td>
                    <td>
                        <button
                            @dblclick=deleteApply(a._id)
                        >雙擊刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
}
export default contactApply
