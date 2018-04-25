module.exports={
    async addApply(doc){
        return{res:await this.honyoamMongoClient.addApply(
            doc.people,
            doc.interested,
            doc.title,
        )}
    },
    async addFeedback(doc){
        return{res:await this.honyoamMongoClient.addFeedback(
            doc.name,
            doc.email,
            doc.phone,
            doc.question,
        )}
    },
    async addImage(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.addImage(
            doc.currentUser._id
        )}
    },
    async addSeminar(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.addSeminar(doc.language)}
    },
}
