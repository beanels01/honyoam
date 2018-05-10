import mongodb from 'mongodb'
import sha256 from './sha256'
let
    {
        ObjectID,
        Binary,
    }=mongodb,
    o={}
o.getApplies=async function(){
    let a=await this._applyCol.find({}).toArray()
    a.forEach(o=>{
        o.datetime=(new ObjectID(o._id)).getTimestamp()
    })
    return a
}
o.getFeedbacks=async function(){
    return this._feedbackCol.find({}).toArray()
}
o.getPresaleObject=async function(id){
    let res=await this._presaleCol.findOne({
        _id:        new ObjectID(id),
    })
    delete res._id
    return res
}
o.getSeminar=async function(id){
    let res=await this._seminarCol.findOne({
        _id:        new ObjectID(id),
    })
    delete res._id
    return res
}
o.getSeminars=async function(id){
    return(await this._seminarCol.find({}).toArray()).map(a=>({
        id:a._id,
        language:a.language,
        name:a.block0?a.block0.seminarName:'',
    }))
}
o.getSite=async function(key){
    return(await this._siteCol.findOne({key})).value
}
o.getUserByCredential=function(c){
    return this._userCol.findOne({
        _id:        new ObjectID(c.id),
        password:   new Binary(sha256(c.password)),
    })
}
o.getUserById=function(id){
    return this._userCol.findOne({_id:new ObjectID(id)})
}
o.getUserByType=function(type){
    return this._userCol.findOne({type})
}
o.getUserByUsername=function(username){
    return this._userCol.findOne({username})
}
o.getUserlist=function(){
    return this._userCol.find({}).toArray()
}
o.outPresaleList=async function(){
    return(await this._presaleCol.find({}).toArray()).map(a=>({
        id:a._id,
        name:
            a.language&&
            a.language['zh-Hant']&&
            a.language['zh-Hant'].name||
            '未命名',
    }))
}
o.outPresaleList0=async function(language){
    return(await this._presaleCol.find({publish:true}).toArray()).map(a=>{
        return{
            id:a._id,
            image:a.image,
            name:a.language[language].name,
            title:a.language[language].informationTitle,
            soldout:a.soldout,
            patternMin:'2LDK',
            patternMax:'3LDK',
            areaMin:76.38,
            areaMax:108.83,
            priceMin:4998,
            priceMax:9238,
        }
    })
}
export default o
