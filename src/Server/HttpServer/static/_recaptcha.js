let recaptcha={
    created(){
        if(typeof window!='undefined'){
            ;(async()=>{
                await recaptchaLoad
                grecaptcha.render(this.$el,{
                    sitekey:'6LcmAT8UAAAAADT8KrczxoefQRBB2R4nzaUXCBoG',
                    callback:response=>{
                        this.$emit('input',response)
                    },
                })
            })()
        }
    },
    props:['value'],
    template:`
        <div class="g-recaptcha"></div>
    `,
}
export default recaptcha
