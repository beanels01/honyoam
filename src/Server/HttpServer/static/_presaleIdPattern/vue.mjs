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
    },
    data:()=>({
        menu:0,
        presaleIdLikeTop:{
            focus:'pattern',
            title:'ザ・パークハウス 恵比寿南',
            part:'空間格局',
        },
        presaleIdLikeMain:{
            part:['空間格局','PLAN'],
            title:'摩登與沉穩的美麗結合',
            content:'由JR山手線「惠比壽」站徒步7分鐘的台地恵比寿南アドレス，以此地為舞台\n由56戶私人住宅共同演出獨出心裁的建築美學，所誕生的「ザ・パークハウス 恵比寿南」\n享受台地獨有的開闊空間與視野，不斷追求更加上質、高貴的生活\n優雅生活的每一天由此地開始',
        },
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
        'presale',
    ],
    template:`
        <div id=main>
            <template v-if=!menu>
                <presaleLikeTop
                    :data="{mobile:1}"
                ></presaleLikeTop>
                <presaleIdLikeTop
                    :data=presaleIdLikeTop
                ></presaleIdLikeTop>
                <presaleIdLikeMain
                    :data=presaleIdLikeMain
                ></presaleIdLikeMain>
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
