import commaNumber from '../_commaNumber.mjs'
import pageSelect from  './pageSelect.mjs'
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
            }} <template v-if="data.min!=data.max"> - {{
                commaNumber(~~(data.max*rateByCurrency))
            }}</template> 萬 <select
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
                        <div class=title>{{data.name}}</div>
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
                <img :src="
                    typeof data.image=='string'?
                        '/image/'+data.image
                    :
                        data.image.url
                ">
            </div>
            <div class=b><div>
                <div class=a>
                    <div>
                        <div class=title>{{data.name}}</div>
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
    components:{presale,medieval,pageSelect},
    computed:{
        sortArray(){
            let now=new Date
            return this.data.array.filter(o=>
                !this.data.search||(
                    this.data.search.place0==''||
                    this.data.search.place0=='all'||
                    o.place0==this.data.search.place0
                )&&(
                    this.data.search.place1==''||
                    this.data.search.place1=='all'||
                    o.place1==this.data.search.place1
                )&&(
                    this.data.type=='presale'?
                        (
                            this.data.search.areaMin==''||
                            this.data.search.areaMin<=o.areaMax
                        )&&(
                            this.data.search.areaMax==''||
                            o.areaMin<=this.data.search.areaMax
                        )&&(
                            this.data.search.priceMin==''||
                            this.data.search.priceMin<=o.priceMax
                        )&&(
                            this.data.search.priceMax==''||
                            o.priceMin<=this.data.search.priceMax
                        )&&(
                            Object.entries(this.data.search.pattern).every(([k,v])=>!v)||
                            o.pattern.some(a=>
                                this.data.search.pattern['1K']&&a=='1K'||
                                this.data.search.pattern['1DK']&&a=='1DK'||
                                this.data.search.pattern['1LDK']&&a=='1LDK'||
                                this.data.search.pattern['2LDK']&&a=='2LDK'||
                                this.data.search.pattern['3LDK']&&a=='3LDK'||
                                this.data.search.pattern['>3LDK']&&4<=+a.substring(0,1)
                            )
                        )
                    :
                        (
                            this.data.search.areaMin==''||
                            this.data.search.areaMin<=o.area
                        )&&(
                            this.data.search.areaMax==''||
                            o.area<=this.data.search.areaMax
                        )&&(
                            this.data.search.priceMin==''||
                            this.data.search.priceMin<=o.price
                        )&&(
                            this.data.search.priceMax==''||
                            o.price<=this.data.search.priceMax
                        )&&(
                            this.data.search.pattern['1K']&&o.pattern=='1K'||
                            this.data.search.pattern['1DK']&&o.pattern=='1DK'||
                            this.data.search.pattern['1LDK']&&o.pattern=='1LDK'||
                            this.data.search.pattern['2LDK']&&o.pattern=='2LDK'||
                            this.data.search.pattern['3LDK']&&o.pattern=='3LDK'||
                            this.data.search.pattern['>3LDK']&&o.pattern&&4<=+o.pattern.substring(0,1)
                        )&&(
                            this.data.search.age==''||
                                (now-new Date(o.dateYear+(o.dateMonth?`-${o.dateMonth}`:'')))/
                                (365*24*60*60*1000)
                            <=
                                +this.data.search.age
                        )
                )
            ).sort((a,b)=>
                new Date(b.date)-new Date(a.date)
            )
        },
        sortArrayByPage(){
            return this.sortArray.slice(
                this.page*this.housePerPage,
                (this.page+1)*this.housePerPage
            )
        },
    },
    data:()=>({
        page:0,
        housePerPage:20,
    }),
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
                    <div v-for="(_,i) in Math.ceil(sortArrayByPage.length/2)">
                        <div v-for="a in sortArrayByPage.slice(2*i,2*i+2)">
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
            <pageSelect
                :value=page
                @input="v=>{scrollTo(0,0);page=v}"
                :length="Math.ceil(sortArray.length/housePerPage)"
            ></pageSelect>
        </div>
    `,
}
export default houseList
