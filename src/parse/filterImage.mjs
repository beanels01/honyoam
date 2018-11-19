function filterImage(inputDir,outputDir){
    fs.mkdirSync(`${outputDir}/madori`)
    for(let i=0;i<10;i++)
        fs.mkdirSync(`${outputDir}/photo${i?i+1:''}`)
    a.map(a=>{
        copyExist(`${inputDir}/madori/${a.source.id}.jpg`,`${outputDir}/madori/${a.source.id}.jpg`)
        for(let i=0;i<10;i++){
            let
                inPath=`${inputDir}/photo${i?i+1:''}/${a.source.id}.jpg`,
                outPath=`${outputDir}/photo${i?i+1:''}/${a.source.id}.jpg`
            copyExist(inPath,outPath)
        }
    })
}
function copyExist(a,b){
    if(fileExistByPath(a))
        fs.copyFileSync(a,b)
}
export default filterImage
