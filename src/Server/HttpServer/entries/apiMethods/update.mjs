let update={
    async inPresale(doc,cu){
        if(!(
            typeof doc.value=='object'
        ))
            return['status',400]
        return['responseJson',await this._inPresale(cu,doc.value)]
    },
    async setMedievalObject(doc,cu){
        if(!(
            typeof doc.id=='string'&&
            typeof doc.value=='object'
        ))
            return['status',400]
        return['responseJson',await this._setMedievalObject(cu,doc)]
    },
    async setPresaleObject(doc,cu){
        if(!(
            typeof doc.id=='string'&&
            typeof doc.value=='object'
        ))
            return['status',400]
        return['responseJson',await this._setPresaleObject(cu,doc)]
    },
    async updateContact(doc,cu){
        if(!(
            typeof doc.doc=='object'
        ))
            return['status',400]
        return['responseJson',await this._updateContact(cu,doc.doc)]
    },
    async updateFaq(doc,cu){
        if(!(
            typeof doc.doc=='object'
        ))
            return['status',400]
        return['responseJson',await this._updateFaq(cu,doc.doc)]
    },
    async updateHomepage(doc,cu){
        if(!(
            typeof doc.doc=='object'
        ))
            return['status',400]
        return['responseJson',await this._updateHomepage(cu,doc.doc)]
    },
    async updatePassword(doc,cu){
        let tu
        if(!(
            typeof doc.user=='string'&&
            typeof doc.password=='string'&&
            cu&&
            (tu=await this._getUserById(doc.user))
        ))
            return['status',400]
        return['responseJson',
            await this._updatePassword(cu,tu,doc.password)
        ]
    },
    async updateSeminar(doc,cu){
        if(!(
            typeof doc.id=='string'&&
            typeof doc.doc=='object'
        ))
            return['status',400]
        return['responseJson',
            await this._updateSeminar(cu,doc.id,doc.doc)
        ]
    },
    async updateStatus(doc,cu){
        if(!(
            typeof doc.type=='string'&&
            typeof doc.id=='string'&&
            typeof doc.value=='string'&&
            ['apply','feedback'].includes(doc.type)
        ))
            return['status',400]
        return['responseJson',
            await this._updateStatus(cu,doc.type,doc.id,doc.value)
        ]
    },
}
export default update
