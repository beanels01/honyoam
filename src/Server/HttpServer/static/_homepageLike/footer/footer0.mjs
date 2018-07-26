import footer0a from './footer0/footer0a.mjs'
import footer0b from './footer0/footer0b.mjs'
import footer0c from './footer0/footer0c.mjs'
let footer0={
    props:['language','href'],
    components:{footer0a,footer0b,footer0c},
    template:`
        <div>
            <div class=a>
                <a :href=href.presale>{{language.presale}}</a> |
                <a :href=href.medieval>{{language.medieval}}</a> |
                <a :href=href.news>{{language.news}}</a> |
                <a href=http://www.honyoam.com/loan/>{{language.loan}}</a> |
                <a :href=href.qa>{{language.qa}}</a> |
                <a :href=href.about>{{language.about}}</a> |
                <a :href=href.qaForm>{{language.qaForm}}</a>
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
