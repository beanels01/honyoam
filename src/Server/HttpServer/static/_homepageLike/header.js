import languageComputed from './languageComputed.js'
let header={
    computed:languageComputed,
    props:['language','currentLanguage','value'],
    template:`
        <div
            class=header
            :class="{
                active:value,
            }"
        >
            <div class="a left">
                <a :href=href.homepage>
                    <img class=a src=img/logo.png>
                </a>
            </div>
            <div class="a right">
                <div class=max1279>
                    <i
                        class="a material-icons"
                        @click="$emit('input',1)"
                    >menu</i>
                    <i
                        class="b material-icons"
                        @click="$emit('input',0)"
                    >close</i>
                </div>
                <div class=min1280>
                    <a class=wordLink :href=href.news>{{
                        language.homepageLike.news
                    }}</a>
                    <a class=wordLink :href=href.presale>{{
                        language.homepageLike.presale
                    }}</a>
                    <a class=wordLink :href=href.medieval>{{
                        language.homepageLike.medieval
                    }}</a>
                    <a class=wordLink :href=href.qa>{{
                        language.homepageLike.qa
                    }}</a>
                    <a class="wordLink contact" :href=href.contact>
                        <img src=img/join.png> {{
                            language.homepageLike.contact
                        }}
                    </a>
                    <a :href=href.user><img src=img/user.png></a>
                    <select
                        :value=currentLanguageInSiteHref
                        @input="e=>location=siteHref[e.target.value].href"
                    >
                        <option
                            v-for="(a,i) in siteHref"
                            :value=i
                        >{{a.language}}</option>
                    </select>
                </div>
            </div>
        </div>
    `,
}
export default header
