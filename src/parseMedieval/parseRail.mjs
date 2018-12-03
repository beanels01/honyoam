import fs from              'fs'
function parseRail(){
    let x={}
    let a=fs.readFileSync(`honyoam/src/parseMedieval/150130_veki.csv`).toString().split('\n')
    a.pop()
    a.map(a=>{
        a=a.split(',')
        if(!x[a[1]])
            x[a[1]]={
                name:a[3],
                station:{},
            }
        x[a[1]].station[a[2]]=a[5]
    })
    return x
}
fs.writeFileSync('honyoam/src/rail.json',JSON.stringify(parseRail()))
