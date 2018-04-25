import languageComputed from './languageComputed.js'
let menu={
    computed:languageComputed,
    data:()=>({
        focus:'root',
    }),
    methods:{
        langHref(l){
            return`/${l}`
        },
    },
    props:['language','currentLanguage'],
    template:`
        <div class=menu>
            <template v-if="focus=='root'">
                <a class=b :href=href.news><span>{{
                    language.homepageLike.news
                }}</span></a>
                <a class=b :href=href.medieval><span>{{
                    language.homepageLike.medieval
                }}</span></a>
                <a class=b :href=href.presale><span>{{
                    language.homepageLike.presale
                }}</span></a>
                <a class=b :href=href.qa><span>{{
                    language.homepageLike.qa
                }}</span></a>
                <a class="b c" :href=href.contact><span>
                    <div class=a></div>
                    <span class=b>{{
                        language.homepageLike.contact
                    }}</span>
                </span></a>
                <a class=b :href=href.user><span>{{
                    language.homepageLike.user
                }}</span></a>
                <a class=b @click="focus='menu'">
                    <span class=n>
                        {{language.language[currentLanguage]}}
                    </span>
                    <span class=o>
                        <i class="material-icons">chevron_right</i>
                    </span>
                </a>
            </template>
            <template v-if="focus=='menu'">
                <a
                    v-for="(a,i) in siteHref"
                    class=b
                    :href=a.href
                ><span>{{a.language}}</span></a>
            </template>
        </div>
    `
}
export default menu
