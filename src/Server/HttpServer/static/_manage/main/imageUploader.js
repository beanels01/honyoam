import api from             '../../_api.js'
export default{
    methods:{
        imagePath(){
            return `image/${this.value}`
        },
        selectImage(){
            let vm=this
            let n=Object.assign(document.createElement('input'),{
                type:'file',
                onchange(){
                    document.body.removeChild(this)
                    vm.uploadImage(this.files[0])
                },
            })
            n.style.display='none'
            document.body.appendChild(n)
            n.click()
        },
        async uploadImage(file){
            this.$emit('input',(async()=>
                (await api.postForm({
                    method:'addImage',
                    file,
                })).res
            )())
        },
    },
    props:['value'],
    template:`
        <span @click=selectImage>
            <button v-if=!value>選擇圖片</button>
            <img
                style=width:160px
                :src=imagePath()
                v-if="typeof value=='string'"
            >
        </span>
    `,
    watch:{
        async value(){
            if(this.value instanceof Promise)
                this.$emit('input',await this.value)
        }
    },
}
