import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
let aMain={
    components:{
        hlFooter:               homepageLike.footer,
        hlMenu:                 homepageLike.menu,
        hlHeader:               homepageLike.header,
        floatBall:              homepageLike.floatBall,
        presaleIdLikeTop:       presaleIdLike.top,
        presaleIdLikeFooter:    presaleIdLike.footer,
        presaleIdLikeHeader:    presaleIdLike.header,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
    },
    data:()=>({
        menu:0,
        presaleIdLikeTop:{
            title:'ウエリス新宿早稲田の森',
            part:'物件概要',
        },
        data:[
            ['販売価格','4,998万円（1戸）～9,238万円（1戸）'],
            ['最多価格帯','7,800万円台（2戸）※100万円単位'],
            ['専有面積','44.77m²～81.20m²'],
            ['間取り','1LDK～3LDK'],
            ['販売戸数','13戸'],
            ['完成時期','2018年6月下旬予定'],
            ['入居時期','2018年8月下旬予定'],
            ['バルコニー面積','7.80m²～15.60m²'],
            ['管理費（月額）','12,980円～23,540円'],
            ['修繕積立金（月額）','4,650円～8,440円'],
            ['修繕積立基金（引渡時一括）','325,500円～590,800円'],
            ['管理準備金（引渡時一括）','12,980円～23,540円'],
            ['インターネット利用料（月額）','2,376円（税込）'],
            ['テレビ共視聴設備利用料（月額）','540円（税込）'],
            ['申込受付場所','「ウエリス新宿早稲田の森」ゲストサロン'],
            ['情報登録日','2018年1月29日'],
        ],
    }),
    props:['language','currentLanguage'],
    template:`
        <div id=main>
            <template v-if=!menu>
                <presaleIdLikeTop
                    :data=presaleIdLikeTop
                ></presaleIdLikeTop>
                <div class=a>
                    <div class=n>
                        <span class=a>物件概要</span> / BRAND
                    </div>
                    <div class=o></div>
                    <div class=p>
                        <div>
                            <div v-for="a in data">
                                <div class=a>{{a[0]}}</div>
                                <div class=b>{{a[1]}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <presaleIdLikeFooter></presaleIdLikeFooter>
                <hlFooter
                    :language=language.homepageLike.footer
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
                <presaleIdLikeHeader></presaleIdLikeHeader>
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
        ></aMain>
    `,
}
