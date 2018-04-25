let
    Vue=            require('vue'),
    renderer=       require('vue-server-renderer').createRenderer()
module.exports=options=>new Promise((rs,rj)=>{
    renderer.renderToString(
        new Vue(options),
        (err,res)=>err?rj(err):rs(res)
    )
})
