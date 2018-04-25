import optionList from          '../../optionList.js'
import block1EditOption from    './block1/block1EditOption.js'
import imageUploader from       '../../imageUploader.js'
let block1={
    components:{optionList,imageUploader},
    computed:{
        upToDate(){
            return this.value
        },
    },
    created(){
        this.checkValue()
    },
    data:()=>({
        block1EditOption,
    }),
    props:['value'],
    methods:{
        checkValue(){
            if(this.upToDate)
                return
            this.$emit('input',{
                title:          '2020奧運東京都市更新\n引爆地產熱潮',
                subtitle:       '臺日專家剖析2020前後東京投資致勝關鍵',
                speakers:       [
                    {
                        speaker:0,
                        speakerPicture:0,
                        summary:'以深耕臺日不動產28年資歷，分享自身投資經驗',
                        contentTitle:'投資買房如何選擇？',
                        content:[
                            '台日兩側觀點同時切入',
                            '確保您得資產，您不可不知的投資重點大公開',
                            '台日地產達人投資大解析',
                        ],
                    },
                    {
                        speaker:1,
                        speakerPicture:0,
                        summary:'擁有25年不動產經驗，及熟悉台灣人購屋需求。',
                        contentTitle:'東京未來會如何改變？',
                        content:[
                            '2020東京奧運到來，數百億資金投入大型開發案，觀光人數及工作機會的成長力道，不可忽視',
                        ],
                    },
                ],
            })
        },
    },
    template:`
        <div v-if=upToDate>
            <p>
                標題：
                <textarea v-model=value.title></textarea>
            </p>
            <p>
                橫幅：
                <imageUploader
                    v-model=value.banner
                ></imageUploader>
            </p>
            <p>
                副標：
                <textarea v-model=value.subtitle></textarea>
            </p>
            <optionList
                :editOption=block1EditOption
                v-model=value.speakers
            ></optionList>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default block1
