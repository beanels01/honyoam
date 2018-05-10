import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
let patternInput={
    props:['data','value','currentLanguage'],
    template:`
        <div class=o>
            <div v-for="(e,i) in data">
                <div class=n>
                    <img
                        :src="'/image/'+e.language[currentLanguage].image"
                        @click="$emit('input',i)"
                        :class="{active:value==i}"
                    >
                </div>
                <div class=o>
                    <div class=a>{{e.language[currentLanguage].name}}</div>
                    <div class=b>
                        <div>格局：{{e.name}}</div>
                        <div>面積：{{e.area}} 平方公尺</div>
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
        presaleLikeTop: presaleLike.top,
        presaleIdLikeTop:       presaleIdLike.top,
        presaleIdLikeMain:      presaleIdLike.main,
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
    },
    data:()=>({
        menu:0,
        selectPattern:0,
    }),
    props:[
        'language',
        'currentLanguage',
        'presale',
    ],
    template:`
        <div id=main>
            <template v-if=!menu>
                <presaleLikeTop
                    :data="{mobile:1}"
                ></presaleLikeTop>
                <presaleIdLikeTop
                    :data="{
                        focus:'pattern',
                        title:presale.presaleId.name,
                        part:'空間格局',
                    }"
                    :href=presaleIdHref
                ></presaleIdLikeTop>
                <presaleIdLikeMain
                    :data="{
                        part:['空間格局','PLAN'],
                        title:presale.presaleId.informationTitle,
                        content:presale.presaleId.informationContent,
                    }"
                <div class=a>
                    <div class=n>
                        <span class=a>空間格局</span> / PLAN
                    </div>
                    <patternInput
                        :data=presale.presaleId.pattern
                        :currentLanguage=currentLanguage
                        v-model=selectPattern
                    ></patternInput>
                </div>
                <div class=b>
                    <img :src="'/image/'+presale.presaleId.pattern[selectPattern].language[currentLanguage].image">
                </div>
                <presaleIdLikeFooter
                    :data=presale.presale.language[currentLanguage].precautions
                ></presaleIdLikeFooter>
                <hlFooter
                    :language=language.homepageLike.footer
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
                <presaleIdLikeHeader
                    :data="{focus:'pattern'}"
                    :href=presaleIdHref
                ></presaleIdLikeHeader>
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
            :presale=presale
        ></aMain>
    `,
}
