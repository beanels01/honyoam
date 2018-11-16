import homepageLike from '../../_homepageLike.mjs'
let faq={
    components:{contactInfo:homepageLike.contactInfo},
    created(){
        this.setQuestionStatus()
    },
    data(){
        return{
            selectedClass:this.classes[0],
            questionStatus:0,
        }
    },
    props:['language','classes','faq'],
    methods:{
        setQuestionStatus(){
            let x={}
            for(let i=0;i<this.faq[this.selectedClass].length;i++)
                x[i]=0
            this.questionStatus=x
        },
        selectQuestion(i){
            this.questionStatus[i]=!this.questionStatus[i]
        },
    },
    template:`
        <div class=faq>
            <div class=classSelect>
                <select class=a v-model=selectedClass>
                    <option
                        v-for="c in classes"
                        :value=c
                    >
                        {{language.faqClasses[c]}}
                    </option>
                </select>
                <div class=b>
                    <div
                        v-for="c in classes"
                        class=class
                        :class="{active:selectedClass==c}"
                        @click="selectedClass=c"
                    >
                        {{language.faqClasses[c]}}
                    </div>
                </div>
            </div>
            <div class=keFu>
                <div class=title>{{language.qa.customerService}}</div>
                <contactInfo></contactInfo>
            </div>
            <div class=hb></div>
            <div
                class=a
                v-if=questionStatus
            >
                <div class=title>
                    {{language.faqClasses[selectedClass]}}
                </div>
                <div
                    class=question
                    v-for="(q,i) in faq[selectedClass]"
                >
                    <div
                        class=question
                        :class="{active:questionStatus[i]}"
                        @click=selectQuestion(i)
                    >
                        <div>
                            <div class=left>
                                {{q.question}}
                            </div>
                            <div class=right>
                                <span v-if="!questionStatus[i]">
                                    <img src=img/qa/arrow01.png>
                                </span>
                                <span v-if="questionStatus[i]">
                                    <img src=img/qa/arrow02.png>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        class=answer
                        :class="{active:questionStatus[i]}"
                        v-html=q.answer
                    ></div>
                </div>
            </div>
        </div>
    `
}
export default faq
