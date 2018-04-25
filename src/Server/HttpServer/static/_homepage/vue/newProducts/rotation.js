let rotationOption={
    props:[
        'mobileImage',
        'desktopImage',
        'title',
        'content',
        'time',
        'color',
        'opacity',
    ],
    methods:{
        optionMobileStyle(){
            return{
                backgroundImage:`url('image/${this.mobileImage}')`
            }
        },
        optionDesktopStyle(){
            return{
                backgroundImage:`url('image/${this.desktopImage}')`
            }
        },
        backgroundColor(){
            return{
                '--color':`rgb(${this.color})`,
                backgroundColor:`rgba(${this.color},${this.opacity})`
            }
        },
    },
    template:`
        <div class=option>
            <div
                class="background mobile"
                :style=optionMobileStyle()
            ></div>
            <div
                class="background desktop"
                :style=optionDesktopStyle()
            ></div>
            <div class="foreground" :style=backgroundColor()>
                <div class=a>{{title}}</div>
                <div class=hl></div>
                <div class=b>{{content}}</div>
                <div class=hl></div>
                <div class=c>
                    <div class=n>{{time}}</div>
                </div>
            </div>
        </div>
    `,
}
let rotation={
    props:['homepage','value'],
    created(){
        this.checkValue()
        this.setAutoNext()
    },
    data(){
        return{
            intervalId:null,
        }
    },
    components:{rotationOption},
    methods:{
        checkValue(){
            if(typeof this.value!='number')
                this.$emit('input',0)
        },
        setAutoNext(){
            this.intervalId=setInterval(()=>
                this.go(+1)
            ,8e3)
        },
        goLeft(){
            this.goByClick(-1)
        },
        goRight(){
            this.goByClick(+1)
        },
        goByClick(d){
            clearInterval(this.intervalId)
            this.setAutoNext()
            this.go(d)
        },
        go(d){
            let next=(this.value+d+this.homepage.length)%
                this.homepage.length
            this.$emit('input',next)
        },
    },
    template:`
        <div class=rotation>
            <rotationOption
                v-for="(o,i) in this.homepage"
                :class="{active:value==i}"
                :mobileImage=o.mobileImage
                :desktopImage=o.desktopImage
                :title=o.title
                :content=o.content
                :time=o.time
                :color=o.color
                :opacity=o.opacity
            >
            </rotationOption>
            <div class="arrow left" @click=goLeft>
                <i class=material-icons>chevron_left</i>
            </div>
            <div class="arrow right" @click=goRight>
                <i class=material-icons>chevron_right</i>
            </div>
            <div class=vl></div>
        </div>
    `,
    watch:{
        value(n){
            this.checkValue()
        },
    },
}
export default rotation
