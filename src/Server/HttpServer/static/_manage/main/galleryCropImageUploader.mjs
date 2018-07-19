import cropImageUploader from   './cropImageUploader.mjs'
let galleryCropImageUploader={
    components:{cropImageUploader},
    props:['value'],
    template:`
        <cropImageUploader
            :data="{
                autoCropWidth:1920,
                autoCropHeight:1080,
                fixedNumber:[16,9],
                width:1920,
                height:1080,
            }"
            :value=value
            @input="a=>$emit('input',a)"
        ></cropImageUploader>
    `,
}
export default galleryCropImageUploader
