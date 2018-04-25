let chooseHonyoam1={
    props:['language'],
    template:`
        <div class=f><div class=tvl></div><div class=n>
            <div class=a>
                <div class=n><div>{{language.a[0].title}}</div></div>
                <div class=o><img src=/img/event/icon01.png></div>
                <div
                    class=p
                    v-html=language.a[0].subtitle
                >
                </div>
                <div class=line></div>
                <div
                    class=q
                    v-html=language.a[0].content
                ></div>
            </div>
            <div class=b></div>
            <div class=a>
                <div class=n><div>{{language.a[1].title}}</div></div>
                <div class=o><img src=/img/event/icon03.png></div>
                <div
                    class=p
                    v-html=language.a[1].subtitle
                ></div>
                <div class=line></div>
                <div
                    class=q
                    v-html=language.a[1].content
                ></div>
            </div>
            <div class=b></div>
            <div class=a>
                <div class=n><div>{{language.a[2].title}}</div></div>
                <div class=o><img src=/img/event/icon02.png></div>
                <div
                    class=p
                    v-html=language.a[2].subtitle
                ></div>
                <div class=line></div>
                <div
                    class=q
                    v-html=language.a[2].content
                ></div>
            </div>
        </div></div>
    `
}
export default chooseHonyoam1
