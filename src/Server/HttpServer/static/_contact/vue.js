import homepageLike from    '../_homepageLike.js'
import activity from        './vue/activity.js'
import chooseHonyoam0 from  './vue/chooseHonyoam0.js'
import chooseHonyoam1 from  './vue/chooseHonyoam1.js'
import yiTiaoLong0 from     './vue/yiTiaoLong0.js'
import yiTiaoLong1 from     './vue/yiTiaoLong1.js'
import yiTiaoLong2 from     './vue/yiTiaoLong2.js'
import apply from           './vue/apply.js'
import block0 from          './vue/block0.js'
import block1 from          './vue/block1.js'
import presale from         './vue/presale.js'
let presidentsProfile={
    props:['language'],
    template:`
        <div class=l>
            <div class=n>{{
                language.title
            }}</div>
            <div class=o>{{
                language.content
            }}</div>
        </div>
    `,
}
let downArrow={
    created(){
        if(typeof window=='object')
            addEventListener('scroll',_=>this.show=0,{once:1})
    },
    data:()=>({
        show:1,
    }),
    template:`
        <div v-if=show class=downArrow><div>
            <i class="material-icons">keyboard_arrow_down</i>
        </div></div>
    `,
}
let aMain={
    components:{
        hlHeader:   homepageLike.header,
        hlMenu:     homepageLike.menu,
        hlFooter:   homepageLike.footer,
        floatBall:  homepageLike.floatBall,
        activity,
        block0,
        block1,
        presidentsProfile,
        presale,
        chooseHonyoam0,
        chooseHonyoam1,
        yiTiaoLong0,
        yiTiaoLong1,
        yiTiaoLong2,
        apply,
        downArrow,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
        formHref(){
            return`${this.currentLanguage}/contact#form`
        },
    },
    data:()=>({
        menu:0,
    }),
    props:[
        'language',
        'currentLanguage',
        'value',
    ],
    template:`
        <div id=main>
            <template v-if=!menu>
                <div class=a></div>
                <block0
                    :language=language.contact.block0
                    :speakers=value.speakers
                    :block0=value.block0
                ></block0>
                <block1
                    :language=language.contact.block1
                    :currentLanguage=currentLanguage
                    :speakers=value.speakers
                    :block1=value.block1
                ></block1>
                <presidentsProfile
                    :language=language.contact.presidentsProfile
                ></presidentsProfile>
                <presale
                    :currentLanguage=currentLanguage
                    :language=language.contact.presale
                    :content=value.presale
                ></presale>
                <activity
                    :language=language.contact.activity
                    :speakers=value.speakers
                    :flow=value.flow
                ></activity>
                <chooseHonyoam0
                    :language=language.contact.chooseHonyoam0
                ></chooseHonyoam0>
                <chooseHonyoam1
                    :language=language.contact.chooseHonyoam1
                ></chooseHonyoam1>
                <yiTiaoLong0
                    :language=language.contact.yiTiaoLong0
                ></yiTiaoLong0>
                <yiTiaoLong1
                    :language=language.contact.yiTiaoLong1
                    :value=value.highlights
                ></yiTiaoLong1>
                <yiTiaoLong2
                    :language=language.contact.yiTiaoLong2
                    :value=value.investJapan
                ></yiTiaoLong2>
                <apply
                    :language=language.contact.apply
                    :topics=value.topics
                    :content=value.block0
                ></apply>
                <hlFooter
                    :language=language.homepageLike.footer
                ></hlFooter>
                <floatBall
                    value=立刻報名
                    :href=formHref
                ></floatBall>
                <downArrow></downArrow>
            </template>
            <hlMenu
                v-if=menu
                :language=language
                :currentLanguage=currentLanguage
            ></hlMenu>
            <hlHeader
                :language=language
                :currentLanguage=currentLanguage
                v-model=menu
            ></hlHeader>
        </div>
    `,
}
export default{
    components:{aMain},
    template:`
        <aMain
            :language=language
            :currentLanguage=currentLanguage
            :value=value
        ></aMain>
    `
}
