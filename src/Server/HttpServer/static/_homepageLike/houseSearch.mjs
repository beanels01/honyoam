let housePattern={
    template:`
        <div class=block>
            <div class=a>
                房屋格局<br>
                ＊可複選
            </div>
            <label>
                <input type=checkbox>
                1K
            </label>
            <label>
                <input type=checkbox>
                1DK
            </label>
            <label>
                <input type=checkbox>
                1LDK
            </label>
            <label>
                <input type=checkbox>
                2LDK
            </label>
            <label>
                <input type=checkbox>
                3LDK
            </label>
            <label>
                <input type=checkbox>
                3LDK 以上
            </label>
        </div>
    `
}
let houseSearch={
    components:{housePattern},
    data:()=>({
        currency:'jpy',
        min:'',
        max:'',
        place0:'',
        place1:'',
    }),
    props:['data'],
    template:`
        <div class=homepageLikeHouseSearch>
            <div class=b>
                <div>
                    <span class=homepageLikeBlueBar></span>
                    <span class=homepageLikeTitle>
                        尋找您想要的{{
                            data.type=='presale'?'新成屋':'中古屋'
                        }}<i
                            class="material-icons"
                            style="font-size:1.5em;"
                        >
                            keyboard_arrow_down
                        </i>
                    </span>
                </div>
            </div>
            <div class=c><div>
                <div class=a>
                    <div class=block>
                        <div class=a>搜尋區域</div>
                        <select v-model=place0>
                            <option value disabled>地區</option>
                            <option value=0>東京都</option>
                            <option value=1>神奈川縣</option>
                            <option value=2>千葉縣</option>
                            <option value=3>埼玉縣</option>
                            <option value=4>大阪府</option>
                            <option value=5>京都府</option>
                            <option value=6>其他</option>
                        </select>
                        <select v-model=place1>
                            <option value disabled>區域</option>
                            <template v-if="data.type=='presale'">
                                <template v-if="place0==0">
                                    <option>東京都心6區</option>
                                    <option>東京都區部</option>
                                </template>
                                <template v-if="place0!=0">
                                    <option>全域</option>
                                </template>
                            </template>
                            <template v-if="data.type=='medieval'">
                                <template v-if="place0==0">
                                    <option>都心3區</option>
                                    <option>東京都心6區</option>
                                    <option>千代田區</option>
                                    <option>中央區</option>
                                    <option>港區</option>
                                    <option>新宿區</option>
                                    <option>文京區</option>
                                    <option>品川區</option>
                                    <option>目黑區</option>
                                    <option>大田區</option>
                                    <option>世田谷區</option>
                                    <option>澀谷區</option>
                                    <option>中野區</option>
                                    <option>杉並區</option>
                                    <option>豐島區</option>
                                    <option>北區</option>
                                    <option>板橋區</option>
                                    <option>練馬區</option>
                                    <option>台東區</option>
                                    <option>墨田區</option>
                                    <option>江東區</option>
                                    <option>荒川區</option>
                                    <option>足立區</option>
                                    <option>葛飾區</option>
                                    <option>江戶川區</option>
                                </template>
                                <template v-if="place0!=0">
                                    <option>全域</option>
                                </template>
                            </template>
                        </select>
                        <select>
                            <option>最近車站</option>
                        </select>
                    </div>
                </div>
                <div class=b>
                    <div class=block>
                        <div class=a>房屋面積</div>
                        <input placeholder=最低>
                        ~
                        <input placeholder=最高>
                        <select>
                            <option>平方公尺</option>
                            <option>坪</option>
                        </select>
                    </div>
                    <div class=margin></div>
                    <div class=block>
                        <div class=a>預算價格</div>
                        <input placeholder=最低 v-model=min>
                        ~
                        <input placeholder=最高 v-model=max>
                        萬
                        <select v-model=currency>
                            <option value=jpy>日幣</option>
                            <option value=ntd>臺幣</option>
                            <option value=usd>美金</option>
                            <option value=cny>人民幣</option>
                        </select>
                        <div class=hint><div>
                            <template v-if="currency!='jpy'&&Number.isFinite(+min)&&Number.isFinite(+max)">
                                約等於 {{
                                    ~~(min*data.rate[currency])
                                }} - {{
                                    ~~(max*data.rate[currency])
                                }} 萬日幣。
                            </template>
                            買賣交易均以日幣為主，其它幣別僅供參考，實際匯率請自行向銀行確認換算。
                        </div></div>
                    </div>
                </div>
                <div v-if="data.type=='presale'" class=a>
                    <housePattern></housePattern>
                </div>
                <div v-if="data.type=='medieval'" class=b>
                    <housePattern></housePattern>
                    <div class=margin></div>
                    <div class=block>
                        <div class=a>房屋年齡</div>
                        <input placeholder=自由輸入值>
                        年以內
                    </div>
                </div>
                <div class=c>
                    <div>
                        <button class=o>
                            清除
                        </button><button class=o>
                            搜尋
                        </button>
                    </div>
                </div>
            </div></div>
        </div>
    `,
}
export default houseSearch
