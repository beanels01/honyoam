export default{
    async putApply(doc){
        return{res:await this.honyoamMongoClient.putApply(
            doc.people,
            doc.interested,
            doc.title,
            doc.currentLanguage,
        )}
    },
    async putFeedback(doc){
        return{res:await this.honyoamMongoClient.putFeedback(
            doc.name,
            doc.email,
            doc.phone,
            doc.question,
        )}
    },
    async putImage(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.putImage(
            doc.currentUser._id
        )}
    },
    async putMedievalObject(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.putMedievalObject()}
    },
    async putNews(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.putNews(doc.language)}
    },
    async putPresaleObject(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.putPresaleObject()}
    },
    async putSeminar(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.putSeminar(doc.language)}
    },
}
