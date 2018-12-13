export default{
    async putApply(doc){
        this.mailReport({
            subject:'說明會報名通知',
            html:`
                <p>
                    時間：${(new Date).toLocaleString()}
                </p>
                <p>
                    場次：${doc.title}
                </p>
                <p>
                    人數：${doc.people.length}
                </p>
                <ul>${doc.people.map(a=>`<li>
                    姓名：${a.name}<br>
                    稱謂：${a.gender=='female'?'小姐':'先生'}<br>
                    Email：${a.email}<br>
                    電話：${a.phone}<br>
                </li>`)}</ul>
                <p>
                    有興趣議題：
                </p>
                <ul>${doc.interested.split('\n').map(a=>`
                    <li>${a}</li>
                `).join('')}</ul>
            `,
        })
        return{res:await this.honyoamMongoClient.putApply(
            doc.people,
            doc.interested,
            doc.title,
            doc.currentLanguage,
        )}
    },
    async putCustomer(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.putCustomer()}
    },
    async putFeedback(doc){
        this.mailReport({
            subject:'客戶回饋通知',
            text:doc.content,
        })
        return{res:await this.honyoamMongoClient.putFeedback(
            doc.content,
        )}
    },
    async putImage(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.putImage(
            doc.currentUser._id
        )}
    },
    async putMedievalObject(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.putMedievalObject()}
    },
    async putNews(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.putNews(doc.language)}
    },
    async putPresaleObject(doc){
        if(!(
            doc.currentUser&&
            ['root'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.putPresaleObject()}
    },
    async putSeminar(doc){
        if(!(
            doc.currentUser&&
            ['root','sysadmin','editor'].includes(doc.currentUser.type)
        ))
            return{err:'permission denied'}
        return{res:await this.honyoamMongoClient.putSeminar(doc.language)}
    },
    async putSubscribe(doc){
        this.mailReport({
            subject:'客戶訂閱通知',
            html:`
                <p>
                    Email 地址：${doc.address}
                </p>
            `,
        })
        return{res:await this.honyoamMongoClient.putSubscribe(doc.address)}
    },
}
