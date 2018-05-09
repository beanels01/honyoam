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
            method:             'addApply',
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
    o._addFeedback=function(doc){
        return this._request({
            method:             'addFeedback',
            name:               doc.name,
            email:              doc.email,
            phone:              doc.phone,
            question:           doc.question,
        })
    }
    o._addImage=function(currentUser){
        return this._request({
            method:'addImage',
            currentUser,
        })
    }
    o._addSeminar=function(currentUser,language){
        return this._request({
            method:'addSeminar',
            currentUser,
            language,
        })
    }
    o._deleteApply=function(currentUser,id){
        return this._request({
            method:             'deleteApply',
            id,
            currentUser,
        })
    }
    o._deleteFeedback=function(currentUser,id){
        return this._request({
            method:             'deleteFeedback',
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
            method:'inPresale',
            currentUser:cu,
            value,
        })
    }
    o._outPresale=function(){
        return this._request({
            method:'outPresale',
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
    o._updateContact=function(currentUser,value){
        return this._request({
            method:         'updateContact',
            currentUser,
            value,
        })
    }
    o._updateFaq=function(currentUser,value){
        return this._request({
            method:         'updateFaq',
            currentUser,
            value,
        })
    }
    o._updateHomepage=function(currentUser,value){
        return this._request({
            method:'updateHomepage',
            currentUser,
            value,
        })
    }
    o._updatePassword=function(currentUser,targetUser,password){
        return this._request({
            method:'updatePassword',
            currentUser,
            targetUser,
            password,
        })
    }
    o._updateSeminar=function(currentUser,id,doc){
        return this._request({
            method:'updateSeminar',
            currentUser,
            id,
            doc,
        })
    }
    o._updateStatus=function(currentUser,type,id,value){
        return this._request({
            method:{
                apply:'updateApplyStatus',
                feedback:'updateFeedbackStatus',
            }[type],
            currentUser,
            id,
            value,
        })
    }
}
