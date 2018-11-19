import fs from              'fs'
function parseVeki(){
    let x={}
    let a=fs.readFileSync(`honyoam/src/parseMedieval/150130_veki.csv`).toString().split('\n')
    a.pop()
    a.map(a=>{
        a=a.split(',')
        x[a[0]+a[1]+a[2]]=`${a[3]} ${a[5]}`
    })
    return x
}
export default parseVeki
