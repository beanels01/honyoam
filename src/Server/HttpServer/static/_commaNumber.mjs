function commaNumber(n){
    let x=[]
    n=''+n
    let
        a=n.length,
        b=Math.ceil(a/3)
    for(let i=0;i<b;i++)
        x.push(n.substring(
            a-3*b+3*i,
            a-3*b+3*(i+1)
        ))
    return x.join(',')
}
export default commaNumber
