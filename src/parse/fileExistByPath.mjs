function fileExistByPath(p){
    try{
        fs.statSync(p)
    }catch(e){
        return 0
    }
    return 1
}
export default fileExistByPath
