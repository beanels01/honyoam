import get from './loadRequestMethods/get'
export default o=>{
    Object.assign(o,get)
    o._request=function(doc){
        let r={doc}
        this.emit('request',r)
        return r.res
    }
    o._addApply=function(doc){
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
    o._addPresaleObject=function(currentUser){
        return this._request({
            method:             'putPresaleObject',
            currentUser,
        })
    }
    o._addFeedback=function(doc){
        return this._request({
            method:             'putFeedback',
            name:               doc.name,
            email:              doc.email,
            phone:              doc.phone,
            question:           doc.question,
        })
    }
    o._addImage=function(currentUser){
        return this._request({
            method:'putImage',
            currentUser,
        })
    }
    o._addSeminar=function(currentUser,language){
        return this._request({
            method:'putSeminar',
            currentUser,
            language,
        })
    }
    o._cutPresaleObject=function(currentUser,id){
        return this._request({
            method:             'cutPresaleObject',
            id,
            currentUser,
        })
    }
    o._deleteApply=function(currentUser,id){
        return this._request({
            method:             'cutApply',
            id,
            currentUser,
        })
    }
    o._deleteFeedback=function(currentUser,id){
        return this._request({
            method:             'cutFeedback',
            id,
            currentUser,
        })
    }
    o._freezeUser=function(cu,tu){
        return this._request({
            method:'freezeUser',
            currentUser:cu,
            targetUser:tu,
        })
    }
    o._inPresale=function(cu,value){
        return this._request({
            method:'setPresale',
            currentUser:cu,
            value,
        })
    }
    o._outPresale=function(){
        return this._request({
            method:'getPresale',
        })
    }
    o._outPresaleList=function(cu){
        return this._request({
            method:'getPresaleList',
            currentUser:cu,
        })
    }
    o._outPresaleList0=function(language){
        return this._request({
            method:'getPresaleList0',
            language,
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
    o._setPresaleObject=function(currentUser,doc){
        return this._request({
            method:'setPresaleObject',
            currentUser,
            id:doc.id,
            value:doc.value,
        })
    }
    o._updateContact=function(currentUser,value){
        return this._request({
            method:         'setContact',
            currentUser,
            value,
        })
    }
    o._updateFaq=function(currentUser,value){
        return this._request({
            method:         'setFaq',
            currentUser,
            value,
        })
    }
    o._updateHomepage=function(currentUser,value){
        return this._request({
            method:'setHomepage',
            currentUser,
            value,
        })
    }
    o._updatePassword=function(currentUser,targetUser,password){
        return this._request({
            method:'setPassword',
            currentUser,
            targetUser,
            password,
        })
    }
    o._updateSeminar=function(currentUser,id,doc){
        return this._request({
            method:'setSeminar',
            currentUser,
            id,
            doc,
        })
    }
    o._updateStatus=function(currentUser,type,id,value){
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
}
