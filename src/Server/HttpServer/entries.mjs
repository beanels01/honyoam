import Vue from                 'vue'
import formidable from          'formidable'
import fsPromises from          'fs/promises'
import rfc6265 from             'rfc6265'
import json from                './entries/json'
import calcFaqResult from       './entries/calcFaqResult'
import calcContactResult from   './entries/calcContactResult'
import calcHomepageResult from  './entries/calcHomepageResult'
import calcNewsResult from      './entries/calcNewsResult'
import calcMedievalResult from  './entries/calcMedievalResult'
import calcPresaleResult from   './entries/calcPresaleResult'
import calcPresaleIdResult from './entries/calcPresaleIdResult'
import calcPresaleIdConceptResult from './entries/calcPresaleIdConceptResult'
import calcPresaleIdEnvironmentResult from './entries/calcPresaleIdEnvironmentResult'
import calcPresaleIdTrafficResult from './entries/calcPresaleIdTrafficResult'
import calcPresaleIdPatternResult from './entries/calcPresaleIdPatternResult'
import calcPresaleIdSummaryResult from './entries/calcPresaleIdSummaryResult'
import calcPresaleIdVideoResult from './entries/calcPresaleIdVideoResult'
import calcSeminarResult from   './entries/calcSeminarResult'
import manage from              './entries/manage'
import form from                './entries/form'
/*
The server-side version of Vue is different from the client-size one. So I pass it to the ES modules through the global object.
*/
global.Vue=Vue
async function root(rq,rs){
    if(!(
        rq.method=='GET'
    )){
        rs.writeHead(400)
        return rs.end()
    }
    rs.writeHead(303,{
        location:'/zh-Hant',
    })
    return rs.end()
}
async function api(rq,rs){
    if(!(
        rq.method=='POST'&&(
            !rq.headers.origin||this._isTrustedOrigin(rq.headers.origin)
        )
    )){
        rs.writeHead(400)
        return rs.end()
    }
    let
        currentUser,
        cookie
    try{
        rq.headers.cookie||0()
        cookie=rfc6265.parseAsCookieString(rq.headers.cookie.trim())
    }catch(e){
        cookie={}
    }
    {
        let credential
        try{
            credential=JSON.parse(decodeURIComponent(cookie.login[0]))
        }catch(e){}
        currentUser=await this._getUserByUnsafeCredential(credential)
    }
    let contentType=rq.headers['content-type'].split(';')[0].trim()
    if(contentType=='application/json'){
        if(await json.call(this,rq,rs,currentUser))
            return
    }else if(contentType=='multipart/form-data'){
        if(await formData.call(this,rq,rs,currentUser))
            return
    }else if(contentType=='application/x-www-form-urlencoded'){
        return form.call(this,rq,rs,currentUser)
    }
    rs.writeHead(400)
    rs.end()
}
async function formData(rq,rs,currentUser){
    let
        formData=await new Promise((rs,rj)=>{
            let form=new formidable.IncomingForm
            form.uploadDir='upload'
            form.parse(rq,(err,fields,files)=>
                err?rj(err):rs({fields,files})
            )
        }),
        res
    if(formData.fields.method=='addImage'){
        res=await this._addImage(currentUser)
        let f=formData.files.file
        await fsPromises.rename(f.path,`static/image/${res.res}`)
    }
    rs.writeHead(200,{
        'content-type':'text/plain;charset=utf-8'
    })
    rs.end(JSON.stringify(res))
    return 1
}
let staticMap={
    '/':        root,
    '/api':     api,
    '/manage':  manage,
}
export default async function(pathname){
    let language=(await this._getLanguage()).res
    if(staticMap[pathname])
        return staticMap[pathname]
    {
        let a=pathname.split('/')
        if(a[1] in language&&a.length<4){
            let f
            if(a.length<3)
                f=calcHomepageResult
            else if(a[2]=='contact')
                f=calcContactResult
            else if(a[2]=='qa')
                f=calcFaqResult
            else if(a[2]=='news')
                f=calcNewsResult
            else if(a[2]=='medieval')
                f=calcMedievalResult
            else if(a[2]=='presale')
                f=calcPresaleResult
            else if(a[2]=='presaleId')
                f=calcPresaleIdResult
            else if(a[2]=='presaleIdConcept')
                f=calcPresaleIdConceptResult
            else if(a[2]=='presaleIdEnvironment')
                f=calcPresaleIdEnvironmentResult
            else if(a[2]=='presaleIdTraffic')
                f=calcPresaleIdTrafficResult
            else if(a[2]=='presaleIdPattern')
                f=calcPresaleIdPatternResult
            else if(a[2]=='presaleIdSummary')
                f=calcPresaleIdSummaryResult
            else if(a[2]=='presaleIdAv')
                f=calcPresaleIdVideoResult
            if(f)
                return function(rq,rs){
                    if(!(
                        rq.method=='GET'
                    )){
                        rs.writeHead(400)
                        return rs.end()
                    }
                    return f.call(this,rq,rs,a[1])
                }
        }
        if(
            a.length==4&&
            a[1] in language&&
            a[2]=='seminar'
        )
            return function(rq,rs){
                if(!(
                    rq.method=='GET'
                )){
                    rs.writeHead(400)
                    return rs.end()
                }
                return calcSeminarResult.call(this,rq,rs,a[1],0,a[3])
            }
    }
}
