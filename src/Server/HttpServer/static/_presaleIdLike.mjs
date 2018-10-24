import homepageLike from'./_homepageLike.mjs'
let href=(currentLanguage,id)=>({
    top:`/${currentLanguage}/presale/${id}`,
    concept:`/${currentLanguage}/presale/${id}/concept`,
    environment:`/${currentLanguage}/presale/${id}/environment`,
    traffic:`/${currentLanguage}/presale/${id}/traffic`,
    pattern:`/${currentLanguage}/presale/${id}/pattern`,
    summary:`/${currentLanguage}/presale/${id}/summary`,
    video:`/${currentLanguage}/presale/${id}/video`,
})
let header={
    props:['data','href'],
    template:`
        <div class=presaleIdLikeHeader>
            <a
                :href=href.top
                :class="{active:data.focus=='top'}"
            >TOP</a>
            <a
                v-if=data.show.showConcept
                :href=href.concept
                :class="{active:data.focus=='concept'}"
            >{{data.language.concept}}</a>
            <a
                v-if=data.show.showEnvironment
                :href=href.environment
                :class="{active:data.focus=='environment'}"
            >{{data.language.environment}}</a>
            <a
                v-if=data.show.showTraffic
                :href=href.traffic
                :class="{active:data.focus=='traffic'}"
            >{{data.language.traffic}}</a>
            <a
                :href=href.pattern
                :class="{active:data.focus=='pattern'}"
            >{{data.language.pattern}}</a>
            <a
                v-if=data.show.showSummary
                :href=href.summary
                :class="{active:data.focus=='summary'}"
            >{{data.language.summary}}</a>
            <a
                v-if=data.show.showVideo
                :href=href.video
                :class="{active:data.focus=='video'}"
            >{{data.language.video}}</a>
        </div>
    `,
}
let top={
    computed:{
        title(){
            return this.data.title+
                (this.data.part?` > ${this.data.part}`:'')
        },
        styleB(){
            return{
                backgroundImage:`url(/image/${this.data.background})`
            }
        },
    },
    props:[
        'data',
        'href',
    ],
    methods:{
        change(e){
            location=this.href[e.target.value]
        },
    },
    template:`
        <div class=presaleIdLikeTop>
            <div class=a>
                <select
                    :value=data.focus
                    @change=change
                >
                    <option value=top>TOP</option>
                    <option
                        v-if=data.show.showConcept
                        value=concept
                    >{{data.language.content}}</option>
                    <option
                        v-if=data.show.showEnvironment
                        value=environment
                    >{{data.language.environment}}</option>
                    <option
                        v-if=data.show.showTraffic
                        value=traffic
                    >{{data.language.traffic}}</option>
                    <option
                        value=pattern
                    >{{data.language.pattern}}</option>
                    <option
                        v-if=data.show.showSummary
                        value=summary
                    >{{data.language.summary}}</option>
                    <option
                        v-if=data.show.showVideo
                        value=video
                    >{{data.language.video}}</option>
                </select>
            </div>
            <div class=b :style=styleB>
                <div>
                    <div>{{title}}</div>
                </div>
            </div>
        </div>
    `,
}
let main={
    components:{
        reserveButton:homepageLike.reserveButton,
        moreButton:homepageLike.moreButton,
    },
    props:['data'],
    template:`
        <div class=presaleIdLikeMain>
            <div class=b>
                <span class=a>{{data.part[0]}}</span> /
                {{data.part[1]}}
            </div>
            <div class=c>
                <div class=a>
                    <div class=title>{{data.title}}</div>
                    <div class=content>{{data.content}}</div>
                </div>
                <div class=b>
                    <div class=n>
                        <reserveButton
                            :data="{
                                href:data.href
                            }"
                        ></reserveButton>
                    </div>
                    <div class=o>
                        <moreButton></moreButton>
                    </div>
                </div>
            </div>
        </div>
    `
}
let hypertext={
    props:['data'],
    template:`
        <div class=presaleIdLikeHypertext>
            <div class=b>
                <div v-html=data.hypertext></div>
            </div>
        </div>
    `,
}
let footer={
    props:['data'],
    template:`
        <div class=presaleIdLikeFooter>
            <div>{{data.language.notice}}：
                {{data.content}}</div>
        </div>
    `
}
export default{
    header,
    top,
    main,
    hypertext,
    footer,
    href,
}
