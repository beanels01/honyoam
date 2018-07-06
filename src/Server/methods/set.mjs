import user from './user'
export default{
    async setApplyStatus(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.setApplyStatus(
            doc.id,doc.value
        )}
    },
    async setContact(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.setSite(
            'contact',doc.value
        )}
    },
    async setFeedbackStatus(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.setFeedbackStatus(
            doc.id,doc.value
        )}
    },
    async setHomepage(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.setSite(
            'homepage',doc.value
        )}
    },
    async setFaq(doc){
        if(!(
            doc.currentUser&&
            ['root','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.setSite(
            'faq',doc.value
        )}
    },
    async setPassword(doc){
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
        await this.honyoamMongoClient.setUserPassword(
            doc.targetUser,doc.password
        )
        return{res:null}
    },
    async setPresale(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.setSite(
            'presale',doc.value
        )}
    },
    async setMedievalObject(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.setMedievalObject(
            doc.id,
            doc.value
        )}
    },
    async setNews(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.setNews(
            doc.id,
            doc.data
        )}
    },
    async setPresaleObject(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.setPresaleObject(
            doc.id,
            doc.value
        )}
    },
    async setSeminar(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.setSeminar(
            doc.id,
            doc.doc
        )}
    },
}
