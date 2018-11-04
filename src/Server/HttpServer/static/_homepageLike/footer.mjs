import footer0 from'./footer/footer0.mjs'
import languageComputed from './languageComputed.mjs'
let footer={
    props:['language','currentLanguage'],
    components:{footer0},
    computed:languageComputed,
    template:`
        <div class=footer>
            <div class=a>
                <footer0
                    :language=language.footer0
                    :href=href
                ></footer0>
            </div>
            <div class=b>
                <div class=n>
                    <div class=a>
                        <a :href=href.privacy>{{language.privacyPolicy}}</a> |
                        <a :href=href.terms>{{language.termOfService}}</a><!-- |
                        <a href=#>{{language.copyright}}</a> |
                        <a href=#>{{language.sitemap}}</a>-->
                    </div>
                    <div class=b>{{
                        language.copyrightContent
                    }}</div>
                </div>
            </div>
        </div>
    `,
}
export default footer
