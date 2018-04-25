let
    calcHomepageResult= require('./calcHomepageResult'),
    calcSeminarResult=  require('./calcSeminarResult'),
    concat=             require('./concat'),
    {URL}=              require('url')
async function form(rq,rs,currentUser){
    let
        txt=(await concat(rq)).toString(),
        doc
    try{
        doc=(new URL(`?${txt}`,'http://a/')).searchParams
    }catch(e){
        rs.writeHead(400)
        rs.end()
    }
    {
        let o={}
        for(let [k,v] of doc.entries())
            o[k]=v
        doc=o
    }
    if(
        currentUser&&
        ['root','editor','sysadmin'].includes(currentUser.type)&&
        doc.method=='preview'
    )
        if(doc.target=='homepage')
            return calcHomepageResult.call(
                this,rq,rs,doc.language,JSON.parse(doc.patch),
            )
        else if(doc.target=='seminar')
            return calcSeminarResult.call(
                this,rq,rs,doc.language,JSON.parse(doc.patch),doc.id
            )
    rs.writeHead(400)
    rs.end()
}
module.exports=form
