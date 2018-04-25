function formPost(d){
    let form=Object.assign(document.createElement('form'),{
        method:     'POST',
        action:     'api',
        target:     '_blank',
        enctype:    'application/json',
    })
    Object.entries(d).forEach(([name,value])=>{
        form.appendChild(Object.assign(document.createElement('input'),{
            name,
            value,
        }))
    })
    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
}
function post(d){
    let r=new XMLHttpRequest
    r.open('POST','api')
    r.setRequestHeader('content-type','application/json')
    r.send(JSON.stringify(d))
    return new Promise(rs=>
        r.onreadystatechange=()=>
            r.readyState==4&&r.status==200&&
                rs(JSON.parse(r.responseText))
    )
}
function postForm(d){
    let r=new XMLHttpRequest
    r.open('POST','api')
    r.send(toFormData(d))
    return new Promise(rs=>
        r.onreadystatechange=()=>
            r.readyState==4&&r.status==200&&
                rs(JSON.parse(r.responseText))
    )
    function toFormData(doc){
        let formdata=new FormData
        for(let i in doc)
            formdata.append(i,doc[i])
        return formdata
    }
}
async function login(username,password){
    let id=(await post({
        method:'getUserByUsername',
        username,
    })).res
    let res=await post({
        method:'login',
        id,
        password,
    })
    if(res)
        document.cookie=`login=${encodeURIComponent(JSON.stringify({
            id,
            password,
        }))}; path=/`
    return res
}
function logout(){
    document.cookie='login=;path=/;max-age=0'
}
export default{
    formPost,
    post,
    postForm,
    login,
    logout,
}
