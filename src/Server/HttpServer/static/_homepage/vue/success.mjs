let success={
    created(){
        this.focus=~~((this.data.data.length-1)/2)
    },
    data:()=>({
        focus:0,
    }),
    methods:{
        goLeft(){
            if(0<=this.focus-1)
                this.focus--
        },
        goRight(){
            if(this.focus+1<this.data.data.length)
                this.focus++
        },
        bnnStyle(){
            return{
                left:`calc(0px - (var(--bnnaMargin) + var(--bnnaWidth)) * ${this.focus} - var(--bnnaWidth) / 2)`
            }
        },
        optionStyle(c,i){
            return{
                left:`calc((var(--bnnaMargin) + var(--bnnaWidth)) * ${i})`
            }
        },
    },
    props:['data','href'],
    template:`
        <div class=success>
            <div class=a>
                <div class=n>{{data.language.caseStudy}}</div>
                <div class=o>CASE STUDY</div>
            </div>
            <div class=b>
                <div class=n>
                    <div
                        class=n
                        :style=bnnStyle()
                    >
                        <div
                            v-for="(c,i) in data.data"
                            class=a
                            :style=optionStyle(c,i)
                            @click="location=href+'/'+c._id"
                        >
                            <img class=n :src="'image/'+c.image">
                            <div class=o></div>
                            <div class=p><div>
                                {{c.title}}
                            </div></div>
                        </div>
                    </div>
                </div>
                <div class="arrow left" @click=goLeft>
                    <i class=material-icons>chevron_left</i>
                </div>
                <div class="arrow right" @click=goRight>
                    <i class=material-icons>chevron_right</i>
                </div>
            </div>
            <div class=c>
                <button @click="location=href+'/success'">{{data.language.more}}</button>
            </div>
        </div>
    `
}
export default success
