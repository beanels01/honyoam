let cut={
    async cutApply(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.deleteApply(
            doc.id
        )}
    },
    async cutFeedback(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.deleteFeedback(
            doc.id
        )}
    },
}
export default cut
