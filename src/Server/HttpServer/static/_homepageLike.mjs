import header from './_homepageLike/header.mjs'
import menu from './_homepageLike/menu.mjs'
import footer from './_homepageLike/footer.mjs'
import langToPath from './_homepageLike/langToPath.mjs'
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
let homepageLikeTop={
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
            <div class=a>
                <div>
                    首頁 > <span class=current>{{data.title0}}</span>
                </div>
            </div>
        </div>
    `
}
let houseSearch={
    template:`
        <div class=homepageLikeHouseSearch>
            <div class=b>
                <div>
                    <span class=blueBar></span>
                    <span class=title>
                        尋找您想要的新成屋<i
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
                        <select>
                            <option>地區</option>
                        </select>
                        <select>
                            <option>區域</option>
                        </select>
                        <select>
                            <option>車站區域</option>
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
                        <input placeholder=最低>
                        ~
                        <input placeholder=最高>
                        萬
                        <select>
                            <option>日幣</option>
                            <option>臺幣</option>
                        </select>
                        <div class=hint><div>
                            在此標註匯率與相關換算
                        </div></div>
                    </div>
                </div>
                <div class=a>
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
export default{
    boot,
    menu,
    footer,
    header,
    floatBall,
    langToPath,
    top:homepageLikeTop,
    houseSearch,
}
