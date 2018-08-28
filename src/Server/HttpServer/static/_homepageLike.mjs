import header from          './_homepageLike/header.mjs'
import menu from            './_homepageLike/menu.mjs'
import footer from          './_homepageLike/footer.mjs'
import langToPath from      './_homepageLike/langToPath.mjs'
import houseList from       './_homepageLike/houseList.mjs'
import mightLike from       './_homepageLike/mightLike.mjs'
import houseSearch from     './_homepageLike/houseSearch.mjs'
import contactInfo from     './_homepageLike/contactInfo.mjs'
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
