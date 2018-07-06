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
        this._medievalCol=  this.db.collection('medieval')
        this._newsCol=      this.db.collection('news')
        await Promise.all([
            (async()=>{
                if(!await this.getUserByType('root'))
                    await this.putUser({
                        username:'root',
                        password:'',
                        type:'root',
                    })
            })(),
            (async()=>{
                if(!await this.getUserByType('sysadmin'))
                    await this.putUser({
                        username:'sysadmin',
                        password:'',
                        type:'sysadmin',
                    })
            })(),
            (async()=>{
                if(!await this._siteCol.findOne({key:'homepage'}))
                    await this.setSite('homepage',{
                        mission:{},
                        rotation:{},
                    })
            })(),
            (async()=>{
                if(!await this._siteCol.findOne({key:'presale'}))
                    await this.setSite('presale',{})
            })(),
            (async()=>{
                if(!await this._siteCol.findOne({key:'faq'}))
                    await this.setSite('faq',{})
            })(),
            (async()=>{
                if(!await this._siteCol.findOne({key:'contact'}))
                    await this.setSite('contact',{})
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
