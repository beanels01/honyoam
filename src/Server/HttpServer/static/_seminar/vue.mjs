import homepageLike from    '../_homepageLike.mjs'
import activity from        './vue/activity.mjs'
import chooseHonyoam0 from  './vue/chooseHonyoam0.mjs'
import chooseHonyoam1 from  './vue/chooseHonyoam1.mjs'
import yiTiaoLong0 from     './vue/yiTiaoLong0.mjs'
import yiTiaoLong1 from     './vue/yiTiaoLong1.mjs'
import yiTiaoLong2 from     './vue/yiTiaoLong2.mjs'
import apply from           './vue/apply.mjs'
import block0 from          './vue/block0.mjs'
import block1 from          './vue/block1.mjs'
import presale from         './vue/presale.mjs'
let presidentsProfile={
    props:['data','language'],
    template:`
        <div class=l>
            <div class=n>{{
                language.title
            }}</div>
            <div class=o>{{
                data
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
            return`${this.data.current}#form`
        },
    },
    data:()=>({
        menu:0,
    }),
    props:[
        'data',
        'language',
        'currentLanguage',
        'value',
        'mainSeminar',
    ],
    template:`
        <div id=main>
            <hlHeader
                shadow=1
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                v-model=menu
                :mainSeminar=mainSeminar
            ></hlHeader>
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
                    :data=value.presidentsProfile
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
                    :currentLanguage=currentLanguage
                    :language=language.contact.apply
                    :topics=value.topics
                    :content=value.block0
                ></apply>
                <hlFooter
                    :language=language.homepageLike.footer
                    :currentLanguage=currentLanguage
                ></hlFooter>
                <floatBall
                    value=立刻報名
                    :href=formHref
                ></floatBall>
                <downArrow></downArrow>
            </template>
            <hlMenu
                v-if=menu
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
            ></hlMenu>
        </div>
    `,
}
export default{
    components:{aMain},
    template:`
        <aMain
            :data=data
            :language=language
            :currentLanguage=currentLanguage
            :value=value
            :mainSeminar=mainSeminar
        ></aMain>
    `
}
