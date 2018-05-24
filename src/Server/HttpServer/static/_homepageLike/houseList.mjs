let presale={
    methods:{
        click(){
            location=`/zh-Hant/presale/${this.data.id}`
        },
        selectClick(e){
            e.stopPropagation()
        },
    },
    props:['data'],
    template:`
        <div
            class="house presale"
            @click=click
        >
            <div class=a>
                <img :src="'/image/'+data.image">
            </div>
            <div class=b><div>
                <div class=a>
                    <div>
                        <div class=title>
                            {{data.name}}
                        </div>
                        <div class=subtitle>
                            {{data.title}}
                        </div>
                    </div>
                </div>
                <div class=b>
                    <div>
                        <div class=a>格局：{{data.patternMin}} - {{data.patternMax}}</div>
                        <div class=a>面積：{{data.areaMin}} - {{data.areaMax}} 平方公尺</div>
                        <div class=a>價格：{{data.priceMin}} - {{data.priceMax}} 萬
                            <select @click=selectClick>
                                <option>日幣</option>
                                <option>臺幣</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div></div>
            <div
                v-if=data.soldout
                class=c
            ><div>
                <img src=/_presale/saleout.png>
            </div></div>
        </div>
    `
}
let medieval={
    methods:{
        click(){
            location=`/zh-Hant/medieval/-id-`
        },
        selectClick(e){
            e.stopPropagation()
        },
    },
    props:['data'],
    template:`
        <div
            class="house medieval"
            @click=click
        >
            <div class=a>
                <img src="/_medieval/demo0.png">
            </div>
            <div class=b><div>
                <div class=a>
                    <div>
                        <div class=title>
                            {{data.name}}
                        </div>
                        <div class=subtitle>
                            {{data.title}}
                        </div>
                    </div>
                </div>
                <div class=b>
                    <div>
                        <div class=a>格局：{{data.pattern}}</div>
                        <div class=a>面積：{{data.area}} 平方公尺</div>
                        <div class=a>價格：{{data.price}} 萬
                            <select @click=selectClick>
                                <option>日幣</option>
                                <option>臺幣</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div></div>
            <div
                v-if=data.soldout
                class=c
            ><div>
                <img src=/_presale/saleout.png>
            </div></div>
        </div>
    `
}
let houseList={
    components:{presale,medieval},
    props:['data'],
    template:`
        <div class=homepageLikeHouseList>
            <div class=d>
                <div>
                    <span class=homepageLikeBlueBar></span>
                    <span class=homepageLikeTitle>{{
                        data.type=='presale'?'新成屋':'中古屋'
                    }}物件</span>
                </div>
            </div>
            <div class=e>
                <div>
                    <div v-for="(_,i) in Math.ceil(data.array.length/2)">
                        <div v-for="a in data.array.slice(2*i,2*i+2)">
                            <presale
                                v-if="data.type=='presale'"
                                :data=a
                            ></presale>
                            <medieval
                                v-if="data.type=='medieval'"
                                :data=a
                            ></medieval>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
}
export default houseList
