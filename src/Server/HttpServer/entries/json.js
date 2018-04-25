let
    apiMethods=         require('./apiMethods'),
    concat=             require('./concat')
async function json(rq,rs,currentUser){
    let
        txt=(await concat(rq)).toString(),
        doc
    try{
        doc=JSON.parse(txt)
    }catch(e){
        rs.writeHead(400)
        rs.end()
        return 1
    }
    if(typeof doc!='object'){
        rs.writeHead(400)
        rs.end()
        return 1
    }
    if(doc.method in apiMethods){
        let res=await apiMethods[doc.method].call(
            this,doc,currentUser
        )
        if(res instanceof Array){
            if(res[0]=='status'){
                rs.writeHead(res[1])
                rs.end()
            }else if(res[0]=='responseJson'){
                rs.writeHead(200,{
                    'content-type':'text/plain;charset=utf-8'
                })
                rs.end(JSON.stringify(res[1]))
            }
        }
        return 1
    }
}
module.exports=json
