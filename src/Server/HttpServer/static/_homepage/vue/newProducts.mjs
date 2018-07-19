import rotation from        './newProducts/rotation.mjs'
let newProducts={
    components:{
        rotation,
    },
    created(){
        console.log(this.href)
    },
    data:()=>({
        focus:0,
    }),
    props:['href','rotation'],
    template:`
        <div class=newProducts>
            <div class=a>
                <div class=n>最新物件</div>
                <div class=o>NEW PRODUCTS</div>
            </div>
            <rotation
                v-model=focus
                :homepage=rotation
            ></rotation>
            <div class=b>
                <div class=n>
                    <div
                        v-for="(o,i) in rotation"
                        :class="{active:focus==i}"
                    ></div>
                </div>
                <div class=o>
                    <a :href=href.presale>
                        瀏覽所有最新物件
                        <img class=a src=img/na01.png>
                        <img class=b src=img/na02.png>
                    </a>
                    <a :href=href.medieval>
                        瀏覽所有中古屋物件
                        <img class=a src=img/na01.png>
                        <img class=b src=img/na02.png>
                    </a>
                </div>
            </div>
        </div>
    `,
}
export default newProducts
