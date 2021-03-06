import faqClasses from      './get/faqClasses'
import place from           '../../place'
export default{
    async getAllNews(doc){
        return{res:await this.honyoamMongoClient.getAllNews(doc.language)}
    },
    async getApplies(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.getApplies()}
    },
    async getCustomer(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.getCustomer(doc.id)}
    },
    async getCustomerList(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.getCustomerList()}
    },
    async getContact(doc){
        return{res:await this.honyoamMongoClient.getSite('contact')}
    },
    async getFaqClasses(doc){
        return{res:faqClasses}
    },
    async getFaq(doc){
        return{res:await this.honyoamMongoClient.getSite('faq')}
    },
    async getFeedbacks(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.getFeedbacks()}
    },
    async getHomepage(doc){
        return{res:await this.honyoamMongoClient.getSite('homepage')}
    },
    async getInvitationCode(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:this.invitationCode}
    },
    async getMainSeminar(){
        return{res:await this.honyoamMongoClient.getMainSeminar()}
    },
    async getMedieval(){
        return{res:await this.honyoamMongoClient.getSite('medieval')}
    },
    async getMedievalList(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.getMedievalList()}
    },
    async getMedievalList0(doc){
        return{res:await this.honyoamMongoClient.getMedievalList0(
            doc.language
        )}
    },
    async getMedievalObject(doc){
        return{res:await this.honyoamMongoClient.getMedievalObject(doc.id)}
    },
    async getNewsList(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.getNewsList(doc.language)}
    },
    async getNews(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.getNews(doc.id)}
    },
    async getPlace(doc){
        return{res:place}
    },
    async getPresale(){
        return{res:await this.honyoamMongoClient.getSite('presale')}
    },
    async getPresaleList(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.getPresaleList()}
    },
    async getPresaleList0(doc){
        return{res:await this.honyoamMongoClient.getPresaleList0(
            doc.language
        )}
    },
    async getPresaleObject(doc){
        return{res:await this.honyoamMongoClient.getPresaleObject(doc.id)}
    },
    getRate(){
        return{res:this.data.rate}
    },
    async getSeminar(doc){
        return{res:await this.honyoamMongoClient.getSeminar(doc.id)}
    },
    async getSeminars(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.getSeminars()}
    },
    async getSubscribe(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.getSubscribe()}
    },
    async getUserByCredential(doc){
        let u=await this.honyoamMongoClient.getUserByCredential(
            doc.credential
        )
        return u&&!u.freezed?u:null
    },
    async getUserById(doc){
        return this.honyoamMongoClient.getUserById(doc.id)
    },
    async getUserByType(doc){
        let res=await this.honyoamMongoClient.getUserByType(
            doc.type
        )
        return res?{res:res._id}:{err:'not found'}
    },
    async getUserByUsername(doc){
        let res=await this.honyoamMongoClient.getUserByUsername(
            doc.username
        )
        return res?{res:res._id}:{err:'not found'}
    },
    async getUserlist(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:(await this.honyoamMongoClient.getUserlist()).map(u=>({
            _id:        u._id,
            username:   u.username,
            type:       u.type,
            realname:   u.realname,
            freezed:    u.freezed,
        }))}
    },
}
