let o={}
o._setMedieval=function(cu,value){
    return this._request({
        method:'setMedieval',
        currentUser:cu,
        value,
    })
}
o._setMedievalObject=function(currentUser,doc){
    return this._request({
        method:'setMedievalObject',
        currentUser,
        id:doc.id,
        value:doc.value,
    })
}
o._setNews=function(currentUser,doc){
    return this._request({
        method:'setNews',
        currentUser,
        id:doc.id,
        data:doc.data,
    })
}
o._setPresale=function(cu,value){
    return this._request({
        method:'setPresale',
        currentUser:cu,
        value,
    })
}
o._setPresaleObject=function(currentUser,doc){
    return this._request({
        method:'setPresaleObject',
        currentUser,
        id:doc.id,
        value:doc.value,
    })
}
o._setContact=function(currentUser,value){
    return this._request({
        method:         'setContact',
        currentUser,
        value,
    })
}
o._setFaq=function(currentUser,value){
    return this._request({
        method:         'setFaq',
        currentUser,
        value,
    })
}
o._setHomepage=function(currentUser,value){
    return this._request({
        method:'setHomepage',
        currentUser,
        value,
    })
}
o._setPassword=function(currentUser,targetUser,password){
    return this._request({
        method:'setPassword',
        currentUser,
        targetUser,
        password,
    })
}
o._setSeminar=function(currentUser,id,doc){
    return this._request({
        method:'setSeminar',
        currentUser,
        id,
        doc,
    })
}
o._setStatus=function(currentUser,type,id,value){
    return this._request({
        method:{
            apply:'setApplyStatus',
            feedback:'setFeedbackStatus',
        }[type],
        currentUser,
        id,
        value,
    })
}
export default o
