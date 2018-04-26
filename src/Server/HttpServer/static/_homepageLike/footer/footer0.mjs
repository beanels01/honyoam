import footer0a from './footer0/footer0a.mjs'
import footer0b from './footer0/footer0b.mjs'
import footer0c from './footer0/footer0c.mjs'
let footer0={
    props:['language'],
    components:{footer0a,footer0b,footer0c},
    template:`
        <div>
            <div class=a>
                <a href=http://www.honyoam.com/preconstruction/>{{language.presale}}</a> |
                <a href=http://www.honyoam.com/news/>{{language.news}}</a> |
                <a href=http://www.honyoam.com/service/>{{language.service}}</a> |
                <a href=http://www.honyoam.com/faq/>{{language.qa}}</a> |
                <a href=http://www.honyoam.com/loan/>{{language.loan}}</a> |
                <a href=http://www.honyoam.com/about_us/>{{language.about}}</a> |
                <a href=http://www.honyoam.com/contact_us/>{{language.point}}</a> |
                <a href=http://www.honyoam.com/reservation/>{{language.reservation}}</a> |
                <a href=http://www.honyoam.com/newsletters/>E-NEWS</a>
            </div>
            <hr>
            <div class=b>
                <footer0a></footer0a>
                <footer0b></footer0b>
                <footer0c
                    :language=language.c
                ></footer0c>
            </div>
        </div>
    `,
}
export default footer0
