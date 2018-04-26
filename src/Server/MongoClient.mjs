import mongodb from                         'mongodb'
import add from                             './MongoClient/add'
import get from                             './MongoClient/get'
import update from                          './MongoClient/update'
import sha256 from                          './MongoClient/sha256'
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
Object.assign(MongoClient.prototype,add,get,update)
MongoClient.prototype.deleteApply=async function(id){
    await this._applyCol.deleteOne({
        _id:new ObjectID(id),
    })
}
MongoClient.prototype.deleteFeedback=async function(id){
    await this._feedbackCol.deleteOne({
        _id:new ObjectID(id),
    })
}
MongoClient.prototype.freezeUser=function(user){
    return this._userCol.updateOne(
        {_id:new ObjectID(user._id)},
        {$set:{freezed:true}}
    )
}
export default MongoClient
