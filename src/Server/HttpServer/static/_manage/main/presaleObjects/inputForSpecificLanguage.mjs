import quillImageHandler from   '../quillImageHandler.mjs'
let
    formats=[
        'link',
        'image',
    ],
    options={
        modules:{
            toolbar:{
                container:formats,
                handlers:{image:quillImageHandler},
            },
        },
        formats,
    }
let inputForSpecificLanguage={
    components:{
        quillEditor:VueQuillEditor.quillEditor,
    },
    created(){
        this.checkValue()
    },
    data:()=>({
        options,
    }),
    methods:{
        checkValue(){
            if(this.value)
                return
            this.$emit('input',{
                name:'',
                informationTitle:'',
                informationContent:'',
                conceptSummary:'',
                conceptContent:'',
                environmentSummary:'',
                environmentContent:'',
                trafficSummary:'',
                trafficContent:'',
                videoId:'rNsgHMklBW0',
            })
        },
        videoIdInput(e){
            let m=e.target.value.match(/\?v=(.*)/)
            if(m)
                this.value.videoId=m[1]
        }
    },
    props:['value'],
    template:`
        <div v-if=value>
            <p>
                名稱：
                <input
                    v-model=value.name
                >
            </p>
            <p>
                副名稱：
                <input
                    v-model=value.subName
                >
            </p>
            <p>
                簡介一：
                <input
                    v-model=value.brief0
                >
            </p>
            <p>
                簡介二：
                <input
                    v-model=value.brief1
                >
            </p>
            <p>
                介紹標題：
                <input
                    v-model=value.informationTitle
                >
            </p>
            <p>
                介紹內容：
                <div class=indent>
                    <textarea
                        v-model=value.informationContent
                    ></textarea>
                </div>
            </p>
            <h2>建築設計</h2>
            <div class=indent>
                <label>
                    <input type=checkbox v-model=value.showConcept>
                    顯示以下項目
                </label>
                <div v-if=value.showConcept>
                    <p>
                        概念概要：
                        <div class=indent>
                            <textarea
                                v-model=value.conceptSummary
                            ></textarea>
                        </div>
                    </p>
                    <p>
                        概念內文：
                        <div class=indent>
                            <quillEditor
                                style=width:480px
                                :options=options
                                v-model=value.conceptContent
                            ></quillEditor>
                        </div>
                    </p>
                </div>
            </div>
            <h2>周邊環境</h2>
            <div class=indent>
                <label>
                    <input type=checkbox v-model=value.showEnvironment>
                    顯示以下項目
                </label>
                <div v-if=value.showEnvironment>
                    <p>
                        環境概要：
                        <div class=indent>
                            <textarea
                                v-model=value.environmentSummary
                            ></textarea>
                        </div>
                    </p>
                    <p>
                        環境內文：
                        <div class=indent>
                            <quillEditor
                                style=width:480px
                                :options=options
                                v-model=value.environmentContent
                            ></quillEditor>
                        </div>
                    </p>
                </div>
            </div>
            <h2>交通方式</h2>
            <div class=indent>
                <label>
                    <input type=checkbox v-model=value.showTraffic>
                    顯示以下項目
                </label>
                <div v-if=value.showTraffic>
                    <p>
                        交通概要：
                        <div class=indent>
                            <textarea
                                v-model=value.trafficSummary
                            ></textarea>
                        </div>
                    </p>
                    <p>
                        交通內文：
                        <div class=indent>
                            <quillEditor
                                style=width:480px
                                :options=options
                                v-model=value.trafficContent
                            ></quillEditor>
                        </div>
                    </p>
                </div>
            </div>
            <h2>影音介紹</h2>
            <div class=indent>
                <label>
                    <input type=checkbox v-model=value.showVideo>
                    顯示以下項目
                </label>
                <div v-if=value.showVideo>
                    <p>
                        這裡要設定的是 YouTube 的影片 ID。以下兩個欄位，擇一填寫即可：
                    </p>
                    <p>
                        影片 ID：
                        <input
                            v-model=value.videoId
                        ></textarea>
                    </p>
                    <p>
                        影片 URL（網址）：
                        <input
                            :value="'https://www.youtube.com/watch?v='+value.videoId"
                            @input=videoIdInput
                        ></textarea>
                    </p>
                </div>
            </div>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default inputForSpecificLanguage
