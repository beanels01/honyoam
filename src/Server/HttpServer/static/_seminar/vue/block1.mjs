let block1={
    methods:{
        imagePath(id){
            return`image/${id}`
        },
    },
    props:[
        'language',
        'currentLanguage',
        'speakers',
        'block1',
    ],
    template:`
        <div class=c>
            <div class=n>
                <div class=a>{{block1.title}}</div>
                <div class=vl></div>
                <div class=c>
                    <img :src=imagePath(block1.banner)>
                </div>
                <div class=b>{{block1.subtitle}}</div>
            </div>
            <div
                v-for="a in block1.speakers"
                class=speaker
            >
                <div class=a>
                    <div class=n>{{speakers[a.speaker].unit}}</div>
                    <div class=o>
                        <span class=a>{{speakers[a.speaker].name}}</span>
                        <span class=b>{{speakers[a.speaker].jobTitle}}</span>
                    </div>
                    <div class=p>
                        {{a.summary}}
                    </div>
                    <div class=q>
                        <div class=a>
                            <img src=img/event/name.png> {{language.content}}
                        </div>
                        <div class=b>
                            {{a.contentTitle}}
                        </div>
                    </div>
                    <div class=r>
                        <div
                            v-for="b in a.content"
                            class=o
                        >
                            <div class=a></div>
                            {{b}}
                        </div>
                    </div>
                    <div v-html=a.additionalContent></div>
                </div>
                <div class=b>
                    <img
                        class=n
                        :src="'image/'+a.speakerPicture"
                    >
                    <div class=o>{{language.speaker}}</div>
                </div>
            </div>
            <div class=p></div>
        </div>
    `
}
export default block1
