import rollup from              'rollup'
import etag from                'etag'
import render from              './render'
let
    staticDir=          'honyoam/src/Server/HttpServer/static',
    js={}
async function calcJs(doc){
    let
        bundle=await rollup.rollup({
            input:`${staticDir}/${doc.clientScript}`
        }),
        {code}=await bundle.generate({format:'iife'})
    return code
}
async function calcResult(doc){
    if(!js[doc.clientScript])
        js[doc.clientScript]=await calcJs.call(this,doc)
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
${
    doc.css instanceof Array?
        doc.css.map(a=>
            `<link rel=stylesheet href=${a}>`
        ).join('')
    :
        `<link rel=stylesheet href=${doc.css}>`
}
<link rel=stylesheet href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel=stylesheet href="https://unpkg.com/swiper@4.2.6/dist/css/swiper.min.css">
<link rel=icon href=_favicon.png>
<body>
${await render(Object.setPrototypeOf({data:vueData},doc.vue))}
<script>
if(!(
    61<=        getVersion('chrome')    ||
    55<=        getVersion('firefox')   ||
    48<=        getVersion('opr')       ||
    603<=       getVersion('safari')
))
    alert('您正在使用的瀏覽器可能因為版本因素，無法正常瀏覽本網站內容；建議可使用新版之 Google Chrome 或 Mozilla Firefox 開啟。')
function getVersion(s){
    var m=navigator.userAgent.toLowerCase().match(
        new RegExp(s+'/([0-9]*)')
    )
    return m&&+m[1]
}
</script>
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
<script src="https://unpkg.com/swiper@4.2.6/dist/js/swiper.min.js"></script>
<script async src=_vue/vue.min.js onload=onVueLoad()></script>
${
    this.config.dev
    ?`<script type=module src=${doc.clientScript}></script>`
    :`<script>${js[doc.clientScript]}</script>`
}
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
export default calcResult
