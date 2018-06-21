let summary={
    props:['language'],
    template:`
        <div class=summary>
            <div class=u>
                <ul>
                <li>{{language.u[0]}}</li>
                <li>{{language.u[1]}}</li>
                <li>{{language.u[2]}}</li>
                <li>{{language.u[3][0]}}
                    <ul>
                    <li>{{language.u[3][1]}}</li>
                    <li>{{language.u[3][2]}}</li>
                    <li>{{language.u[3][3]}}</li>
                    </ul>
                </li>
                </ul>
                <img src=/_about/img/a0.png style=width:20%>
                <img src=/_about/img/a1.png style=width:70%>
            </div>
            <div class=summary>
                <div class=v>
                    <div class=n>
                        <div
                            v-for="a of language.table"
                            class=a
                        >
                            <div class=n>
                                {{a[0]}}
                            </div>
                            <div
                                class=o
                                v-html=a[1]
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=p><div>
                <div class=a>
                    <img src=/_about/img/icon0.png><br>
                    <br>
                    <div v-html=language.p[0]></div>
                </div>
                <div class=b></div>
                <div class=a>
                    <img src=/_about/img/icon1.png><br>
                    <br>
                    <div v-html=language.p[1]></div>
                </div>
                <div class=b></div>
                <div class=a>
                    <img src=/_about/img/icon2.png><br>
                    <br>
                    <div v-html=language.p[2]></div>
                </div>
            </div></div>
            <div class=n>{{language.summary.title}}</div>
            <div class=q v-html=language.summary.content></div>
            <div class=r>
            </div>
            <div class=n>{{language.chairman.title}}</div>
            <div class=q v-html=language.chairman.content></div>
            <div class=n>{{language.chairmanSay.title}}</div>
            <div class=q v-html=language.chairmanSay.content></div>
            <div class=n>{{language.service.title}}</div>
            <div class=t>
                <div class=a>
                    <div>
                        <div class=a>
                            <div class=n
                                v-html=language.service.content[0].title
                            >
                            </div>
                            <div class=o>
                                <img src=/_about/img/c0.png>
                            </div>
                            <div class=p
                                v-html=language.service.content[0].content
                            >
                            </div>
                        </div>
                        <div class=b>
                            <img src=/_about/img/arrow.png>
                        </div>
                        <div class=a>
                            <div class=n
                                v-html=language.service.content[1].title
                            >
                            </div>
                            <div class=o>
                                <img src=/_about/img/c1.png>
                            </div>
                            <div class=p
                                v-html=language.service.content[1].content
                            >
                            </div>
                        </div>
                        <div class=b>
                            <img src=/_about/img/arrow.png>
                        </div>
                        <div class=a>
                            <div class=n
                                v-html=language.service.content[2].title
                            >
                            </div>
                            <div class=o>
                                <img src=/_about/img/c2.png>
                            </div>
                            <div class=p
                                v-html=language.service.content[2].content
                            >
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class=a>
                            <div class=n
                                v-html=language.service.content[3].title
                            >
                            </div>
                            <div class=o>
                                <img src=/_about/img/c3.png>
                            </div>
                            <div class=p
                                v-html=language.service.content[3].content
                            >
                            </div>
                        </div>
                        <div class=b>
                            <img src=/_about/img/arrow.png>
                        </div>
                        <div class=a>
                            <div class=n
                                v-html=language.service.content[4].title
                            >
                            </div>
                            <div class=o>
                                <img src=/_about/img/c4.png>
                            </div>
                            <div class=p
                                v-html=language.service.content[4].content
                            >
                            </div>
                        </div>
                        <div class=b>
                            <img src=/_about/img/arrow.png>
                        </div>
                        <div class=a>
                            <div class=n
                                v-html=language.service.content[5].title
                            >
                            </div>
                            <div class=o>
                                <img src=/_about/img/c5.png>
                            </div>
                            <div class=p
                                v-html=language.service.content[5].content
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default summary
