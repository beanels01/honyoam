import language from '../language'
let o={}
o._getApplies=function(currentUser){
    return this._request({
        method:             'getApplies',
        currentUser,
    })
}
o._getContact=function(currentUser){
    return this._request({
        method:'getContact',
        currentUser,
    })
}
o._getFaq=function(currentUser){
    return this._request({
        method:'getFaq',
        currentUser,
    })
}
o._getFaqClasses=function(cu){
    return this._request({
        method:'getFaqClasses',
        currentUser:cu,
    })
}
o._getFeedbacks=function(currentUser){
    return this._request({
        method:             'getFeedbacks',
        currentUser,
    })
}
o._getHomepage=function(cu){
    return this._request({
        method:'getHomepage',
        currentUser:cu,
    })
}
o._getLanguage=function(){
    return{res:language}
}
o._getSeminar=function(id){
    return this._request({
        method:'getSeminar',
        id,
    })
}
o._getSeminars=function(cu){
    return this._request({
        method:'getSeminars',
        currentUser:cu,
    })
}
o._getUserByUnsafeCredential=function(c){
    if(!(
        typeof c=='object'&&
        typeof c.id=='string'&&
        typeof c.password=='string'
    ))
        return null
    return this._getUserByCredential({
        id:         c.id,
        password:   c.password,
    })
}
o._getUserByCredential=function(c){
    return this._request({
        method:'getUserByCredential',
        credential:c,
    })
}
o._getUserById=function(id){
    return this._request({
        method:'getUserById',
        id,
    })
}
o._getUserByType=function(cu,type){
    return this._request({
        method:'getUserByType',
        currentUser:cu,
        type,
    })
}
o._getUserByUsername=function(username){
    return this._request({
        method:'getUserByUsername',
        username,
    })
}
o._getUserlist=function(currentUser){
    return this._request({
        method:'getUserlist',
        currentUser,
    })
}
o._getInvitationCode=function(currentUser){
    return this._request({
        method:'getInvitationCode',
        currentUser,
    })
}
export default o
