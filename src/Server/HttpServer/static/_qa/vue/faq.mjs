import homepageLike from '../../_homepageLike.mjs'
let faq={
    components:{contactInfo:homepageLike.contactInfo},
    data(){
        return{
            selectedClass:this.classes[0],
            selectedQuestion:null,
        }
    },
    props:['language','classes','faq'],
    methods:{
        selectQuestion(q){
            this.selectedQuestion=this.selectedQuestion==q?null:q
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
            <div class=a>
                <div class=title>
                    {{language.faqClasses[selectedClass]}}
                </div>
                <div
                    class=question
                    v-for="q in faq[selectedClass]"
                >
                    <div
                        class=question
                        :class="{active:selectedQuestion==q}"
                        @click=selectQuestion(q)
                    >
                        <div>
                            <div class=left>
                                {{q.question}}
                            </div>
                            <div class=right>
                                <span v-if="selectedQuestion!=q">
                                    <img src=img/qa/arrow01.png>
                                </span>
                                <span v-if="selectedQuestion==q">
                                    <img src=img/qa/arrow02.png>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        class=answer
                        :class="{active:selectedQuestion==q}"
                        v-html=q.answer
                    ></div>
                </div>
            </div>
        </div>
    `
}
export default faq
