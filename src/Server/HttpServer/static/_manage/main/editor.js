import homepage from            './homepage.js'
import faq      from            './faq.js'
import contact  from            './contact.js'
export default{
    props:['language'],
    components:{homepage,faq,contact},
    template:`
        <div>
            <h2>首頁</h2>
            <homepage class=indent :language=language></homepage>
            <h2>參加說明會</h2>
            <faq class=indent :language=language></faq>
            <h2>立即聯絡</h2>
            <contact class=indent :language=language></contact>
        </div>
    `,
}
