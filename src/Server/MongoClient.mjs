import mongodb from                         'mongodb'
import put from                             './MongoClient/put'
import get from                             './MongoClient/get'
import set from                             './MongoClient/set'
import cut from                             './MongoClient/cut'
let{
    MongoClient:RawMongoClient,
    ObjectID,
    Binary,
}=mongodb
function MongoClient(config){
    this.config=config
    this.load=(async()=>{
        this.db=(await RawMongoClient.connect(config.url)).db('honyoam')
        this._applyCol=     this.db.collection('apply')
        this._feedbackCol=  this.db.collection('feedback')
        this._imageCol=     this.db.collection('image')
        this._siteCol=      this.db.collection('site')
        this._seminarCol=   this.db.collection('seminar')
        this._userCol=      this.db.collection('user')
        this._presaleCol=   this.db.collection('presale')
        await Promise.all([
            (async()=>{
                if(!await this.getUserByType('root'))
                    await this.addUser({
                        username:'root',
                        password:'',
                        type:'root',
                    })
            })(),
            (async()=>{
                if(!await this.getUserByType('sysadmin'))
                    await this.addUser({
                        username:'sysadmin',
                        password:'',
                        type:'sysadmin',
                    })
            })(),
            (async()=>{
                if(!await this._siteCol.findOne({key:'homepage'}))
                    await this.updateSite('homepage',{
                        mission:{},
                        rotation:{},
                    })
            })(),
            (async()=>{
                if(!await this._siteCol.findOne({key:'presale'}))
                    await this.updateSite('presale',{})
            })(),
            (async()=>{
                if(!await this._siteCol.findOne({key:'faq'}))
                    await this.updateSite('faq',{})
            })(),
            (async()=>{
                if(!await this._siteCol.findOne({key:'contact'}))
                    await this.updateSite('contact',{})
            })(),
        ])
    })()
}
Object.assign(MongoClient.prototype,put,get,set,cut)
MongoClient.prototype.freezeUser=function(user){
    return this._userCol.updateOne(
        {_id:new ObjectID(user._id)},
        {$set:{freezed:true}}
    )
}
export default MongoClient
