import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
let patternInput={
    props:['data','value'],
    template:`
        <div class=o>
            <div v-for="(e,i) in data.array">
                <div class=n>
                    <img
                        :src=e.image
                        @click="$emit('input',i)"
                        :class="{active:value==i}"
                    >
                </div>
                <div class=o>
                    <div class=a>{{e.type}}</div>
                    <div class=b>
                        <div>格局：{{e.pattern}}</div>
                        <div>面積：{{e.area}}</div>
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
                this.id,
            )
        },
    },
    data:()=>({
        menu:0,
        data:{
            array:[{
                image:      '/_presaleIdPattern/test-0',
                type:       '85-A Type',
                pattern:    '3LDK / 2LDK',
                area:       '86.15m²',
            },{
                image:      '/_presaleIdPattern/test-1',
                type:       '95-Br Type',
                pattern:    '3LDK',
                area:       '98.71m²',
            }],
        },
        selectPattern:0,
    }),
    props:[
        'language',
        'currentLanguage',
        'id',
        'presale',
        'presaleId',
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
                        title:presaleId.language[currentLanguage].name,
                        part:'空間格局',
                    }"
                ></presaleIdLikeTop>
                <presaleIdLikeMain
                    :data="{
                        part:['空間格局','PLAN'],
                        title:presaleId.language[currentLanguage].informationTitle,
                        content:presaleId.language[currentLanguage].informationContent,
                    }"
                <div class=a>
                    <div class=n>
                        <span class=a>空間格局</span> / PLAN
                    </div>
                    <patternInput
                        :data=data
                        v-model=selectPattern
                    ></patternInput>
                </div>
                <div class=b>
                    <img :src=data.array[selectPattern].image>
                </div>
                <presaleIdLikeFooter
                    :data=presale.language[currentLanguage].precautions
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
            :id=id
            :presale=presale
            :presaleId=presaleId
        ></aMain>
    `,
}
