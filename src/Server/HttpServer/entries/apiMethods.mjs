import cut from './apiMethods/cut'
import get from './apiMethods/get'
import put from './apiMethods/put'
import set from './apiMethods/set'
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
},cut,get,put,set)
