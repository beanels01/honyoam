import Vue from                 'vue'
import vueServerRenderer from   'vue-server-renderer'
let renderer=vueServerRenderer.createRenderer()
export default options=>new Promise((rs,rj)=>{
    renderer.renderToString(
        new Vue(options),
        (err,res)=>err?rj(err):rs(res)
    )
})
