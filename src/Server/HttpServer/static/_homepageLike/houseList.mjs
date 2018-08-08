import commaNumber from '../_commaNumber.mjs'
let price={
    data:()=>({
        currency:'jpy',
    }),
    computed:{
        rateByCurrency(){
            return this.data.rate[this.currency]
        },
    },
    methods:{commaNumber},
    props:['data'],
    template:`
        <span><template v-if="currency!='jpy'">約 </template>{{
                commaNumber(~~(data.min*rateByCurrency))
            }}
            <template v-if="data.min!=data.max"> - {{
                commaNumber(~~(data.max*rateByCurrency))
            }}</template>
            萬
            <select
                @click="e=>e.stopPropagation()"
                v-model=currency
            >
                <option value=jpy>日幣</option>
                <option value=ntd>臺幣</option>
                <option value=usd>美金</option>
                <option value=cny>人民幣</option>
            </select>
        </span>
    `
}
let presale={
    components:{price},
    methods:{
        click(){
            location=`/zh-Hant/presale/${this.data.id}`
        },
    },
    props:['data','rate'],
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
                            {{data.subName}}
                        </div>
                        <div class=brief>
                            {{data.brief0}}<br>
                            {{data.brief1}}
                        </div>
                    </div>
                </div>
                <div class=b>
                    <div>
                        <div class=a>格局：{{data.patternMin}} - {{data.patternMax}}</div>
                        <div class=a>面積：{{data.areaMin}} - {{data.areaMax}} 平方公尺</div>
                        <div class=a>價格：<price
                                :data="{
                                    min:data.priceMin,
                                    max:data.priceMax,
                                    rate,
                                }"
                            ></price>
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
    components:{price},
    methods:{
        click(){
            location=`/zh-Hant/medieval/${this.data.id}`
        },
        selectClick(e){
            e.stopPropagation()
        },
    },
    props:['data','rate'],
    template:`
        <div
            class="house medieval"
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
                    </div>
                </div>
                <div class=b>
                    <div>
                        <div class=a>所在地：{{data.place}}</div>
                        <div class=a>最近車站：{{data.nearestStation}}</div>
                        <div class=a>格局：{{data.pattern}}</div>
                        <div class=a>面積：{{data.area}} 平方公尺</div>
                        <div class=a>價格：<price
                                :data="{
                                    min:data.price,
                                    max:data.price,
                                    rate,
                                }"
                            ></price>
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
    computed:{
        sortArray(){
            return this.data.array.slice((a,b)=>
                new Date(b)-new Date(a)
            )
        },
    },
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
                    <div v-for="(_,i) in Math.ceil(sortArray.length/2)">
                        <div v-for="a in sortArray.slice(2*i,2*i+2)">
                            <presale
                                v-if="data.type=='presale'"
                                :data=a
                                :rate=data.rate
                            ></presale>
                            <medieval
                                v-if="data.type=='medieval'"
                                :data=a
                                :rate=data.rate
                            ></medieval>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
}
export default houseList
