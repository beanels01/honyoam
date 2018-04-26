let footer0c={
    props:['language'],
    template:`
        <div class=p>
            <div class=title>{{language.title}}</div>
            <div class=line></div>
            <p v-html=language.content></p>
            <div class=a>
                <div>
                    <input
                        :placeholder=language.placeholder
                    >
                </div>
                <div>
                    <button><img src=img/send.png></button>
                </div>
            </div>
        </div>
    `,
}
export default footer0c
