let activity={
    props:['language','speakers','flow'],
    template:`
        <div class=d><div>
            <div class=n>
                <span class=a>{{language.title}}</span>
                <span class=b>|</span>
                <span class=c> Activity</span>
            </div>
            <div class=o>
                <div class=a>
                    <div class=a>{{language.time}}</div>
                    <div class=b>{{language.content}}</div>
                    <div class=c>{{language.speaker}}</div>
                </div>
                <div
                    v-for="a in flow"
                    class=b
                >
                    <div class=n>{{a.time}}</div>
                    <div class=r :class="{
                        o:!a.speaker,
                        p:a.speaker,
                    }">{{a.content}}</div>
                    <div class=s v-if="a.speaker==0"></div>
                    <div class="s q" v-if="0<a.speaker&&a.speaker<10">
                        <span class=n>{{speakers[a.speaker-1].name}}</span>
                        <div class=o>
                            {{speakers[a.speaker-1].unit}}<br>
                            {{speakers[a.speaker-1].jobTitle}}<br>
                        </div>
                    </div>
                    <div class=s v-if="10<a.speaker">
                        {{speakers[~~(a.speaker/10)-1].name}}
                        <span class=a>
                            {{speakers[~~(a.speaker/10)-1].jobTitle}}
                        </span>
                        &
                        {{speakers[~~(a.speaker%10)-1].name}}
                        <span class=a>
                            {{speakers[~~(a.speaker%10)-1].jobTitle}}
                        </span>
                    </div>
                </div>
            </div>
            <div class=p>
                <div
                    v-for="a in flow"
                    class=a
                >
                    <div class=n>
                        <div class=a>時間</div>
                        <div class=b>{{a.time}}</div>
                    </div>
                    <div class=o>
                        <div class=a>內容</div>
                        <div class=b>{{a.content}}</div>
                    </div>
                    <div class=p>
                        <div class=a v-if="a.speaker">主講者</div>
                        <div class=b v-if="0<a.speaker&&a.speaker<10">
                            {{speakers[a.speaker-1].name}}
                        </div>
                        <div class=b v-if="10<a.speaker">
                            {{speakers[~~(a.speaker/10)-1].name}}
                            &
                            {{speakers[~~(a.speaker%10)-1].name}}
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    `
}
export default activity
