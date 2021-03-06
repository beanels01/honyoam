let top={
    props:['value','language'],
    template:`
        <div class=top><div>
            <div class=a><div>
                <div class=n>
                    {{language.about.top.aboutUs}}
                </div>
                <div class=o>
                    ABOUT US
                </div>
            </div></div>
            <div class=b>
                {{language.about.top.homepage}} > {{language.about.top.aboutUs}}
            </div>
            <div class=c>
                <div
                    :class="{focus:value=='summary'}"
                    @click="$emit('input','summary')"
                >{{language.about.top.summary}}</div>
                <div
                    :class="{focus:value=='service'}"
                    @click="$emit('input','service')"
                >{{language.about.top.service}}</div>
            </div>
        </div></div>
    `
}
export default top
