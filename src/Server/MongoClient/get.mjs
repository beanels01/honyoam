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
o.getPresaleList=async function(){
    return(await this._presaleCol.find({}).toArray()).map(a=>({
        id:a._id,
        name:
            a.language&&
            a.language['zh-Hant']&&
            a.language['zh-Hant'].name||
            '未命名',
    }))
}
o.getPresaleList0=async function(language){
    return(await this._presaleCol.find({publish:true}).toArray()).map(a=>{
        let
            patternClass=['1K','1DK','1LDK','2LDK','3LDK','>3LDK'],
            pattern=a.pattern.map(a=>a.name).sort((a,b)=>
                patternClass.indexOf(a)-patternClass.indexOf(b)
            ),
            area=a.pattern.map(a=>a.area),
            price=a.pattern.map(a=>a.price)
        return{
            id:a._id,
            image:a.image,
            name:a.language[language].name,
            title:a.language[language].informationTitle,
            soldout:a.soldout,
            patternMin:pattern[0],
            patternMax:pattern[pattern.length-1],
            areaMin:Math.min(...area),
            areaMax:Math.max(...area),
            priceMin:Math.min(...price),
            priceMax:Math.max(...price)
        }
    })
}
export default o
