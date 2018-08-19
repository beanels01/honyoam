let set={
    async setPresale(doc,cu){
        if(!(
            typeof doc.value=='object'
        ))
            return['status',400]
        return['responseJson',await this._setPresale(cu,doc.value)]
    },
    async setMedieval(doc,cu){
        if(!(
            typeof doc.value=='object'
        ))
            return['status',400]
        return['responseJson',await this._setMedieval(cu,doc.value)]
    },
    async setMedievalObject(doc,cu){
        if(!(
            typeof doc.id=='string'&&
            typeof doc.value=='object'
        ))
            return['status',400]
        return['responseJson',await this._setMedievalObject(cu,doc)]
    },
    async setNews(doc,cu){
        if(!(
            typeof doc.id=='string'&&
            typeof doc.data=='object'
        ))
            return['status',400]
        return['responseJson',await this._setNews(cu,doc)]
    },
    async setPresaleObject(doc,cu){
        if(!(
            typeof doc.id=='string'&&
            typeof doc.value=='object'
        ))
            return['status',400]
        return['responseJson',await this._setPresaleObject(cu,doc)]
    },
    async setFaq(doc,cu){
        if(!(
            typeof doc.doc=='object'
        ))
            return['status',400]
        return['responseJson',await this._setFaq(cu,doc.doc)]
    },
    async setHomepage(doc,cu){
        if(!(
            typeof doc.doc=='object'
        ))
            return['status',400]
        return['responseJson',await this._setHomepage(cu,doc.doc)]
    },
    async setPassword(doc,cu){
        let tu
        if(!(
            typeof doc.user=='string'&&
            typeof doc.password=='string'&&
            cu&&
            (tu=await this._getUserById(doc.user))
        ))
            return['status',400]
        return['responseJson',
            await this._setPassword(cu,tu,doc.password)
        ]
    },
    async setSeminar(doc,cu){
        if(!(
            typeof doc.id=='string'&&
            typeof doc.doc=='object'
        ))
            return['status',400]
        return['responseJson',
            await this._setSeminar(cu,doc.id,doc.doc)
        ]
    },
    async setStatus(doc,cu){
        if(!(
            typeof doc.type=='string'&&
            typeof doc.id=='string'&&
            ['apply','feedback'].includes(doc.type)
        ))
            return['status',400]
        return['responseJson',
            await this._setStatus(cu,doc.type,doc.id,doc.value)
        ]
    },
}
export default set
