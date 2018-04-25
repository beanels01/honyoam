import imageUploader from   '../imageUploader.js'
let colors=[
    {color:[0x81,0xc7,0xd4],name:'藍綠'},
    {color:[0x69,0xb0,0xac],name:'深藍綠'},
    {color:[0x77,0x96,0x9a],name:'藍綠灰'},
    {color:[0xeb,0x74,0x77],name:'桃紅'},
    {color:[0xff,0xb1,0x1b],name:'橙菊'},
    {color:[0x82,0xb9,0x64],name:'粉綠'},
    {color:[0x8f,0x77,0xb5],name:'粉紫'},
    {color:[0x00,0x89,0xa7],name:'藍綠（深）'},
    {color:[0x26,0x87,0x85],name:'深藍綠（深）'},
    {color:[0x56,0x6c,0x73],name:'藍綠灰（深）'},
    {color:[0xcb,0x1b,0x45],name:'桃紅（深）'},
    {color:[0xe3,0x5c,0x20],name:'橙菊（深）'},
    {color:[0x1e,0x7c,0x3c],name:'粉綠（深）'},
    {color:[0x77,0x42,0x8d],name:'粉紫（深）'},
]
let editOption={
    components:{imageUploader},
    created(){
        this.checkValue()
    },
    data:()=>({
        colors,
    }),
    props:['value'],
    watch:{
        value(){
            this.checkValue()
        }
    },
    methods:{
        checkValue(){
            if(!this.value)
                this.$emit('input',{
                    mobileImage:    null,
                    desktopImage:   null,
                    title:          '',
                    content:        '',
                    time:           '',
                    color:          '',
                    opacity:        0,
                })
        },
        colorOptionStyle(c){
            return!c?{}:{
                backgroundColor:`rgb(${c})`,
            }
        },
    },
    template:`
        <div v-if=value style=display:table>
            <div style=display:table-row>
                <div style=display:table-cell>
                    <div style=display:table;text-align:center>
                        <div style=display:table-cell>
                            行動版<br>
                            <imageUploader
                                v-model=value.mobileImage
                            ></imageUploader>
                        </div>
                        <div style=display:table-cell>
                            桌面版<br>
                            <imageUploader
                                v-model=value.desktopImage
                            ></imageUploader>
                        </div>
                    </div>
                </div>
            </div>
            <div style=display:table-row>
                <div style=display:table-cell>
                    <input
                        placeholder=標題
                        v-model=value.title
                    ><br>
                    <textarea
                        placeholder=內容
                        v-model=value.content
                    ></textarea>
                    <textarea
                        placeholder=時間
                        v-model=value.time
                    ></textarea>
                    <select
                        required
                        :style="colorOptionStyle(value.color)"
                        v-model=value.color
                    >
                        <option hidden value=''>布幕顏色</option>
                        <option
                            v-for="c in colors"
                            :style="colorOptionStyle(c.color.join(','))"
                            :value="c.color.join(',')"
                        >
                            {{c.name}}
                        </option>
                    </select>
                    <select
                        v-model=value.opacity
                    >
                        <option value=0>透明</option>
                        <option value=0.6>半透明</option>
                        <option value=1>不透明</option>
                    </select>
                </div>
            </div>
        </div>
    `
}
export default editOption
