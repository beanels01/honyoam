let county=[
    '東京都',
    '神奈川縣',
    '千葉縣',
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
            '都心3區','東京都心6區','千代田區','中央區','港區','新宿區','文京區','品川區','目黑區','大田區','世田谷區','澀谷區','中野區','杉並區','豐島區','北區','板橋區','練馬區','台東區','墨田區','江東區','荒川區','足立區','葛飾區','江戶川區',
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
    props:['value'],
    template:`
        <div class=a>
            <div class=n>
                <div class=a>
                    尋找你想<br class=n>要的物件
                </div>
                <div class=b>
                    <label>
                        <input type=radio value=0 v-model=value.usage>
                        新成屋
                    </label>
                    <label>
                        <input type=radio value=1 v-model=value.usage>
                        中古屋
                    </label>
                    <br class=t>
                    <select
                        class="n q"
                        v-model=value.county
                    >
                        <option value hidden>地區</option>
                        <option
                            v-for="(a,i) in county"
                            :value=i
                        >{{a}}</option>
                    </select>
                    <select
                        class="n q"
                        v-model=value.area
                    >
                        <option value hidden>區域</option>
                        <option
                            v-if="typeof value.county=='number'"
                            v-for="(a,i) in area[value.usage==0?'presale':'medieval'][value.county]"
                            :value=i
                        >{{a}}</option>
                    </select>
                    <br>
                    面積：
                    <input
                        class=p
                        placeholder=最低
                        v-model=value.areaLower
                    >
                    ～
                    <input
                        class=p
                        placeholder=最高
                        v-model=value.areaUpper
                    >
                    <select class="n r">
                        <option>平方公尺</option>
                        <option>坪</option>
                    </select>
                    <span class=s></span>
                    <br class=t>
                    價格：
                    <input
                        class=p
                        placeholder=最低
                        v-model=value.valueLower
                    >
                    ～
                    <input
                        class=p
                        placeholder=最高
                        v-model=value.valueUpper
                    >
                    萬日幣
                </div>
                <div class=c>
                    <button class=searchButton>
                        <img src=img/search.png> 搜尋
                    </button>
                </div>
            </div>
        </div>
    `,
}
export default lessSearch
