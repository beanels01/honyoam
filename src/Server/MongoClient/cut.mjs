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
export default{
    cutApply,
    cutFeedback,
}
