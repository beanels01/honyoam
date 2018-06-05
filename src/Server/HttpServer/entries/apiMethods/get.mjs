let get={
    async getApplies(doc,cu){
        return['responseJson',await this._getApplies(cu)]
    },
    async getContact(doc,cu){
        return['responseJson',await this._getContact(cu)]
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
    async outPresale(doc){
        return['responseJson',await this._outPresale()]
    },
    async outPresaleList(doc,cu){
        return['responseJson',await this._outPresaleList(cu)]
    },
}
export default get
