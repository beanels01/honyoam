import imageUploader from       '../../imageUploader.js'
let block0={
    components:{
        quillEditor:VueQuillEditor.quillEditor,
        imageUploader,
    },
    computed:{
        upToDate(){
            return this.value&&this.value.version==0
        },
    },
    created(){
        this.checkValue()
    },
    props:['value'],
    methods:{
        checkValue(){
            if(this.upToDate)
                return
            this.$emit('input',{
                version:        0,
                title:          '★★★東京皇居指標建案隆重登台 | 日本地產巨頭親臨推薦',
                seminarName:    '本葉國際11月台北說明會',
                speaker0:       0,
                date:           '2017年11月12日（日）',
                time:           'PM14:00 (PM13:00開放入場）',
                placeName:      '台北西華飯店三樓·元明廳',
                placeAddress:   '台北市松山區民生東路三段111號',
                placeGMap:      'https://www.google.com/maps/place/Jiangong+Jinjiang+Hotel,+Xuhui+Qu,+Shanghai+Shi,+China,+200085',
            })
        },
    },
    template:`
        <div v-if=upToDate>
            <p>
                標題：
                <input
                    v-model=value.title
                >
            </p>
            <p>
                說明會名稱：
                <input
                    v-model=value.seminarName
                >
            </p>
            <p>
                主講者：
                <select v-model=value.speaker0>
                    <option value=0>人物一</option>
                    <option value=1>人物二</option>
                    <option value=2>人物三</option>
                </select>
            </p>
            <p>
                主辦單位：
                <input v-model=value.unit0>
            </p>
            <p>
                主辦單位 LOGO：
                <imageUploader v-model=value.unit0image></imageUploader>
            </p>
            <p>
                協辦單位（留空省略）：
                <input v-model=value.unit1>
            </p>
            <p>
                協辦單位 LOGO：
                <imageUploader v-model=value.unit1image></imageUploader>
            </p>
            <p>
                日期：
                <input
                    v-model=value.date
                >
            </p>
            <p>
                時間：
                <input
                    v-model=value.time
                >
            </p>
            <p>
                地點名稱：
                <input
                    v-model=value.placeName
                >
            </p>
            <p>
                地點地址：
                <input
                    v-model=value.placeAddress
                >
            </p>
            <p>
                地點 GMap：
                <input
                    v-model=value.placeGMap
                >
            </p>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default block0
