import verifyRecaptchaUsersResponse from '../verifyRecaptchaUsersResponse'
let put={
    async putNews(doc,cu){
        if(!(
            typeof doc.language=='string'
        ))
            return['status',400]
        return['responseJson',await this._putNews(cu,doc.language)]
    },
    async putApply(doc,cu){
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
            typeof doc.currentLanguage=='string'&&
            await verifyRecaptchaUsersResponse(
                this.config.recaptchaSecret,
                doc.recaptcha
            )
        ))
            return['status',400]
        return['responseJson',await this._putApply(doc)]
    },
    async putFeedback(doc,cu){
        if(!(
            typeof doc.recaptcha=='string'&&
            typeof doc.content=='string'&&
            await verifyRecaptchaUsersResponse(
                this.config.recaptchaSecret,
                doc.recaptcha
            )
        ))
            return['status',400]
        return['responseJson',await this._putFeedback(doc)]
    },
    async putSeminar(doc,cu){
        if(!(
            typeof doc.language=='string'
        ))
            return['status',400]
        return['responseJson',await this._putSeminar(cu,doc.language)]
    },
    async putMedievalObject(doc,cu){
        return['responseJson',
            await this._putMedievalObject(cu)
        ]
    },
    async putPresaleObject(doc,cu){
        return['responseJson',
            await this._putPresaleObject(cu)
        ]
    },
    async putSubscribe(doc){
        if(!(
            typeof doc.address=='string'
        ))
            return['status',400]
        return['responseJson',await this._putSubscribe(doc.address)]
    },
}
export default put
