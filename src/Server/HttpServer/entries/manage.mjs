import rollup from          'rollup'
import etag from            'etag'
let
    manageJs,
    manageResult
async function calcManageJs(){
    let
        bundle=await rollup.rollup({input:'honyoam/src/Server/HttpServer/static/_manage/main.mjs'}),
        {code}=await bundle.generate({format:'iife'})
    return code
}
async function calcManageResult(){
    if(!manageJs)
        manageJs=await calcManageJs.call(this)
    let content=`<!doctype html>
<title>管理</title>
<link rel=stylesheet href=_manage/main.css>
<link href=https://cdn.quilljs.com/1.3.4/quill.snow.css rel=stylesheet>
<body>
<script src=_vue/vue.min.js></script>
<script src=_vueCropper.js></script>
<script src=_vueQuillEditor/vue-quill-editor.min.js></script>
${
    this.config.dev
    ?'<script type=module src=_manage/main.js></script>'
    :`<script>${manageJs}</script>`
}
`
    return['headersContent',{
        'content-type':'text/html;charset=utf-8',
        etag:etag(content),
    },content]
}
async function manage(rq,rs){
    if(!(
        rq.method=='GET'
    )){
        rs.writeHead(400)
        return rs.end()
    }
    if(!manageResult)
        manageResult=await calcManageResult.call(this)
    return manageResult
}
export default manage
