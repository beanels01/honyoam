import homepageLike from    '../_homepageLike.mjs'
import presaleIdLike from   '../_presaleIdLike.mjs'
import presaleLike from     '../_presaleLike.mjs'
let aMain={
    components:{
        hlFooter:               homepageLike.footer,
        hlMenu:                 homepageLike.menu,
        hlHeader:               homepageLike.header,
        floatBall:              homepageLike.floatBall,
        presaleLikeTop: presaleLike.top,
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
            focus:'summary',
            title:'ザ・パークハウス 恵比寿南',
            part:'物件概要',
        },
        data:[
['所在地','東京都渋谷区恵比寿南２丁目29番2、45（地番）'],
['交通','JR山手線・埼京線・湘南新宿ライン「恵比寿」駅（東口）より徒歩7分、同駅（東口）よりサブエントランスまで徒歩7分（恵比寿スカイウォーク経由：利用可能時間4:30～25:15）、同駅（西口）より徒歩7分。東京メトロ日比谷線「恵比寿」駅（5番出口：利用可能時間6:00～終電）より徒歩7分、同駅（3番出口）より徒歩8分。'],
['総戸数','56戸（事業協力者住戸4戸含む）'],
['販売戸数','未定'],
['駐車場','総戸数に対して22台（バリアフリー対応機械式、身障者用1台）※内3台は事業協力者の優先選定となります。'],
['販売価格','11,000万円台～25,000円台(予定) ※1,000万円単位'],
['予定最多価格帯','14,000万円台　※1,000万円単位'],
['間取り','1LDK～3LDK'],
['専有面積','73.38ｍ2～108.83ｍ2'],
['バルコニー面積','3.94ｍ2～16.26ｍ2'],
['販売予定','【第2期】2018年5月中旬販売開始予定\n[予告広告]\n販売を開始するまでは、契約または予約の申し込み、並びに申し込み順位の確保には応じられません。'],
['モデルルーム','モデルルーム公開中(完全予約制)'],
['完成日または予定日','2019年7月中旬'],
['入居(予定)日','2019年9月下旬'],
['敷地面積','2022.95m2(建築確認対象面積1,777.63m2の他に、私道負担面積245.31m2)'],
['分譲後の敷地の権利形態','専有面積割合による所有権権の共有'],
['構造／規模','鉄筋コンクリート造・地上9階建地下2階建、設備棟（鉄筋コンクリート造・地上2階建）'],
['用途地域','用途地域：第一種住居地域'],
['建ぺい率／容積率','建ぺい率：70% 、容積率：300%'],
['管理形態','管理組合成立後、三菱地所コミュニティ株式会社に管理委託'],
['施設費用・償却費','駐車場使用料：38,000円・40,000円(月額)、バイク置場使用料：2,000円(月額)、ミニバイク置場使用料：1,500円(月額)、自転車置場使用料：200円～1,000円(月額)、トランクブース使用料：2,400円(月額)、テレビ共視聴設備利用料：432円(月額)、インターネット利用料：1,674円(月額)（総戸数に対して）/駐車場:22台（内3台は事業協力者の優先選定となります。）、自転車置場:112台、バイク置場:2台、ミニバイク置場:4台、トランクブース:14区画'],
['備考','（総戸数に対して）自転車置場：112台（平置3台・2段ラック下部スライド式109台）、 バイク置場：2台、 ミニバイク置場：4台、 トランクブース：14区画【お知らせ】 第2期の販売開始時期を5月上旬から5月中旬に変更いたしました。※　誠に勝手ながら、5月3日(祝)は臨時休業とさせていただきます。'],
['売主','三菱地所レジデンス株式会社　NTT都市開発株式会社　東急不動産株式会社'],
['販売会社（取引態様）','三菱地所レジデンス株式会社（売主・販売提携（代理））'],
['施工会社','西松建設株式会社関東建築支社'],
['建築確認番号','開発許可番号／第Ｄ-82-01号（平成29年2月22日）開発面積1,835.74m2　　建築確認済証番号／第UHEC建確28737変1号（平成29年9月6日）'],
        ],
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
                <div class=a>
                    <div class=n>
                        <span class=a>物件概要</span> / BRAND
                    </div>
                    <div class=o>
                        <div>
                            <div v-for="a in data">
                                <div class=a>{{a[0]}}</div>
                                <div class=b>{{a[1]}}</div>
                            </div>
                        </div>
                    </div>
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
            :presale=presale
        ></aMain>
    `,
}
