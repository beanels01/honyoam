import housePattern from './houseSearch/housePattern.mjs'
let areaRate=[
    1,
    0.3025,
]
let houseSearch={
    created(){
        this.checkValue()
    },
    components:{housePattern},
    data:()=>({
        currency:'jpy',
        areaMin:'',
        areaMax:'',
        areaUnit:0,
        priceMin:'',
        priceMax:'',
    }),
    methods:{
        checkValue(){
            if(!this.value)
                this.$emit('input',{
                    place0:'',
                    place1:'',
                    areaMin:'',
                    areaMax:'',
                    priceMin:'',
                    priceMax:'',
                    age:'',
                    pattern:{
                        '1K':0,
                        '1DK':0,
                        '1LDK':0,
                        '2LDK':0,
                        '3LDK':0,
                        '>3LDK':0,
                    }
                })
        },
        clear(){
            this.value={
                place0:'',
                place1:'',
                areaMin:'',
                areaMax:'',
                priceMin:'',
                priceMax:'',
                age:'',
                pattern:{
                    '1K':0,
                    '1DK':0,
                    '1LDK':0,
                    '2LDK':0,
                    '3LDK':0,
                    '>3LDK':0,
                }
            }
            this.areaMin=''
            this.areaMax=''
            this.priceMin=''
            this.priceMax=''
        },
        search(){
            this.value.areaMin=this.areaMin/areaRate[this.areaUnit]
            this.value.areaMax=this.areaMax/areaRate[this.areaUnit]
            this.value.priceMin=this.priceMin/this.data.rate[this.currency]
            this.value.priceMax=this.priceMax/this.data.rate[this.currency]
            this.$emit('search')
        },
    },
    props:['data','value',],
    template:`
        <div class=homepageLikeHouseSearch v-if=value>
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
                        <select v-model=value.place0>
                            <option value disabled>地區</option>
                            <option
                                v-for="a of data.place.place0"
                                :value=a
                            >{{a}}</option>
                        </select>
                        <select v-model=value.place1>
                            <option value disabled>區域</option>
                            <option
                                v-for="a of data.place.place1[data.type][value.place0=='東京都'?0:1]"
                                :value=a
                            >{{a}}</option>
                        </select>
<!--
                        <select>
                            <option>最近車站</option>
                        </select>
-->
                    </div>
                </div>
                <div class=b>
                    <div class=block>
                        <div class=a>房屋面積</div>
                        <input placeholder=最低 v-model=areaMin>
                        ~
                        <input placeholder=最高 v-model=areaMax>
                        <select v-model=areaUnit>
                            <option value=0>平方公尺</option>
                            <option value=1>坪</option>
                        </select>
                    </div>
                    <div class=margin></div>
                    <div class=block>
                        <div class=a>預算價格</div>
                        <input placeholder=最低 v-model=priceMin>
                        ~
                        <input placeholder=最高 v-model=priceMax>
                        萬
                        <select v-model=currency>
                            <option value=jpy>日幣</option>
                            <option value=ntd>臺幣</option>
                            <option value=usd>美金</option>
                            <option value=cny>人民幣</option>
                        </select>
                        <div class=hint><div>
                            <template v-if="
                                currency!='jpy'&&
                                priceMin!==''&&
                                priceMax!==''&&
                                Number.isFinite(+priceMin)&&
                                Number.isFinite(+priceMax)
                            ">
                                約等於 {{
                                    (~~(100*priceMin/data.rate[currency]))/100
                                }} - {{
                                    (~~(100*priceMax/data.rate[currency]))/100
                                }} 萬日幣。
                            </template>
                            買賣交易均以日幣為主，其它幣別僅供參考，實際匯率請自行向銀行確認換算。
                        </div></div>
                    </div>
                </div>
                <div v-if="data.type=='presale'" class=a>
                    <housePattern
                        v-model="value.pattern"
                    ></housePattern>
                </div>
                <div v-if="data.type=='medieval'" class=b>
                    <housePattern
                        v-model="value.pattern"
                    ></housePattern>
                    <div class=margin></div>
                    <div class=block>
                        <div class=a>房屋年齡</div>
                        <input placeholder=自由輸入值 v-model=value.age>
                        年以內
                    </div>
                </div>
                <div class=c>
                    <div>
                        <button class=o @click="clear">
                            清除
                        </button><button class=o @click="search">
                            搜尋
                        </button>
                    </div>
                </div>
            </div></div>
        </div>
    `,
    watch:{
        value(){
            this.checkValue()
        },
    },
}
export default houseSearch
