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
            ['所在地','東京都新宿区大久保三丁目170番316（地番）'],
            ['交通','東京メトロ副都心線「西早稲田」駅（3番出口）より徒歩3分\n都営大江戸線「東新宿」駅（エレベーター1出口）より徒歩6分\n東京メトロ東西線「高田馬場」駅（7番出口）より徒歩14分\nJR山手線「高田馬場」駅（戸山口）より徒歩15分\n西武新宿線「高田馬場」駅（戸山口／7:00～22:00）より徒歩16分\n'],
            ['総戸数','184戸'],
            ['構造・階数','鉄筋コンクリート造・地上13階建'],
            ['設計・監理・施工','ファーストコーポレーション株式会社'],
            ['建築面積','1,638.74m²'],
            ['建築延床面積','16,884.51m²'],
            ['建築確認番号','BCJ16本建確125（2016年9月16日付）／BCJ16本建確125変1（2016年12月16日付）／BCJ16本建確125変2（2017年4月27日付）'],
            ['敷地面積','2,620.43m²'],
            ['敷地の権利形態','専有面積割合による所有権の共有'],
            ['用途地域','第一種住居・商業地域'],
            ['管理形態','管理組合結成後、エヌ・ティ・ティ都市開発ビルサービス株式会社に管理委託予定（通勤）'],
            ['駐車場','（総戸数に対して）47台（平置4台・機械式42台・車椅子利用者用1台）［月額使用料：31,500円～38,000円］'],
            ['駐輪場','（総戸数に対して）184台（ラック式184台）［月額使用料：300円］'],
            ['バイク置場','（総戸数に対して）5台［月額使用料：5,000円］'],
            ['ミニバイク置場','（総戸数に対して）3台［月額使用料：3,000円］'],
            ['広告主・売主','エヌ・ティ・ティ都市開発株式会社\n国土交通大臣（4）第5856号\n（一社）不動産協会会員\n（一社）不動産流通経営協会会員\n（公社）首都圏不動産公正取引協議会加盟\n〒101-0021 東京都千代田区外神田4-14-1秋葉原UDX\n\n安田不動産株式会社\n国土交通大臣（4）第5729号\n（一社）不動産協会会員\n（一社）不動産流通経営協会会員\n（公社）首都圏不動産公正取引協議会加盟\n〒101-0054 東京都千代田区神田錦町2-11 TG安田ビル\n\nファーストコーポレーション株式会社\n東京都知事（2）第94270号\n〒167-0051 東京都杉並区荻窪4-30-16 藤澤ビルディング\n'],
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
                <presaleIdLikeHeader
                    :data="{focus:'summary'}"
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
        ></aMain>
    `,
}
