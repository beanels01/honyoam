export default{
    async cutMedievalObject(doc,cu){
        if(!(
            typeof doc.id=='string'
        ))
            return['status',400]
        return['responseJson',await this._cutMedievalObject(cu,doc.id)]
    },
    async cutNews(doc,cu){
        if(!(
            typeof doc.id=='string'
        ))
            return['status',400]
        return['responseJson',await this._cutNews(cu,doc.id)]
    },
    async cutPresaleObject(doc,cu){
        if(!(
            typeof doc.id=='string'
        ))
            return['status',400]
        return['responseJson',await this._cutPresaleObject(cu,doc.id)]
    },
    async cutSeminar(doc,cu){
        if(!(
            typeof doc.id=='string'
        ))
            return['status',400]
        return['responseJson',await this._cutSeminar(cu,doc.id)]
    },
    async cutApply(doc,cu){
        if(!(
            typeof doc.id=='string'
        ))
            return['status',400]
        return['responseJson',await this._cutApply(cu,doc.id)]
    },
    async cutFeedback(doc,cu){
        if(!(
            typeof doc.id=='string'
        ))
            return['status',400]
        return['responseJson',await this._cutFeedback(cu,doc.id)]
    },
}
