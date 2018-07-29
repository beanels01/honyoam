let block={
    props:['data'],
    template:`
        <div class=d>
            <div class=n>
                <div class=a>
                    <div class=n>
                        {{data.number}}
                    </div>
                    <div class=o>
                        {{data.title}}
                    </div>
                </div>
                <div class=b>
                    {{data.content0}}
                </div>
                <div class=c>
                    {{data.content1}}
                </div>
            </div>
            <div class=o>
            </div>
            <div class=p>
                <img :src=data.image>
            </div>
        </div>
    `,
}
let service={
    components:{
        aBlock:block,
    },
    props:['language'],
    template:`
        <div class=service>
            <div class=partner>
                <div>
                    <div>{{language.partner[0]}}</div>
                    <img src=/_about/img/d0.png>
                    <img src=/_about/img/d1.gif>
                </div>
                <div>
                    <div>{{language.partner[1]}}</div>
                    <img src=/_about/img/e0.png>
                    <img src=/_about/img/e1.png>
                    <img src=/_about/img/e2.png>
                    <img src=/_about/img/e3.png>
                    <img src=/_about/img/e4.png>
                    <img src=/_about/img/e5.png>
                    <img src=/_about/img/e6.png>
                </div>
                <div>
                    <div>{{language.partner[2]}}</div>
                    <img src=/_about/img/f0.jpg>
                    <img src=/_about/img/f1.png>
                    <img src=/_about/img/f2.png>
                    <img src=/_about/img/f3.png>
                    <img src=/_about/img/f4.png style="background-color:#948a54">
                    <img src=/_about/img/f5.png>
                    <img src=/_about/img/f6.gif>
                </div>
            </div>
        </div>
    `,
}
export default service
