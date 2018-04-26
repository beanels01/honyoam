import add from './apiMethods/add'
import get from './apiMethods/get'
import update from './apiMethods/update'
export default Object.assign({
    async freezeUser(doc,cu){
        let targetUser
        if(!(
            typeof doc.user=='string'&&
            (targetUser=await this._getUserById(doc.user))
        ))
            return['status',400]
        return['responseJson',await this._freezeUser(cu,targetUser)]
    },
    async deleteApply(doc,cu){
        if(!(
            typeof doc.id=='string'
        ))
            return['status',400]
        return['responseJson',await this._deleteApply(cu,doc.id)]
    },
    async deleteFeedback(doc,cu){
        if(!(
            typeof doc.id=='string'
        ))
            return['status',400]
        return['responseJson',await this._deleteFeedback(cu,doc.id)]
    },
    async refreshInvitationCode(doc,cu){
        return['responseJson',await this._refreshInvitationCode(cu)]
    },
    async register(doc,cu){
        if(!(
            typeof doc.username=='string'&&
            typeof doc.password=='string'&&
            typeof doc.realname=='string'&&
            typeof doc.type=='string'&&
            typeof doc.invitationCode=='string'
        ))
            return['status',400]
        return['responseJson',await this._register(doc)]
    },
    async login(doc,cu){
        return['responseJson',await this._getUserByUnsafeCredential(doc)]
    },
},add,get,update)
