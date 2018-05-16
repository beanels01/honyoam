import resetSysadminPassword from   './resetSysadminPassword.mjs'
import invitationCode from          './invitationCode.mjs'
import userlist from                './userlist.mjs'
import homepage from                './homepage.mjs'
import presale from                 './presale.mjs'
import presaleObjects from          './presaleObjects.mjs'
import contact from                 './contact.mjs'
import seminar from                 './seminar.mjs'
import contactApply from            './contactApply.mjs'
import faq from                     './faq.mjs'
import faqFeedback from             './faqFeedback.mjs'
export default{
    components:{
        resetSysadminPassword,
        invitationCode,
        userlist,
        homepage,
        faq,
        faqFeedback,
        contact,
        contactApply,
        seminar,
        presale,
        presaleObjects,
    },
    props:['language'],
    template:`
        <div>
            <h2>重置 sysadmin 密碼</h2>
            <resetSysadminPassword class=indent></resetSysadminPassword>
            <h2>邀請碼</h2>
            <invitationCode class=indent></invitationCode>
            <h2>用戶清單</h2>
            <userlist class=indent></userlist>
            <h2>首頁</h2>
            <homepage
                class=indent
                :language=language
            ></homepage>
            <h2>新成屋</h2>
            <presale
                class=indent
                :language=language
            ></presale>
            <h2>新成屋物件</h2>
            <presaleObjects
                class=indent
                :language=language
            ></presaleObjects>
            <h2>常見問題</h2>
            <faq class=indent :language=language></faq>
            <h2>常見問題 - 回饋</h2>
            <faqFeedback class=indent></faqFeedback>
            <h2>參加說明會 2.0</h2>
            <seminar
                class=indent
                :language=language
            ></seminar>
            <h2>參加說明會 1.0</h2>
            <contact
                class=indent
                :language=language
            ></contact>
            <h2>參加說明會 - 報名</h2>
            <contactApply class=indent></contactApply>
        </div>
    `,
}
