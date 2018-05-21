let cut={
    async cutApply(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.cutApply(
            doc.id
        )}
    },
    async cutFeedback(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.cutFeedback(
            doc.id
        )}
    },
    async cutPresaleObject(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.cutPresaleObject(
            doc.id
        )}
    },
    async cutSeminar(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.cutSeminar(
            doc.id
        )}
    },
}
export default cut
