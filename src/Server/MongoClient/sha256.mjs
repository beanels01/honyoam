import crypto from 'crypto'
function sha256(s){
     return crypto.createHash('sha256').update(s).digest()
}
export default sha256
