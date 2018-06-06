import quillImageHandler from   '../quillImageHandler.mjs'
import imageUploader from       '../imageUploader.mjs'
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
        imageUploader,
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
                所在地：
                <input
                    v-model=value.informationTitle
                >
            </p>
            <p>
                交通：
                <div class=indent>
                    <textarea
                        v-model=value.informationContent
                    ></textarea>
                </div>
            </p>
            <p>
                現況：
                <input
                    v-model=value.informationTitle
                >
            </p>
            <p>
                格局圖：
                <div class=indent>
                    <imageUploader
                        v-model=value.pattern
                    ></imageUploader>
                </div>
            </p>
            <p>
                格局圖標題：
                <input
                    v-model=value.patternTitle
                >
            </p>
            <p>
                格局圖內文：
                <div class=indent>
                    <quillEditor
                        style=width:480px
                        :options=options
                        v-model=value.patternContent
                    ></quillEditor>
                </div>
            </p>
            <p>
                影音介紹：這裡要設定的是 YouTube 的影片 ID。以下兩個欄位，擇一填寫即可：
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
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default inputForSpecificLanguage
