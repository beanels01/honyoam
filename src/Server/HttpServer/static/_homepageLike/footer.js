import footer0 from'./footer/footer0.js'
let footer={
    props:['language'],
    components:{footer0},
    template:`
        <div class=footer>
            <div class=a>
                <footer0
                    :language=language.footer0
                ></footer0>
            </div>
            <div class=b>
                <div class=n>
                    <div class=a>
                        <a href=#>{{language.privacyPolicy}}</a> |
                        <a href=#>{{language.termOfService}}</a> |
                        <a href=#>{{language.copyright}}</a> |
                        <a href=#>{{language.sitemap}}</a>
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
