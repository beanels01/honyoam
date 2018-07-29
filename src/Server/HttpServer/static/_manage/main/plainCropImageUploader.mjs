import cropImageUploader from   './cropImageUploader.mjs'
let plainCropImageUploader={
    components:{cropImageUploader},
    props:['value'],
    template:`
        <cropImageUploader
            :data="{
                autoCropWidth:undefined,
                autoCropHeight:undefined,
                fixed:undefined,
                fixedNumber:undefined,
                width:1920,
                height:1080,
            }"
            :value=value
            @input="a=>$emit('input',a)"
        ></cropImageUploader>
    `,
}
export default plainCropImageUploader
