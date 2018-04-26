import user from './user'
export default{
    async updateApplyStatus(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.updateApplyStatus(
            doc.id,doc.value
        )}
    },
    async updateContact(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.updateSite(
            'contact',doc.value
        )}
    },
    async updateFeedbackStatus(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.updateFeedbackStatus(
            doc.id,doc.value
        )}
    },
    async updateHomepage(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.updateSite(
            'homepage',doc.value
        )}
    },
    async updateFaq(doc){
        if(!(
            doc.currentUser&&
            ['root','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.updateSite(
            'faq',doc.value
        )}
    },
    async updatePassword(doc){
        if(!(
            doc.currentUser&&(
                doc.currentUser._id.equals(doc.targetUser._id)||
                doc.currentUser.type=='root'&&
                    doc.targetUser.type=='sysadmin'
            )
        ))
            return{err:'permission denied'}
        if(!user.isValidPassword(doc.password))
            return{err:'密碼格式不符。'}
        await this.honyoamMongoClient.updateUserPassword(
            doc.targetUser,doc.password
        )
        return{res:null}
    },
    async updateSeminar(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.updateSeminar(
            doc.id,
            doc.doc
        )}
    },
}
