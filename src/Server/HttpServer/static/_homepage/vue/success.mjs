let success={
    data:()=>({
        focus:2,
        content:[
            {
                image:'_homepage/success/0.jpg',
                title:'ライオンズマンション東松山',
                salesman:'黃大明',
            },
            {
                image:'_homepage/success/1.jpg',
                title:'ライオンズマンション五反野第３',
                salesman:'黃大明',
            },
            {
                image:'_homepage/success/2.jpg',
                title:'中央林間南パ－ク・ホ－ムズ',
                salesman:'黃大明',
            },
            {
                image:'_homepage/success/3.jpg',
                title:'レガスタ東向島',
                salesman:'黃大明',
            },
            {
                image:'_homepage/success/4.jpg',
                title:'ダイホーステージ池上',
                salesman:'黃大明',
            },
        ]
    }),
    methods:{
        goLeft(){
            if(0<=this.focus-1)
                this.focus--
        },
        goRight(){
            if(this.focus+1<this.content.length)
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
    template:`
        <div class=success>
            <div class=a>
                <div class=n>成功案例</div>
                <div class=o>SUCCESS CASE</div>
            </div>
            <div class=b>
                <div class=n>
                    <div
                        class=n
                        :style=bnnStyle()
                    >
                        <div
                            v-for="(c,i) in content"
                            class=a
                            :style=optionStyle(c,i)
                        >
                            <img class=n :src=c.image>
                            <div class=o></div>
                            <div class=p><div>
                                {{c.title}} / {{c.salesman}}
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
                <button>觀看更多成功案例</button>
            </div>
        </div>
    `
}
export default success
