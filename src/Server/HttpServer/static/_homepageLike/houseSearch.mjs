import housePattern from './houseSearch/housePattern.mjs'
let areaRate=[
    1,
    0.3025,
]
let houseSearch={
    created(){
        this.checkValue()
    },
    computed:{
        language(){
            return this.data.language.homepageLike.houseSearch
        },
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
                        '1R':0,
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
                    '1R':0,
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
                        {{language.尋找您想要的}}{{
                            language[data.type=='presale'?'新成屋':'中古屋']
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
                        <div class=a>{{language.搜尋區域}}</div>
                        <select v-model=value.place0 @input="value.place1=''">
                            <option value disabled>{{language.地區}}</option>
                            <option value='all'>{{language.全部}}</option>
                            <option
                                v-for="a of data.place.place0"
                                :value=a
                            >{{a}}</option>
                        </select>
                        <select v-model=value.place1>
                            <option value disabled>{{language.地區}}</option>
                            <option value='all'>{{language.全部}}</option>
                            <option
                                v-for="a of data.place.place1[data.type][value.place0=='東京都'?0:1]"
                                :value=a
                            >{{a}}</option>
                        </select>
                    </div>
                </div>
                <div class=b>
                    <div class=block>
                        <div class=a>{{language.房屋面積}}</div>
                        <input :placeholder=language.最低 v-model=areaMin>
                        ~
                        <input :placeholder=language.最高 v-model=areaMax>
                        <select v-model=areaUnit>
                            <option value=0>{{language.平方公尺}}</option>
                            <option value=1>{{language.坪}}</option>
                        </select>
                    </div>
                    <div class=margin></div>
                    <div class=block>
                        <div class=a>{{language.預算價格}}</div>
                        <input :placeholder=language.最低 v-model=priceMin>
                        ~
                        <input :placeholder=language.最高 v-model=priceMax>
                        {{language.萬}}
                        <select v-model=currency>
                            <option value=jpy>{{language.日幣}}</option>
                            <option value=ntd>{{language.臺幣}}</option>
                            <option value=usd>{{language.美金}}</option>
                            <option value=cny>{{language.人民幣}}</option>
                        </select>
                        <div class=hint><div>
                            <template v-if="
                                currency!='jpy'&&
                                priceMin!==''&&
                                priceMax!==''&&
                                Number.isFinite(+priceMin)&&
                                Number.isFinite(+priceMax)
                            ">
                                {{language.約等於}} {{
                                    (~~(100*priceMin/data.rate[currency]))/100
                                }} - {{
                                    (~~(100*priceMax/data.rate[currency]))/100
                                }} {{language.萬}}{{language.日幣}}。
                            </template>
                            {{language.notice0}}
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
                        class="block blockA"
                    ></housePattern>
                    <div class=margin></div>
                    <div class="block blockB">
                        <div class=a>{{language.房屋年齡}}</div>
                        <input placeholder=自由輸入值 v-model=value.age>
                        {{language.年以內}}
                    </div>
                </div>
                <div class=c>
                    <div>
房屋年齡:'房屋年齡',
年以內:'年以內',
清除:'清除',
搜尋:'搜尋',
                        <button class=o @click="clear">
                            {{language.清除}}
                        </button><button class=o @click="search">
                            {{language.搜尋}}
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
