import header from          './_homepageLike/header.mjs'
import menu from            './_homepageLike/menu.mjs'
import footer from          './_homepageLike/footer.mjs'
import langToPath from      './_homepageLike/langToPath.mjs'
import houseList from       './_homepageLike/houseList.mjs'
import mightLike from       './_homepageLike/mightLike.mjs'
async function boot(main){
    await vueLoad
    new Vue(Object.setPrototypeOf({
        el:document.getElementById('main'),
        data:JSON.parse(decodeURIComponent(
            document.getElementById('arg').textContent
        )).vueData,
    },main))
}
let floatBall={
    props:['value','href'],
    template:`
        <div class=floatBall>
            <a :href=href>
                <div style="display:inline-block;">
                    <div class=n><div>
                        {{value.substring(0,2)}}<br>{{value.substring(2,4)}}
                    </div></div>
                    <div class=o><div>
                        <img class=n src=/img/contact/down.png>
                        <img class=o src=/img/contact/down_on.png>
                    </div></div>
                </div>
            </a>
        </div>
    `
}
let current={
    props:['data'],
    template:`
        <div class=homepageLikeCurrent>
            <div>
                <template
                    v-for="a of data.slice(0,data.length-1)"
                >
                    {{a}}
                    >
                </template>
                <span class=current>{{data[data.length-1]}}</span>
            </div>
        </div>
    `
}
let top={
    components:{aCurrent:current},
    props:['data'],
    template:`
        <div class=homepageLikeTop :class="{
            mobile:     data.mobile,
            desktop:    data.desktop,
        }">
            <div class=static>
                <div>
                    <div class=a>{{data.title0}}</div>
                    <div class=b>{{data.title1}}</div>
                </div>
            </div>
            <aCurrent
                :data="['首頁',data.title0]"
            ></aCurrent>
        </div>
    `
}
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
                            <option>東京都</option>
                            <option>神奈川縣</option>
                            <option>千葉縣</option>
                            <option>埼玉縣</option>
                            <option>大阪府</option>
                            <option>京都府</option>
                            <option>其他</option>
                        </select>
                        <select v-model=place1>
                            <option value disabled>區域</option>
                            <template v-if="data.type=='presale'">
                                <option>東京都心6區</option>
                                <option>東京都區部</option>
                            </template>
                            <template v-if="data.type=='medieval'">
                                <option>都心3區</option>
                                <option>東京都心6</option>區
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
let contactInfo={
    template:`
        <div class=homepageLikeContactInfo>
            <div>
                <div>
                    <div class=n>
                        <img src=/_homepageLike/qa01.png>
                    </div>
                    <div class=o>
                        <div class=a>電話直撥</div>
                        <div class=line></div>
                        <div class=b>+886 2 2785-5865</div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div class=n>
                        <img src=/_homepageLike/qa02.png>
                    </div>
                    <div class=o>
                        <div class=a>Skype</div>
                        <div class=line></div>
                        <div class=b>honyo-skype</div>
                    </div>
                </div>
            </div>
        </div>
    `,
}
let reserveButton={
    template:`
        <a class=homepageLikeReserveButton><span>> 預約看房</span></a>
    `,
}
let moreButton={
    template:`
        <a class=homepageLikeMoreButton><span>> 貸款試算</span></a>
    `,
}
export default{
    boot,
    menu,
    footer,
    header,
    floatBall,
    langToPath,
    top,
    houseSearch,
    houseList,
    mightLike,
    contactInfo,
    current,
    reserveButton,
    moreButton,
}
