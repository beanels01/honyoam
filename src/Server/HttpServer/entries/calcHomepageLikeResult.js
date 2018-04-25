let
    staticDir=          'honyoam/src/Server/HttpServer/static',
    rollup=             require('rollup'),
    etag=               require('etag'),
    NodeESModuleLoader= require('node-es-module-loader'),
    render=             require('./render'),
    loader=             new NodeESModuleLoader,
    js={},
    vue={}
async function calcJs(doc){
    let
        bundle=await rollup.rollup({input:`${staticDir}/${doc.clientScript}`}),
        {code}=await bundle.generate({format:'iife'})
    return code
}
async function calcResult(doc){
    if(!js[doc.clientScript])
        js[doc.clientScript]=await calcJs.call(this,doc)
    if(!vue[doc.vue])
        vue[doc.vue]=(await loader.import(
            `./${staticDir}/${doc.vue}`
        )).default
    let
        language=(await this._getLanguage()).res[doc.currentLanguage],
        vueData=Object.assign({
            language,
            currentLanguage:doc.currentLanguage,
        },doc.vueData)
    let content=`<!doctype html>
<title>${doc.title}</title>
<base href=/>
<meta name=viewport content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1'>
${doc.og&&doc.og.title?
    `<meta property=og:title content='${doc.og.title}'>`
:''}
${doc.og&&doc.og.image?
    `<meta property=og:image content='${doc.og.image}'>`
:''}
${doc.og&&doc.og.description?
    `<meta property=og:description content='${doc.og.description}'>`
:''}
<link rel=stylesheet href=_homepageLike/main.css>
<link rel=stylesheet href=${doc.css}>
<link rel=stylesheet href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel=icon href=_favicon.png>
<body>
${await render(Object.setPrototypeOf({data:vueData},vue[doc.vue]))}
<script id=arg type=a>${encodeURIComponent(JSON.stringify({
    dev:this.config.dev,
    vueData,
}))}</script>
<script>
let
    vueLoad=new Promise(rs=>window.onVueLoad=rs),
    recaptchaLoad=new Promise(rs=>window.onRecaptchaLoad=rs)
</script>
<script async src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"></script>
<script async src=_vue/vue.min.js onload=onVueLoad()></script>
${
    this.config.dev
    ?`<script type=module src=${doc.clientScript}></script>`
    :`<script>${js[doc.clientScript]}</script>`
}
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114920020-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-114920020-1');
</script>
`
    return['headersContent',{
        'content-type':'text/html;charset=utf-8',
        'x-xss-protection':'0',
        etag:etag(content),
    },content]
}
module.exports=calcResult
