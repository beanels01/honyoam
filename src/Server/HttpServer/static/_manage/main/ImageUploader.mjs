import api from             '../../_api.mjs'
function ImageUploader(){}
ImageUploader.prototype.selectImage=async function(){
    return new Promise(rs=>{
        let vm=this
        let n=Object.assign(document.createElement('input'),{
            type:'file',
            onchange(){
                document.body.removeChild(this)
                rs(vm.uploadImage(this.files[0]))
            },
        })
        n.style.display='none'
        document.body.appendChild(n)
        n.click()
    })
}
ImageUploader.prototype.uploadImage=async function(file){
    return(await api.postForm({
        method:'addImage',
        file,
    })).res
}
export default ImageUploader
