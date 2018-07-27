import homepageLike from    '../_homepageLike.mjs'
let normalBlock={
    computed:{
        date(){
            return new Date(this.data.timestamp)
        }
    },
    props:['data','value',],
    template:`
        <div
            :class="{focus:value}"
            @click="$emit('click')"
        >
            <div class=a>
                <div class=a>
                    {{1900+date.getYear()}}年{{1+date.getMonth()}}月{{date.getDate()}}日
                </div>
                <div class=b><span>一般公告</span></div>
            </div>
            <div class=b>
                <div
                    class=b
                    @click="$emit('input',!value)"
                >
                    <div
                        class=a
                    >
                        {{data.title}}
                    </div>
                    <div class=b>
                        <img class=a src=/_news/img/arrow.png>
                        <img class=b src=/_news/img/arrow-focus.png>
                    </div>
                </div>
                <div
                    class=c
                    v-html=data.content
                ></div>
            </div>
        </div>
    `
}
let enewsLikeBlock={
    computed:{
        date(){
            return new Date(this.data.timestamp)
        }
    },
    props:['data'],
    template:`
        <div
            @click="$emit('click')"
        >
            <div class=a><div>
                <div class=a>
                    {{1900+date.getYear()}}年{{1+date.getMonth()}}月{{date.getDate()}}日
                </div>
                <!-- <div class=b><span>ENEWS ‧ 第 161 期</span></div> -->
                <div class=b><span>{{
                    {
                        enews:'ENEWS',
                        president:'社長專欄',
                        success:'成功案例',
                    }[data.type]
                }}</span></div>
            </div></div>
            <div class=b>
                <div class=b>
                    <div class=a>{{data.title}}</div>
                    <div class=b>More +</div>
                </div>
            </div>
        </div>
    `
}
let enewsLikeContent={
    computed:{
        date(){
            return new Date(this.data.current.timestamp)
        }
    },
    props:['data',],
    template:`
        <div>
            <div class=a>
                <div class=a>
                    <span>{{
                        {
                            enews:'ENEWS',
                            president:'社長專欄',
                            success:'成功案例',
                        }[data.current.type]
                    }}</span>
                </div>
                <div class=b>
                    {{1900+date.getYear()}}年{{1+date.getMonth()}}月{{date.getDate()}}日
                </div>
            </div>
            <div class=b>
                {{data.current.title}}
            </div>
            <div class=c v-html=data.current.content></div>
            <div class=d>
                <div class=a>
                    <div v-if=data.previous @click="$emit('previous')">
                        <img src="/_news/img/num-l.png">
                        上一則<span class=a>：{{data.previous.title.slice(0,6)}}……</span>
                    </div>
                </div>
                <div class=b>
                    <div @click="$emit('back')">
                        回列表
                    </div>
                </div>
                <div class=c>
                    <div v-if=data.next @click="$emit('next')">
                        下一則<span class=a>：{{data.next.title.slice(0,6)}}……</span>
                        <img src="/_news/img/num-r.png">
                    </div>
                </div>
            </div>
        </div>
    `,
}
let pageSelect={
    props:['length','value'],
    template:`
        <div class=pageSelect>
            <div class=mobile>
                <div
                    @click="$emit('input',value-1)"
                    :style="{visibility:0<=value-1?'visible':'hidden'}"
                >
                    <img src="/_news/img/num-l.png">
                </div>
                <template v-if="0<=value-2">…</template>
                <div
                    v-if="0<=value-1"
                    @click="$emit('input',value-1)"
                >
                    {{value-1+1}}
                </div>
                <div class=focus>
                    {{value+1}}
                </div>
                <div
                    v-if="value+1<length"
                    @click="$emit('input',value+1)"
                >
                    {{value+1+1}}
                </div>
                <template v-if="value+2<length">…</template>
                <div
                    @click="$emit('input',length-1)"
                    :style="{visibility:value+1<length?'visible':'hidden'}"
                >
                    <img src="/_news/img/num-r.png">
                </div>
            </div>
            <div class=desktop>
                <div
                    @click="$emit('input',value-1)"
                    :style="{visibility:0<=value-1?'visible':'hidden'}"
                >
                    <img src="/_news/img/num-l.png">
                </div>
                <div
                    v-for="(a,i) of [...Array(length)]"
                    :class="{focus:value==i}"
                    @click="$emit('input',i)"
                >
                    {{i+1}}
                </div>
                <div
                    @click="$emit('input',length-1)"
                    :style="{visibility:value+1<length?'visible':'hidden'}"
                >
                    <img src="/_news/img/num-r.png">
                </div>
            </div>
        </div>
    `,
    watch:{
        value(){
        },
    },
}
let aMain={
    created(){
        if(this.data.id){
            let newsById=this.data.news.filter(a=>this.data.id==a._id)[0]
            this.year=(new Date(newsById.timestamp)).getYear()
            this.month=(new Date(newsById.timestamp)).getMonth()
            this.type=newsById.type
            if(this.type=='normal'){
                this.normalFocus[this.newsByYearAndType.findIndex(a=>
                    a._id==this.data.id
                )]=1
            }else{
                this.enewsLikeFocus=this.newsByYearAndType.findIndex(a=>
                    a._id==this.data.id
                )
            }
        }else{
            this.year=Math.max(...this.yearList)
            this.month=Math.max(...this.monthList)
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
        normalFocus:{},
        enewsLikeFocus:null,
        page:0,
    }),
    methods:{
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
                    >
                        <option
                            v-for="y of yearList"
                            :value=y
                        >{{1900+y}} 年</option>
                    </select>
                    <select
                        class=yearSelect
                        v-model=month
                    >
                        <option
                            v-for="m of monthList"
                            :value=m
                        >{{m}} 月</option>
                    </select>
                </div>
                <div class=typeSelect>
                    <select class=mobile v-model=type
                        @input="enewsLikeFocus=null"
                    >
                        <option value="normal">一般公告</option>
                        <option value="enews">E-News</option>
                        <option value="president">社長專欄</option>
                        <option value="success">成功案例</option>
                    </select>
                    <div class=desktop>
                        <div
                            :class="{focus:type=='normal'}"
                            @click="type='normal';enewsLikeFocus=null"
                        >一般公告</div>
                        <div
                            :class="{focus:type=='enews'}"
                            @click="type='enews';enewsLikeFocus=null"
                        >E-News</div>
                        <div
                            :class="{focus:type=='president'}"
                            @click="type='president';enewsLikeFocus=null"
                        >社長專欄</div>
                        <div
                            :class="{focus:type=='success'}"
                            @click="type='success';enewsLikeFocus=null"
                        >成功案例</div>
                    </div>
                </div>
                <div
                    v-if="type=='normal'"
                    class=normal
                >
                    <normalBlock
                        v-for="(a,i) of newsByYearAndType.slice(8*page,8*(page+1))"
                        :value=normalFocus[i]
                        @click="location=normalFocus[i]?href.news:href.news+'/'+a._id"
                        :data=a
                    ></normalBlock>
                    <pageSelect
                        v-model=page
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
                            @click="location=href.news+'/'+a._id"
                            :data=a
                        ></enewsLikeBlock>
                    </div>
                    <pageSelect
                        v-model=page
                        v-if="enewsLikeFocus==null"
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
                        @previous="location=href.news+'/'+newsByYearAndType[enewsLikeFocus-1]._id"

                        @next="location=href.news+'/'+newsByYearAndType[enewsLikeFocus+1]._id"
                        @back="location=href.news"
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
/*
                        v-model=normalFocus[i]
*/
