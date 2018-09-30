import api from                         '../../_api.mjs'
let cropImageUploader={
    components:{vueCropper:window['vue-cropper']},
    computed:{
        innerData(){
            return this.data||{}
        }
    },
    created(){
        this.checkValue()
    },
    data:()=>({
        status:{
            key:0,
        },
    }),
    methods:{
        imagePath(){
            return`image/${this.value}`
        },
        selectImage(){
            let vm=this
            let n=Object.assign(document.createElement('input'),{
                type:'file',
                onchange(){
                    document.body.removeChild(this)
                    vm.status={
                        key:1,
                        img:URL.createObjectURL(this.files[0])
                    }
                },
            })
            n.style.display='none'
            document.body.appendChild(n)
            n.click()
        },
        crop(){
            this.$refs.cropper.getCropBlob(data=>{
                this.status={
                    key:2,
                }
                this.uploadImage(
                    new File([data],'image',{type:data.type})
                )
            })
        },
        async uploadImage(file){
            this.$emit('input',(async()=>
                (await api.postForm({
                    method:'putImage',
                    file,
                })).res
            )())
        },
        async checkValue(){
            if(typeof this.value=='string')
                this.status={
                    key:3,
                }
            if(this.value instanceof Promise)
                this.$emit('input',await this.value)
        },
    },
    props:[
        'data',
        'value',
    ],
    template:`
        <div>
            <button
                v-if="status.key==0"
                @click=selectImage
            >選擇圖片</button>
            <template
                v-if="status.key==1"
            >
                <div :style="innerData.scale?{
                    width:'960px',
                    height:'540px',
                    position:'relative',
                }:{}">
                    <vueCropper
                        ref=cropper
                        outputType=png
                        :img=status.img
                        :canScale=true
                        :outputSize=1
                        :autoCrop=true
                        :autoCropWidth="'autoCropWidth'in innerData?innerData.autoCropWidth:240"
                        :autoCropHeight="'autoCropHeight'in innerData?innerData.autoCropHeight:240"
                        :fixed="'fixed'in innerData?innerData.fixed:true"
                        :fixedNumber="'fixedNumber'in innerData?innerData.fixedNumber:[1,1]"
                        :style="Object.assign({
                            width:('width'in innerData?innerData.width:480)+'px',
                            height:('height'in innerData?innerData.height:360)+'px'
                        },innerData.scale?{
                            left:'-50%',
                            top:'-50%',
                            position:'relative',
                            transform:'scale(.5,.5)',
                        }:{})"
                    ></vueCropper>
                </div>
                <button @click=crop>裁切</button>
            </template>
            <div
                v-if="status.key==2"
            >上傳中……</div>
            <img
                v-if="status.key==3"
                style=width:160px
                :src=imagePath()
                @click=selectImage
            >
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        }
    },
}
export default cropImageUploader
