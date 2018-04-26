let yiTiaoLong0={
    props:['language'],
    template:`
        <div class=g>
            <div class=a>{{language.title}}</div>
            <div class=vl></div>
            <div class=b>{{language.subtitle}}</div>
            <div
                v-for="(e,i) in language.a"
                class=c
            >
                <div>
                    <div class=n>0{{i+1}}</div>
                    <div class=o>
                        <div class=a>{{e.title}}</div>
                        <div class=b>{{e.subtitle}}</div>
                    </div>
                </div>
                <div>
                    <div class=p>
                        <div v-if="i+1<language.a.length"></div>
                    </div>
                    <div class=q>
                        <img :src=e.image>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default yiTiaoLong0
