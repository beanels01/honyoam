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
            return new Date(this.data.timestamp)
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
                        }[data.type]
                    }}</span>
                </div>
                <div class=b>
                    {{1900+date.getYear()}}年{{1+date.getMonth()}}月{{date.getDate()}}日
                </div>
            </div>
            <div class=b>
                {{data.title}}
            </div>
            <div class=c v-html=data.content></div>
            <div class=d>
                <div class=a>
                    <div>
                        <img src="/_news/img/num-l.png">
                        上一則<!-- <span class=a>：而如果有人認為……</span> -->
                    </div>
                </div>
                <div class=b>
                    <div>
                        回列表
                    </div>
                </div>
                <div class=c>
                    <div>
                        下一則<!-- <span class=a>：而如果有人認為……</span> -->
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
    },
    data:()=>({
        menu:0,
        year:118,
        type:'normal',
        normalFocus:{},
        enewsLikeFocus:null,
        page:0,
    }),
    methods:{
        getNewsByYearAndType(y,t){
            let a=this.data.news.filter(a=>
                (new Date(a.timestamp)).getYear()==y&&
                a.type==t
            )
            a.sort((a,b)=>(new Date(b.timestamp))-(new Date(a.timestamp)))
            return a
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
                <select class=yearSelect v-model=year>
                    <option value=118>2018 年</option>
                    <option value=119>2019 年</option>
                    <option value=120>2020 年</option>
                    <option value=121>2021 年</option>
                    <option value=122>2022 年</option>
                    <option value=123>2023 年</option>
                    <option value=124>2024 年</option>
                    <option value=125>2025 年</option>
                </select>
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
                        v-for="(a,i) of getNewsByYearAndType(year,type).slice(8*page,8*(page+1))"
                        v-model=normalFocus[i]
                        :data=a
                    ></normalBlock>
                    <pageSelect
                        v-model=page
                        :length="
                            Math.max(1,Math.ceil(getNewsByYearAndType(year,type).length/8))
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
                            v-for="(a,i) of getNewsByYearAndType(year,type).slice(8*page,8*(page+1))"
                            @click="enewsLikeFocus=i"
                            :data=a
                        ></enewsLikeBlock>
                    </div>
                    <pageSelect
                        v-model=page
                        v-if="enewsLikeFocus==null"
                        :length="
                            Math.max(1,Math.ceil(getNewsByYearAndType(year,type).length/8))
                        "
                    ></pageSelect>
                    <enewsLikeContent
                        v-if="enewsLikeFocus!=null"
                        class=b
                        :data=getNewsByYearAndType(year,type)[enewsLikeFocus]
                    ></enewsLikeContent>
                </div>
                <hlFooter
                    :language=language.homepageLike.footer
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
