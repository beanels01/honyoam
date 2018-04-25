let
    crypto=                         require('crypto')
function sha256(s){
     return crypto.createHash('sha256').update(s).digest()
}
module.exports=sha256
