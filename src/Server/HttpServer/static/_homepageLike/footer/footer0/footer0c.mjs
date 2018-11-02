import api from         '../../../_api.mjs'
let footer0c={
    data:()=>({
        address:'',
    }),
    methods:{
        async put(){
            await api.post({
                method:         'putSubscribe',
                address:        this.address,
            })
            alert('訂閱成功。')
        },
    },
    props:['language'],
    template:`
        <div class=p>
            <div class=title>{{language.title}}</div>
            <div class=line></div>
            <p v-html=language.content></p>
            <div class=a>
                <div>
                    <input
                        :placeholder=language.placeholder
                        v-model=address
                    >
                </div>
                <div>
                    <button @click="put"><img src=img/send.png></button>
                </div>
            </div>
        </div>
    `,
}
export default footer0c
