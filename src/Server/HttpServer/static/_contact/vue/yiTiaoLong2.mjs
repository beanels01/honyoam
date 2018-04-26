let yiTiaoLong2={
    props:['value','language'],
    methods:{
        imagePath(i){
            return`image/${i}`
        },
    },
    template:`
        <div class=i>
            <div class=tvl></div>
            <div class=a>{{language.title}}</div>
            <div class=b>{{language.subtitle}}</div>
            <div class=c>
                <div>
                    <div class=n><div><div>
                        <div><img src=/img/event/bicon01.png></div>
                    </div></div></div>
                    <div class=o>
                        <div class=a>{{value[0].title}}</div>
                        <div class=b>{{value[0].subtitle}}</div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div class=p>
                        <img :src="imagePath(value[0].image)">
                    </div>
                </div>
            </div>
            <div class=c>
                <div>
                    <div class=n><div><div>
                        <div><img src=/img/event/bicon02.png></div>
                    </div></div></div>
                    <div class=o>
                        <div class=a>{{value[1].title}}</div>
                        <div class=b>{{value[1].subtitle}}</div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div class=p>
                        <img :src="imagePath(value[1].image)">
                    </div>
                </div>
            </div>
        </div>
    `
}
export default yiTiaoLong2
