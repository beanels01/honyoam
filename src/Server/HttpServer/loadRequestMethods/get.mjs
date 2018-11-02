import language from '../language'
let o={}
o._getApplies=function(currentUser){
    return this._request({
        method:             'getApplies',
        currentUser,
    })
}
o._getAllNews=function(language){
    return this._request({
        method:             'getAllNews',
        language,
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
o._getMainSeminar=function(id){
    return this._request({
        method:'getMainSeminar',
    })
}
o._getMedieval=function(){
    return this._request({
        method:'getMedieval',
    })
}
o._getMedievalList=async function(currentUser){
    return this._request({
        method:'getMedievalList',
        currentUser,
    })
}
o._getMedievalList0=function(language){
    return this._request({
        method:'getMedievalList0',
        language,
    })
}
o._getMedievalObject=function(id){
    return this._request({
        method:'getMedievalObject',
        id,
    })
}
o._getNews=function(cu,id){
    return this._request({
        method:'getNews',
        currentUser:cu,
        id,
    })
}
o._getNewsList=function(cu,language){
    return this._request({
        method:'getNewsList',
        currentUser:cu,
        language,
    })
}
o._getPlace=function(id){
    return this._request({
        method:'getPlace',
    })
}
o._getPresaleObject=function(id){
    return this._request({
        method:'getPresaleObject',
        id,
    })
}
o._getRate=function(){
    return this._request({
        method:             'getRate',
    })
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
o._getPresale=function(){
    return this._request({
        method:'getPresale',
    })
}
o._getPresaleList=function(cu){
    return this._request({
        method:'getPresaleList',
        currentUser:cu,
    })
}
o._getPresaleList0=function(language){
    return this._request({
        method:'getPresaleList0',
        language,
    })
}
o._getSubscribe=function(cu){
    return this._request({
        method:             'getSubscribe',
        currentUser:cu,
    })
}
export default o
