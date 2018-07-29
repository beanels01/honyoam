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
                <div
                    :class="{focus:value=='partner'}"
                    @click="$emit('input','partner')"
                >{{language.about.top.partner}}</div>
                <div
                    :class="{focus:value=='idea'}"
                    @click="$emit('input','idea')"
                >{{language.about.top.idea}}</div>
            </div>
        </div></div>
    `
}
export default top
