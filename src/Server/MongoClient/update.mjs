import mongodb from 'mongodb'
import sha256 from './sha256'
let
    {
        ObjectID,
        Binary,
    }=mongodb,
    o={}
o.updateApplyStatus=async function(id,status){
    await this._applyCol.updateOne({
        _id:new ObjectID(id),
    },{
        $set:{
            status,
        },
    })
}
o.updateFeedbackStatus=async function(id,status){
    await this._feedbackCol.updateOne({
        _id:new ObjectID(id),
    },{
        $set:{
            status,
        },
    })
}
o.updateSite=async function(key,value){
    await this._siteCol.updateOne({
        key,
    },{
        $set:{
            value,
        },
    },{
        upsert:true,
    })
}
o.updateSeminar=async function(id,doc){
    await this._seminarCol.updateOne(
        {_id:new ObjectID(id)},
        {$set:doc}
    )
}
o.updateUserPassword=function(user,password){
    return this._userCol.updateOne(
        {_id:new ObjectID(user._id)},
        {$set:{password:new Binary(sha256(password))}}
    )
}
export default o
