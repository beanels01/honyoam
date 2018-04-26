let presale={
    props:[
        'currentLanguage',
        'language',
        'content',
    ],
    template:`
        <div class=k>
            <div class=n>{{language.title}}</div>
            <div class=o v-html=content.content></div>
        </div>
    `,
}
export default presale
