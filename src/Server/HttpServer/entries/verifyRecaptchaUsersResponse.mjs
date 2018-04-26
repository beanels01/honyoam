import querystring from     'querystring'
import https from           'https'
function verifyRecaptchaUsersResponse(secret,response){
    return new Promise(rs=>{
        https.request({
            method:'POST',
            hostname:'www.google.com',
            path:'/recaptcha/api/siteverify',
            headers:{
                'content-type':'application/x-www-form-urlencoded',
            }
        },res=>{
            let a=[]
            res.on('data',a.push.bind(a))
            res.on('end',()=>{
                rs(JSON.parse(Buffer.concat(a).toString()).success)
            })
        }).end(querystring.stringify({
            secret,
            response,
        }))
    })
}
export default verifyRecaptchaUsersResponse
