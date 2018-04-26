import verifyRecaptchaUsersResponse from '../verifyRecaptchaUsersResponse'
let add={
    async addApply(doc,cu){
        if(!(
            typeof doc.recaptcha=='string'&&
            doc.people instanceof Array&&doc.people.every(doc=>
                typeof doc.name=='string'&&
                typeof doc.gender=='string'&&
                typeof doc.email=='string'&&
                typeof doc.phone=='string'
            )&&
            typeof doc.interested=='string'&&
            typeof doc.title=='string'&&
            await verifyRecaptchaUsersResponse(
                this.config.recaptchaSecret,
                doc.recaptcha
            )
        ))
            return['status',400]
        return['responseJson',await this._addApply(doc)]
    },
    async addFeedback(doc,cu){
        if(!(
            typeof doc.recaptcha=='string'&&
            typeof doc.name=='string'&&
            typeof doc.email=='string'&&
            typeof doc.phone=='string'&&
            typeof doc.question=='string'&&
            await verifyRecaptchaUsersResponse(
                this.config.recaptchaSecret,
                doc.recaptcha
            )
        ))
            return['status',400]
        return['responseJson',await this._addFeedback(doc)]
    },
    async addSeminar(doc,cu){
        if(!(
            typeof doc.language=='string'
        ))
            return['status',400]
        return['responseJson',await this._addSeminar(cu,doc.language)]
    },
}
export default add
