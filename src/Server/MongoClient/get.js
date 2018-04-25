let
    {
        ObjectID,
        Binary,
    }=require('mongodb'),
    sha256=require('./sha256'),
    o={}
o.getApplies=async function(){
    return this._applyCol.find({}).toArray()
}
o.getFeedbacks=async function(){
    return this._feedbackCol.find({}).toArray()
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
module.exports=o
