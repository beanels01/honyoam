import mongodb from 'mongodb'
import sha256 from './sha256'
async function putApply(
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
async function putCustomer(){
    return(await this._customerCol.insertOne({})).insertedId
}
async function putFeedback(
    content,
){
    let res=await this._feedbackCol.insertOne({
        content,
        status:0,
    })
    return res.insertedId
}
async function putImage(doc){
    let res=await this._imageCol.insertOne({
        user:doc.user,
    })
    return res.insertedId
}
async function putMedievalObject(){
    return(await this._medievalCol.insertOne({})).insertedId
}
async function putNews(language){
    return(await this._newsCol.insertOne({language})).insertedId
}
async function putPresaleObject(){
    return(await this._presaleCol.insertOne({})).insertedId
}
async function putSeminar(language){
    return(await this._seminarCol.insertOne({language})).insertedId
}
async function putSubscribe(address){
    return(await this._subscribeCol.insertOne({address})).insertedId
}
async function putUser(doc){
    return(await this._userCol.insertOne({
        username:       doc.username,
        password:       new mongodb.Binary(sha256(doc.password)),
        type:           doc.type,
        realname:       doc.realname,
    })).insertedId
}
export default{
    putApply,
    putCustomer,
    putFeedback,
    putImage,
    putMedievalObject,
    putNews,
    putPresaleObject,
    putSeminar,
    putSubscribe,
    putUser,
}
