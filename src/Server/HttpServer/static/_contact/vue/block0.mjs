let block0={
    props:[
        'language',
        'speakers',
        'block0',
    ],
    methods:{
        imagePath(id){
            return`image/${id}`
        },
        buttonClick(){
            location.hash=''
            location.hash='form'
        },
    },
    template:`
        <div class=b><div class=n>
            <div class=a>
                <div class=n>
                    {{block0.title}}
                </div>
                <div class=o>
                    <div>
                    </div>
                </div>
            </div>
            <div class=b>
                <div class=n>
                    <div class=a>
                        <div class=n>{{block0.seminarName}}</div>
                    </div>
                    <div class=b>
                        <button @click=buttonClick>
                            {{language.signUp}}
                        </button>
                    </div>
                </div>
                <div class=line></div>
                <div class=o>
                    <div class=c>
                        <p>
                            {{language.speaker}}：{{speakers[block0.speaker0].unit}} {{speakers[block0.speaker0].jobTitle}} {{speakers[block0.speaker0].name}}
                        </p>
                        <p class=n>
                            {{language.unit0}}：
                            <img :src=imagePath(block0.unit0image)>
                            {{block0.unit0}}
                        </p>
                        <p
                            v-if=block0.unit1
                            class=n
                        >
                            {{language.unit1}}：
                            <img :src=imagePath(block0.unit1image)>
                            {{block0.unit1}}
                        </p>
                    </div>
                    <div class=line></div>
                    <div class=c>
                        <div class=n>{{language.date}}：{{block0.date}}</div>
                        <div class=o>{{language.time}}：{{block0.time}}</div>
                        <div class=o>
                            {{language.place}}：{{block0.placeName}}
                            <a :href=block0.placeGMap>
                                <img src=/img/map.png>
                            </a><br>
                            {{block0.placeAddress}}
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    `
}
export default block0
