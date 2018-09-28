import mongodb from 'mongodb'
import sha256 from './sha256'
let
    {
        ObjectID,
        Binary,
    }=mongodb,
    o={}
o.getAllNews=async function(language){
    return this._newsCol.find({publish:true,language}).toArray()
}
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
o.getNews=async function(id){
    let objectId=new ObjectID(id)
    let res=await this._newsCol.findOne({
        _id:objectId,
    })
    delete res._id
    res.timestamp=objectId.getTimestamp()
    return res
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
        timestamp:(new ObjectID(a._id)).getTimestamp(),
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
o.getMainSeminar=async function(){
    let seminar=await this._seminarCol.findOne({main:true})
    return seminar&&seminar._id
}
o.getMedievalObject=async function(id){
    let res=await this._medievalCol.findOne({
        _id:        new ObjectID(id),
    })
    delete res._id
    return res
}
o.getMedievalList=async function(){
    return(await this._medievalCol.find({}).toArray()).map(a=>({
        id:     a._id,
        date:   a.date||(new ObjectID(a._id)).getTimestamp(),
        name:
            a.language&&
            a.language['zh-Hant']&&
            a.language['zh-Hant'].name||
            '未命名',
    }))
}
o.getMedievalList0=async function(language){
    return(await this._medievalCol.find({publish:true}).toArray()).map(a=>{
        try{
            return{
                id:             a._id,
                date:           a.date||(new ObjectID(a._id)).getTimestamp(),
                place0:         a.place0,
                place1:         a.place1,
                image:          a.image,
                name:           a.language[language].name,
                place:          a.language[language].place,
                nearestStation: a.language[language].nearestStation,
                pattern:        a.pattern,
                area:           a.area,
                price:          a.price,
                dateYear:       a.dateYear,
                dateMonth:      a.dateMonth,
            }
        }catch(e){
            return 0
        }
    }).filter(a=>a)
}
o.getNewsList=async function(language){
    return this._newsCol.find({language}).toArray()
}
o.getPresaleList=async function(){
    return(await this._presaleCol.find({}).toArray()).map(a=>({
        id:     a._id,
        date:   a.date||(new ObjectID(a._id)).getTimestamp(),
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
            patternClass=['1K','1DK','1LDK','2LDK','3LDK','4LDK'],
            pattern=a.pattern.map(a=>a.name).sort((a,b)=>
                patternClass.indexOf(a)-patternClass.indexOf(b)
            ),
            area=a.pattern.map(a=>a.area),
            price=a.pattern.map(a=>a.price)
        return{
            id:         a._id,
            date:       a.date||(new ObjectID(a._id)).getTimestamp(),
            place0:     a.place0,
            place1:     a.place1,
            image:      a.image,
            name:       a.language[language].name,
            subName:    a.language[language].subName,
            brief0:     a.language[language].brief0,
            brief1:     a.language[language].brief1,
            soldout:    a.soldout,
            patternMin: pattern[0],
            patternMax: pattern[pattern.length-1],
            pattern,
            areaMin:    Math.min(...area),
            areaMax:    Math.max(...area),
            priceMin:   Math.min(...price),
            priceMax:   Math.max(...price),
        }
    })
}
export default o
