let get={
    async getApplies(doc,cu){
        return['responseJson',await this._getApplies(cu)]
    },
    async getCurrentUser(doc,cu){
        return['responseJson',cu]
    },
    async getFaqClasses(doc,cu){
        return['responseJson',await this._getFaqClasses(cu)]
    },
    async getFaq(doc,cu){
        return['responseJson',await this._getFaq(cu)]
    },
    async getFeedbacks(doc,cu){
        return['responseJson',await this._getFeedbacks(cu)]
    },
    async getHomepage(doc,cu){
        return['responseJson',await this._getHomepage(cu)]
    },
    async getInvitationCode(doc,cu){
        return['responseJson',await this._getInvitationCode(cu)]
    },
    async getLanguage(doc,cu){
        return['responseJson',await this._getLanguage(cu)]
    },
    async getMedievalList(doc,cu){
        return['responseJson',await this._getMedievalList(cu)]
    },
    async getMedievalObject(doc,cu){
        return['responseJson',await this._getMedievalObject(doc.id)]
    },
    async getNews(doc,cu){
        return['responseJson',await this._getNews(cu,doc.id)]
    },
    async getPresaleObject(doc,cu){
        if(!(
            typeof doc.id=='string'
        ))
            return['status',400]
        return['responseJson',await this._getPresaleObject(doc.id)]
    },
    async getSeminar(doc){
        if(!(
            typeof doc.id=='string'
        ))
            return['status',400]
        return['responseJson',await this._getSeminar(doc.id)]
    },
    async getSeminars(doc,cu){
        return['responseJson',await this._getSeminars(cu)]
    },
    async getUserByType(doc,cu){
        if(!(
            typeof doc.type=='string'
        ))
            return['status',400]
        return['responseJson',
            await this._getUserByType(cu,doc.type)
        ]
    },
    async getUserByUsername(doc,cu){
        if(!(
            typeof doc.username=='string'
        ))
            return['status',400]
        return['responseJson',
            await this._getUserByUsername(doc.username)
        ]
    },
    async getUserlist(doc,cu){
        return['responseJson',await this._getUserlist(cu)]
    },
    async getPresale(doc){
        return['responseJson',await this._getPresale()]
    },
    async getPresaleList(doc,cu){
        return['responseJson',await this._getPresaleList(cu)]
    },
    async getNewsList(doc,cu){
        if(!(
            typeof doc.language=='string'
        ))
            return['status',400]
        return['responseJson',await this._getNewsList(cu,doc.language)]
    },
}
export default get
