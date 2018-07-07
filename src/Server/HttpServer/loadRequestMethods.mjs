import cut from './loadRequestMethods/cut'
import get from './loadRequestMethods/get'
import put from './loadRequestMethods/put'
import set from './loadRequestMethods/set'
export default o=>{
    Object.assign(o,cut,get,put,set)
    o._request=function(doc){
        let r={doc}
        this.emit('request',r)
        return r.res
    }
    o._freezeUser=function(cu,tu){
        return this._request({
            method:'freezeUser',
            currentUser:cu,
            targetUser:tu,
        })
    }
    o._refreshInvitationCode=function(currentUser){
        return this._request({
            method:'refreshInvitationCode',
            currentUser,
        })
    }
    o._register=function(doc){
        return this._request({
            method:'register',
            username:       doc.username,
            password:       doc.password,
            realname:       doc.realname,
            type:           doc.type,
            invitationCode: doc.invitationCode,
        })
    }
}
