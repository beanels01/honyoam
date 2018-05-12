import ImageUploader from './ImageUploader.mjs'
async function quillImageHandler(){
    let imageUploader=new ImageUploader
    this.quill.insertEmbed(
        this.quill.getSelection(),
        'image',
        `/image/${await imageUploader.selectImage()}`,
        Quill.sources.USER
    )
}
export default quillImageHandler
