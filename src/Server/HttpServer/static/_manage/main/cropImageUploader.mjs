import api from                         '../../_api.mjs'
let cropImageUploader={
    components:{vueCropper:window['vue-cropper']},
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
                    method:'addImage',
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
    props:['value'],
    template:`
        <div>
            <button
                v-if="status.key==0"
                @click=selectImage
            >選擇圖片</button>
            <template
                v-if="status.key==1"
            >
                <vueCropper
                    ref=cropper
                    outputType=jpeg
                    :img=status.img
                    :canScale=true
                    :outputSize=1
                    :autoCrop=true
                    :autoCropWidth=240
                    :autoCropHeight=240
                    :fixed=true
                    :fixedNumber=[1,1]
                    style="width:480px;height:360px;"
                ></vueCropper>
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
