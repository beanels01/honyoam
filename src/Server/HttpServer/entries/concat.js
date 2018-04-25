function concat(rq){
    let a=[]
    rq.on('data',[].push.bind(a))
    return new Promise(rs=>rq.on('end',()=>rs(Buffer.concat(a))))
}
module.exports=concat
