import homepage from            './homepage.mjs'
import faq      from            './faq.mjs'
import contact  from            './contact.mjs'
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
