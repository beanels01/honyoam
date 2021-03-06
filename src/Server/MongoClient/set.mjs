import mongodb from 'mongodb'
import sha256 from './sha256'
let
    {
        ObjectID,
        Binary,
    }=mongodb,
    o={}
async function setApplyStatus(id,status){
    await this._applyCol.updateOne({
        _id:new ObjectID(id),
    },{
        $set:{
            status,
        },
    })
}
async function setCustomer(id,value){
    await this._customerCol.updateOne({
        _id:new ObjectID(id),
    },{
        $set:value,
    })
}
async function setFeedbackStatus(id,status){
    await this._feedbackCol.updateOne({
        _id:new ObjectID(id),
    },{
        $set:{
            status,
        },
    })
}
async function setSeminar(id,doc){
    await this._seminarCol.updateOne(
        {_id:new ObjectID(id)},
        {$set:doc}
    )
}
async function setSite(key,value){
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
async function setMedievalObject(id,doc){
    await this._medievalCol.updateOne(
        {_id:new ObjectID(id)},
        {$set:doc}
    )
}
async function setNews(id,doc){
    await this._newsCol.updateOne(
        {_id:new ObjectID(id)},
        {$set:doc}
    )
}
async function setPresaleObject(id,doc){
    await this._presaleCol.updateOne(
        {_id:new ObjectID(id)},
        {$set:doc}
    )
}
function setUserPassword(user,password){
    return this._userCol.updateOne(
        {_id:new ObjectID(user._id)},
        {$set:{password:new Binary(sha256(password))}}
    )
}
export default{
    setApplyStatus,
    setCustomer,
    setFeedbackStatus,
    setSeminar,
    setSite,
    setMedievalObject,
    setNews,
    setPresaleObject,
    setUserPassword,
}
