import api from                 '../../_api.mjs'
import quillImageHandler from   './quillImageHandler.mjs'
let
    options={
        placeholder:'內文',
        modules:{
            toolbar:{
                container:[
                    'link',
                    'image',
                    {color:[]},
                    {header:1},
                    {header:2},
                ],
                handlers:{
                    image:quillImageHandler
                },
            }
        },
        formats:[
            'link',
            'image',
            'color',
            'header',
        ],
    }
let email={
    components:{
        quillEditor:VueQuillEditor.quillEditor,
    },
    created(){
        this.get()
    },
    data:()=>({
        options,
        array:0,
        type:'普通郵件',
        title:'',
        content:'',
        selectedNews:'',
    }),
    methods:{
        async get(){
            this.getNewsList()
            this.array=[...new Set([].concat(
                ...(await api.post({
                    method:'getApplies',
                })).res.map(a=>a.people.map(p=>
                    p.email
                )),
                (await api.post({
                    method:'getSubscribe',
                })).res.map(a=>
                    a.address
                )
            ))].sort()
        },
        async getNewsList(){
            this.news=(await api.post({
                method:'getNewsList',
                language:'zh-Hant',
            })).res
            this.news.sort((a,b)=>
                !a.date||!b.date?
                    (a.date?1:0)-(b.date?1:0)
                :
                    new Date(b.date)-new Date(a.date)
            )
        },
        async put(){
            let x={}
            if(this.type=='普通郵件'){
                x={
                    subject:this.title,
                    html:this.content,
                }
            }else{
                let data=(await api.post({
                    method:'getNews',
                    id:this.selectedNews,
                })).res
                x={
                    subject:data.title,
                    html:data.content,
                }
            }
            ;(await api.post({
                method:     'broadcastMail',
                subject:    x.subject,
                html:       x.html,
            }))
            alert('發送成功。')
        },
    },
    template:`
        <div>
            <h2>發送郵件</h2>
            <select v-model=type>
                <option value=普通郵件>普通郵件</option>
                <option value=轉發最新消息>轉發最新消息</option>
            </select>
            <div v-if="type=='普通郵件'">
                <p>
                    <input v-model=title placeholder=標題>
                </p>
                <quillEditor
                    :options=options
                    v-model=content
                ></quillEditor>
            </div>
            <div v-if="type=='轉發最新消息'">
                <select v-model=selectedNews required>
                    <option value disabled hidden>最新消息</option>
                    <option
                        v-for="a of news"
                        :value="a._id"
                    >{{a.title}}</option>
                </select>
            </div>
            <button @click=put>發送</button>
            <h2>Email</h2>
            <ul>
            <li v-for="a in array"><code>{{a}}</code></li>
            </ul>
        </div>
    `,
}
export default email
