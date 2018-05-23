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
export default{
    boot,
    menu,
    footer,
    header,
    floatBall,
    langToPath,
    top:homepageLikeTop,
}
