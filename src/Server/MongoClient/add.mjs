import mongodb from 'mongodb'
import sha256 from './sha256'
async function addApply(
    people,
    interested,
    title,
    currentLanguage,
){
    return(await this._applyCol.insertOne({
        people,
        interested,
        status:0,
        title,
        currentLanguage,
    })).insertedId
}
async function addFeedback(
    name,
    email,
    phone,
    question,
){
    let res=await this._feedbackCol.insertOne({
        name,
        email,
        phone,
        question,
        status:0,
    })
    return res.insertedId
}
async function addImage(doc){
    let res=await this._imageCol.insertOne({
        user:doc.user,
    })
    return res.insertedId
}
async function addPresaleObject(){
    return(await this._presaleCol.insertOne({})).insertedId
}
async function addSeminar(language){
    return(await this._seminarCol.insertOne({language})).insertedId
}
async function addUser(doc){
    return(await this._userCol.insertOne({
        username:doc.username,
        password:new mongodb.Binary(sha256(doc.password)),
        type:doc.type,
        realname:doc.realname,
    })).insertedId
}
export default{
    addApply,
    addFeedback,
    addImage,
    addPresaleObject,
    addSeminar,
    addUser,
}
