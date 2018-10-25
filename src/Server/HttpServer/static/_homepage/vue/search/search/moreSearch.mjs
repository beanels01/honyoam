import pattern0 from'./moreSearch/pattern.mjs'
let moreSearch={
    components:{pattern0},
    props:['value','data'],
    template:`
        <div>
            <div class=a>
                <div class=n>
                    {{data.language.age}}：
                    <br class=a>
                    <input
                        type=text
                        :placeholder=data.language.freeValue
                        v-model=value.age
                    > {{data.language.inYear}}
                </div>
            </div>
            <div class=b>
                <pattern0
                    v-model=value.pattern
                    :data=data
                ></pattern0>
            </div>
            <div class=c>
                <div class=n>
                    <button
                        class=clearButton
                        @click="$emit('clear')"
                    >{{data.language.clear}}</button>
                </div>
                <div class=o>
                    <button
                        class=searchButton
                        @click="$emit('search')"
                    >
                        <img src=img/search.png> {{data.language.search}}
                    </button>
                </div>
            </div>
        </div>
    `
}
export default moreSearch
