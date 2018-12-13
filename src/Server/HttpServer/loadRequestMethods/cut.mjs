let o={}
o._cutMedievalObject=function(currentUser,id){
    return this._request({
        method:             'cutMedievalObject',
        id,
        currentUser,
    })
}
o._cutNews=function(currentUser,id){
    return this._request({
        method:             'cutNews',
        currentUser,
        id,
    })
}
o._cutPresaleObject=function(currentUser,id){
    return this._request({
        method:             'cutPresaleObject',
        id,
        currentUser,
    })
}
o._cutSeminar=function(currentUser,id){
    return this._request({
        method:             'cutSeminar',
        id,
        currentUser,
    })
}
o._cutApply=function(currentUser,id){
    return this._request({
        method:             'cutApply',
        id,
        currentUser,
    })
}
o._cutCustomer=function(currentUser,id){
    return this._request({
        method:             'cutCustomer',
        id,
        currentUser,
    })
}
o._cutFeedback=function(currentUser,id){
    return this._request({
        method:             'cutFeedback',
        id,
        currentUser,
    })
}
export default o
