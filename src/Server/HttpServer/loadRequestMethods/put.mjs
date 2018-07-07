let o={}
o._putApply=function(doc){
    return this._request({
        method:             'putApply',
        people:             doc.people.map(a=>({
            name:   a.name,
            gender: a.gender,
            email:  a.email,
            phone:  a.phone,
        })),
        interested:         doc.interested,
        title:              doc.title,
        currentLanguage:    doc.currentLanguage,
    })
}
o._putMedievalObject=function(currentUser){
    return this._request({
        method:             'putMedievalObject',
        currentUser,
    })
}
o._putPresaleObject=function(currentUser){
    return this._request({
        method:             'putPresaleObject',
        currentUser,
    })
}
o._putFeedback=function(doc){
    return this._request({
        method:             'putFeedback',
        name:               doc.name,
        email:              doc.email,
        phone:              doc.phone,
        question:           doc.question,
    })
}
o._putImage=function(currentUser){
    return this._request({
        method:'putImage',
        currentUser,
    })
}
o._putSeminar=function(currentUser,language){
    return this._request({
        method:'putSeminar',
        currentUser,
        language,
    })
}
o._putNews=function(currentUser,language){
    return this._request({
        method:             'putNews',
        currentUser,
        language,
    })
}
export default o
