let top={
    props:['value'],
    template:`
        <div class=top><div>
            <div class=a><div>
                <div class=n>
                    關於我們
                </div>
                <div class=o>
                    ABOUT US
                </div>
            </div></div>
            <div class=b>
                首頁 > 關於我們
            </div>
            <div class=c>
                <div
                    :class="{focus:value=='summary'}"
                    @click="$emit('input','summary')"
                >公司簡介</div>
                <div
                    :class="{focus:value=='service'}"
                    @click="$emit('input','service')"
                >服務項目</div>
                <div
                    :class="{focus:value=='partner'}"
                    @click="$emit('input','partner')"
                >合作夥伴</div>
            </div>
        </div></div>
    `
}
export default top
