let county=[
    '東京都',
    '神奈川縣',
    '千葉縣',
    '埼玉縣',
    '大阪府',
    '京都府',
    '其他',
]
let area={
    presale:[
        ['東京都心6區','東京都區部'],
        ['全域'],
        ['全域'],
        ['全域'],
        ['全域'],
        ['全域'],
    ],
    medieval:[
        [
            '都心3區',
            '東京都心6區',
            '千代田區',
            '中央區',
            '港區',
            '新宿區',
            '文京區',
            '品川區',
            '目黑區',
            '大田區',
            '世田谷區',
            '澀谷區',
            '中野區',
            '杉並區',
            '豐島區',
            '北區',
            '板橋區',
            '練馬區',
            '台東區',
            '墨田區',
            '江東區',
            '荒川區',
            '足立區',
            '葛飾區',
            '江戶川區',
        ],
        ['全域'],
        ['全域'],
        ['全域'],
        ['全域'],
        ['全域'],
    ]
}
let lessSearch={
    data:()=>({
        county,
        area,
    }),
    props:['value','data'],
    template:`
        <div class=a>
            <div class=n>
                <div class=a>
                    {{data.language.searchYouWant0}}<br class=n>{{data.language.searchYouWant1}}
                </div>
                <div class=b>
                    <label>
                        <input type=radio value=presale v-model=value.type>
                        {{data.language.presale}}
                    </label>
                    <label>
                        <input type=radio value=medieval v-model=value.type>
                        {{data.language.medieval}}
                    </label>
                    <br class=t>
                    <select
                        class="n q"
                        v-model=value.place0
                    >
                        <option value hidden>{{data.language.place0}}</option>
                        <option
                            v-for="(a,i) in county"
                            :value=i
                        >{{a}}</option>
                    </select>
                    <select
                        class="n q"
                        v-model=value.place1
                    >
                        <option value hidden>{{data.language.place1}}</option>
                        <option
                            v-if="typeof value.place0=='number'"
                            v-for="(a,i) in area[value.usage==0?'presale':'medieval'][value.place0]"
                            :value=i
                        >{{a}}</option>
                    </select>
                    <br>
                    {{data.language.area}}：
                    <input
                        class=p
                        :placeholder=data.language.min
                        v-model=value.areaMin
                    >
                    ～
                    <input
                        class=p
                        :placeholder=data.language.max
                        v-model=value.areaMax
                    >
                    <select class="n r">
                        <option>{{data.language.squaredMeter}}</option>
                        <option>{{data.language.levelGround}}</option>
                    </select>
                    <span class=s></span>
                    <br class=t>
                    {{data.language.levelGround}}：
                    <input
                        class=p
                        :placeholder=data.language.min
                        v-model=value.priceMin
                    >
                    ～
                    <input
                        class=p
                        :placeholder=data.language.max
                        v-model=value.priceMax
                    >
                    {{data.language.e4JapaneseCurrency}}
                </div>
                <div class=c>
                    <button class=searchButton @click="$emit('search')">
                        <img src=img/search.png> {{data.language.search}}
                    </button>
                </div>
            </div>
        </div>
    `,
}
export default lessSearch
