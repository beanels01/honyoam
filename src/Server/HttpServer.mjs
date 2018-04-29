import http from                'http'
import fs from                  'fs'
import fsPromises from          'fs/promises'
import url from                 'url'
import EventEmmiter from        'events'
import etag from                'etag'
import path from                'path'
import mime from                'mime'
import entries from             './HttpServer/entries'
import loadRequestMethods from  './HttpServer/loadRequestMethods'
function HttpServer(config){
    this.config=Object.create(config)
    this.computed={
        host:           new url.URL(this.config.host),
        allowedOrigin:  new url.URL(this.config.allowedOrigin),
    }
    this.httpServer=http.createServer()
    this.httpServer.on('request',this.handleRequest.bind(this))
    this.httpServer.listen(this.computed.host.port)
}
Object.setPrototypeOf(HttpServer.prototype,EventEmmiter.prototype)
loadRequestMethods(HttpServer.prototype)
HttpServer.prototype._isDefinedHost=function(host){
    return host==this.computed.host.host
}
HttpServer.prototype._isTrustedOrigin=function(origin){
    return origin==this.computed.allowedOrigin.origin
}
HttpServer.prototype.handleRequest=async function(rq,rs){
    if(!(
        this._isDefinedHost(rq.headers.host)
    )){
        rs.writeHead(400)
        return rs.end()
    }
    let parsedUrl
    try{
        parsedUrl=new url.URL(rq.url,'a://a')
    }catch(e){
        rs.writeHead(400)
        return rs.end()
    }
    {
        let entry=await entries.call(this,parsedUrl.pathname)
        if(entry){
            try{
                let res=await entry.call(this,rq,rs)
                if(res instanceof Array){
                    if(res[0]=='headersContent'){
                        if(!res[1].etag)
                            res[1].etag=etag(res[2])
                        if(res[1].etag==rq.headers['if-none-match']){
                            rs.writeHead(304)
                            rs.end()
                        }else{
                            rs.writeHead(200,res[1])
                            rs.end(res[2])
                        }
                    }
                }
            }catch(e){
                console.error(e)
                rs.writeHead(500)
                rs.end()
            }
            return
        }
    }
    for(let p of[
        `honyoam/src/Server/HttpServer/static${
            parsedUrl.pathname
        }`,
        `static${parsedUrl.pathname}`,
    ])if(await fileExist(p)){
        let et=etag(await fsPromises.stat(p))
        if(et==rq.headers['if-none-match']){
            rs.writeHead(304)
            rs.end()
        }else{
            rs.writeHead(200,{
                etag:et,
                'content-type':mime.getType(p)||'application/octet-stream',
            })
            fs.createReadStream(p).pipe(rs)
        }
        return
    }
    rs.writeHead(404)
    return rs.end()
    async function fileExist(p){
        try{
            return(await fsPromises.stat(p)).isFile()
        }catch(e){
            if(e.code=='ENOENT')
                return 0
            throw e
        }
        return 1
    }
}
export default HttpServer
