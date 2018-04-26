let o={}
o.addApply=async function(
    people,
    interested,
    title,
){
    return(await this._applyCol.insertOne({
        people,
        interested,
        status:0,
        title,
    })).insertedId
}
o.addFeedback=async function(
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
o.addImage=async function(doc){
    let res=await this._imageCol.insertOne({
        user:doc.user,
    })
    return res.insertedId
}
o.addSeminar=async function(language){
    return(await this._seminarCol.insertOne({language})).insertedId
}
export default o
