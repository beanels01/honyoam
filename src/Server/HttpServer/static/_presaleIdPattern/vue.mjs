import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
let patternInput={
    props:['data','value','currentLanguage'],
    template:`
        <div class=o>
            <div v-for="(e,i) in data.pattern">
                <div
                    class=n
                    :class="{active:value==i}"
                >
                    <img
                        :src="
                            currentLanguage in e.language&&e.language[currentLanguage].image?
                                '/image/'+e.language[currentLanguage].image
                            :
                                'none1000.png'
                        "
                        @click="$emit('input',i)"
                    >
                </div>
                <div class=o>
                    <div class=a>{{
                        currentLanguage in e.language?
                            e.language[currentLanguage].name
                        :
                            ''
                    }}</div>
                    <div class=b>
                        <div>{{data.language.pattern}}：{{e.name}}</div>
                        <div>{{data.language.area}}：{{e.area}} {{data.language.squaredMeter}}</div>
                        <div>{{data.language.balconyArea}}：{{e.balconyArea}} {{data.language.squaredMeter}}</div>
                        <div>{{data.language.price}}：{{e.price}} {{data.language.e4JapaneseCurrency}}</div>
                    </div>
                </div>
            </div>
        </div>
    `,
}
let aMain={
    components:{
        hlFooter:               homepageLike.footer,
        hlMenu:                 homepageLike.menu,
        hlHeader:               homepageLike.header,
        floatBall:              homepageLike.floatBall,
        presaleLikeTop:         presaleLike.top,
        presaleIdLikeTop:       presaleIdLike.top,
        presaleIdLikeFooter:    presaleIdLike.footer,
        presaleIdLikeHeader:    presaleIdLike.header,
        patternInput,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
        presaleIdHref(){
            return presaleIdLike.href(
                this.currentLanguage,
                this.presale.id,
            )
        },
        pattern(){
            return this.presale.presaleId.pattern.filter(a=>a.show)
        }
    },
    data:()=>({
        menu:0,
        selectPattern:0,
    }),
    props:[
        'data',
        'language',
        'currentLanguage',
        'presale',
        'mainSeminar',
    ],
    template:`
        <div id=main>
            <hlHeader
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                v-model=menu
                :mainSeminar=mainSeminar
            ></hlHeader>
            <template v-if=!menu>
                <presaleLikeTop
                    :data="{mobile:1,language:language.presale}"
                ></presaleLikeTop>
                <presaleIdLikeTop
                    :data="{
                        focus:'pattern',
                        title:presale.presaleId.name,
                        part:language.presale.pattern,
                        background:presale.presaleId.banner,
                        show:presale.presaleId,
                        language:language.presale,
                    }"
                    :href=presaleIdHref
                ></presaleIdLikeTop>
                <div class=a>
                    <div class=n>
                        <span class=a>{{language.presale.pattern}}</span> / SPACE PATTERN
                    </div>
                    <patternInput
                        :data="{
                            pattern,
                            language:language.presale.patternPage,
                        }"
                        :currentLanguage=currentLanguage
                        v-model=selectPattern
                    ></patternInput>
                </div>
                <div class=b v-if=pattern.length>
                    <img :src="
                        currentLanguage in pattern[selectPattern].language&&pattern[selectPattern].language[currentLanguage].image?
                            '/image/'+pattern[selectPattern].language[currentLanguage].image
                        :
                            'none1000.png'
                    ">
                </div>
                <div class=c v-if=!pattern.length>
                    {{language.presale.patternPage.noData}}
                </div>
                <presaleIdLikeFooter
                    :data="{
                        language:language.presale,
                        content:presale.presale.language[currentLanguage].precautions,
                    }"
                ></presaleIdLikeFooter>
                <hlFooter
                    :language=language.homepageLike.footer
                    :currentLanguage=currentLanguage
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
                <presaleIdLikeHeader
                    :data="{
                        focus:'pattern',
                        show:presale.presaleId,
                        language:language.presale,
                    }"
                    :href=presaleIdHref
                ></presaleIdLikeHeader>
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
            :presale=presale
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
