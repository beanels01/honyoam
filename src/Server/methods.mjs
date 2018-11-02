/*
    這些是核心方法；它們提供功能、保證資料一致性並控制權限。
    慣例：
        參數：
            doc
        回傳：
            {err:...} 或 {res:...}
*/
import put from             './methods/put'
import get from             './methods/get'
import set from             './methods/set'
import cut from             './methods/cut'
import user from            './methods/user'
export default Object.assign({
    async broadcastMail(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        await this.broadcastMail(doc)
        return{res:null}
    },
    async freezeUser(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        await this.honyoamMongoClient.freezeUser(doc.targetUser)
        return{res:null}
    },
    async refreshInvitationCode(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        this.invitationCode={
            register:      Math.random().toString(36).substr(2,8),
            resetPassword: Math.random().toString(36).substr(2,8),
        }
        return{res:this.invitationCode}
    },
    register(doc){
        return this.flow.register=(async()=>{
            await this.flow.register
            if(!user.isValidUsername(doc.username))
                return{err:'帳號格式不符。'}
            if(await this.honyoamMongoClient.getUserByUsername(
                doc.username
            ))
                return{err:'帳號已被使用。'}
            if(!user.isValidPassword(doc.password))
                return{err:'密碼格式不符。'}
            if(!['salesman','editor'].includes(doc.type))
                return{err:'未填職稱。'}
            if(this.invitationCode.register!=doc.invitationCode)
                return{err:'邀請碼錯誤。'}
            let res=await this.honyoamMongoClient.putUser(doc)
            this.invitationCode.register=
                Math.random().toString(36).substr(2,8)
            return{res}
        })()
    },
},put,get,set,cut)
