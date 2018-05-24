let faq={
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
                <div class=title>客服中心</div>
                <div class=a>
                    <div>
                        <div>
                            <div class=n>
                                <img src=/_homepageLike/qa01.png>
                            </div>
                            <div class=o>
                                <div class=a>電話直撥</div>
                                <div class=line></div>
                                <div class=b>+886 2 2785-5865</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div class=n>
                                <img src=/_homepageLike/qa02.png>
                            </div>
                            <div class=o>
                                <div class=a>Skype</div>
                                <div class=line></div>
                                <div class=b>honyo-skype</div>
                            </div>
                        </div>
                    </div>
                </div>
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
