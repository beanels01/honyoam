import homepageLike from        '../_homepageLike.mjs'
import normalBlock from         './vue/normalBlock.mjs'
import enewsLikeBlock from      './vue/enewsLikeBlock.mjs'
import enewsLikeContent from    './vue/enewsLikeContent.mjs'
import pageSelect from          './vue/pageSelect.mjs'
let aMain={
    created(){
        this.setId(this.data.id)
        if(typeof window!='undefined'){
            history.replaceState({id:this.id},'',`${this.currentLanguage}/news${this.id?`/${this.id}`:''}`)
            onpopstate=e=>{
                this.setId(e.state.id)
            }
        }
    },
    components:{
        hlFooter:   homepageLike.footer,
        hlMenu:     homepageLike.menu,
        hlHeader:   homepageLike.header,
        floatBall:  homepageLike.floatBall,
        normalBlock,
        enewsLikeBlock,
        enewsLikeContent,
        pageSelect,
    },
    computed:{
        href(){
            return homepageLike.langToPath(this.currentLanguage)
        },
        yearList(){
            let a=[...new Set(this.data.news.map(a=>(new Date(a.timestamp)).getYear()))]
            a.sort()
            return a
        },
        monthList(){
            let a=[...new Set(this.data.news.filter(a=>
                (new Date(a.timestamp)).getYear()==this.year
            ).map(a=>
                (new Date(a.timestamp)).getMonth()
            ))]
            a.sort()
            return a
        },
        newsByYearAndType(){
            let a=this.data.news.filter(a=>{
                let date=new Date(a.timestamp)
                return date.getYear()==this.year&&
                    date.getMonth()==this.month&&
                    a.type==this.type
            })
            a.sort((a,b)=>(new Date(b.timestamp))-(new Date(a.timestamp)))
            return a
        },
    },
    data:()=>({
        menu:0,
        year:0,
        month:0,
        type:'normal',
        normalFocus:null,
        enewsLikeFocus:null,
        page:0,
    }),
    methods:{
        setId(v){
            this.id=v
            if(this.id){
                let date=new Date(newsById.timestamp)
                let newsById=this.data.news.filter(a=>this.id==a._id)[0]
                this.year=date.getYear()
                this.month=date.getMonth()
                this.type=newsById.type
                let index=this.newsByYearAndType.findIndex(a=>
                    a._id==this.id
                )
                this.page=~~(index/8)
                this[this.type=='normal'?'normalFocus':'enewsLikeFocus']=index
            }else{
                this.year=Math.max(...this.yearList)
                this.month=Math.max(...this.monthList)
            }
        },
        setIdHistory(v){
            if(this.id==v)
                return
            this.setId(v)
            history.pushState({id:this.id},'',`${this.currentLanguage}/news${this.id?`/${this.id}`:''}`)
        },
        onEnewsLikeBlockClick(a,i){
            if(this.enewsLikeFocus==i){
                this.enewsLikeFocus=null
                this.setIdHistory()
            }else{
                this.setIdHistory(a._id)
            }
        },
        onNormalBlockClick(a,i){
            if(this.normalFocus==i){
                this.normalFocus=null
                this.setIdHistory()
            }else{
                this.setIdHistory(a._id)
            }
        },
    },
    props:['data','language','currentLanguage','mainSeminar',],
    template:`
        <div id=main>
            <hlHeader
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
                v-model=menu
            ></hlHeader>
            <template v-if=!menu>
                <div class=top>
                    <div class=mobile>
                        <div class=a><div>
                            <div class=a>最新消息</div>
                            <div class=b>News</div>
                        </div></div>
                        <div class=b>
                            首頁 > <span class=n>最新消息</span>
                        </div>
                    </div>
                    <div class=desktop><div><div>
                        <div class=n>
                            <div class=a>最新消息</div>
                            <div class=b>NEWS</div>
                        </div>
                        <div class=o>
                            首頁 > 最新消息
                        </div>
                    </div></div></div>
                </div>
                <div class=dateSelect>
                    <select
                        class=yearSelect
                        v-model=year
                        @input="setIdHistory()"
                    >
                        <option
                            v-for="y of yearList"
                            :value=y
                        >{{1900+y}} 年</option>
                    </select>
                    <select
                        class=yearSelect
                        v-model=month
                        @input="setIdHistory()"
                    >
                        <option
                            v-for="m of monthList"
                            :value=m
                        >{{m}} 月</option>
                    </select>
                </div>
                <div class=typeSelect>
                    <select class=mobile v-model=type
                        @input="setIdHistory();page=0;normalFocus=enewsLikeFocus=null"
                    >
                        <option value="normal">一般公告</option>
                        <option value="enews">E-News</option>
                        <option value="president">社長專欄</option>
                        <option value="success">成功案例</option>
                    </select>
                    <div class=desktop>
                        <div
                            :class="{focus:type=='normal'}"
                            @click="setIdHistory();type='normal';page=0;normalFocus=enewsLikeFocus=null"
                        >一般公告</div>
                        <div
                            :class="{focus:type=='enews'}"
                            @click="setIdHistory();type='enews';page=0;normalFocus=enewsLikeFocus=null"
                        >E-News</div>
                        <div
                            :class="{focus:type=='president'}"
                            @click="setIdHistory();type='president';page=0;normalFocus=enewsLikeFocus=null"
                        >社長專欄</div>
                        <div
                            :class="{focus:type=='success'}"
                            @click="setIdHistory();type='success';page=0;normalFocus=enewsLikeFocus=null"
                        >成功案例</div>
                    </div>
                </div>
                <div
                    v-if="type=='normal'"
                    class=normal
                >
                    <normalBlock
                        v-for="(a,i) of newsByYearAndType.slice(8*page,8*(page+1))"
                        :value="normalFocus==8*page+i"
                        @click="onNormalBlockClick(a,8*page+i)"
                        :data=a
                    ></normalBlock>
                    <pageSelect
                        v-model=page
                        @input="setIdHistory()"
                        :length="
                            Math.max(1,Math.ceil(newsByYearAndType.length/8))
                        "
                    ></pageSelect>
                </div>
                <div
                    v-if="type!='normal'"
                    class=enewsLike
                >
                    <div
                        v-if="enewsLikeFocus==null"
                        class=a
                    >
                        <enewsLikeBlock
                            v-for="(a,i) of newsByYearAndType.slice(8*page,8*(page+1))"
                            @click="onEnewsLikeBlockClick(a,i)"
                            :data=a
                        ></enewsLikeBlock>
                    </div>
                    <pageSelect
                        v-if="enewsLikeFocus==null"
                        v-model=page
                        @input="setIdHistory()"
                        :length="
                            Math.max(1,Math.ceil(newsByYearAndType.length/8))
                        "
                    ></pageSelect>
                    <enewsLikeContent
                        v-if="enewsLikeFocus!=null"
                        class=b
                        :data="{
                            previous:
                                newsByYearAndType[enewsLikeFocus-1],
                            current:newsByYearAndType[enewsLikeFocus],
                            next:
                                newsByYearAndType[enewsLikeFocus+1],
                        }"
                        @previous="setIdHistory(newsByYearAndType[enewsLikeFocus-1]._id)"

                        @next="setIdHistory(newsByYearAndType[enewsLikeFocus+1]._id)"
                        @back="setIdHistory();enewsLikeFocus=null"
                    ></enewsLikeContent>
                </div>
                <hlFooter
                    :language=language.homepageLike.footer
                    :currentLanguage=currentLanguage
                ></hlFooter>
                <floatBall
                    value=立即聯絡
                    :href=href.qaForm
                ></floatBall>
            </template>
            <hlMenu
                v-if=menu
                :current=data.current
                :language=language
                :currentLanguage=currentLanguage
                :mainSeminar=mainSeminar
            ></hlMenu>
        </div>
    `,
}
export default{
    components:{aMain},
    template:`
        <aMain
            :data=data
            :language=language
            :currentLanguage=currentLanguage
            :mainSeminar=mainSeminar
        ></aMain>
    `,
}
