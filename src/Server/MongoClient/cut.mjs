import mongodb from 'mongodb'
let
    {
        ObjectID,
    }=mongodb
async function cutApply(id){
    await this._applyCol.deleteOne({
        _id:new ObjectID(id),
    })
}
async function cutFeedback(id){
    await this._feedbackCol.deleteOne({
        _id:new ObjectID(id),
    })
}
async function cutPresaleObject(id){
    await this._presaleCol.deleteOne({
        _id:new ObjectID(id),
    })
}
async function cutSeminar(id){
    await this._seminarCol.deleteOne({
        _id:new ObjectID(id),
    })
}
export default{
    cutApply,
    cutFeedback,
    cutPresaleObject,
    cutSeminar,
}
