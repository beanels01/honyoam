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
            <!--
                <div class=a>{{language.title}}</div>
                <div class=b></div>
                <div class=c>{{language.subtitle}}</div>
                <aBlock
                    v-for="a of language.content"
                    :data=a
                ></aBlock>
            -->
        </div>
    `,
}
export default service
