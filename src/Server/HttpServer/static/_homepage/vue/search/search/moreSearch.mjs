import pattern0 from'./moreSearch/pattern.mjs'
let moreSearch={
    components:{pattern0},
    props:['value','data'],
    template:`
        <div>
            <div class=a>
                <div class=n>
                    屋　　齡：
                    <br class=a>
                    <input
                        type=text
                        placeholder=自由輸入值
                        v-model=value.age
                    > 年以內
                </div>
            </div>
            <div class=b>
                <pattern0
                    v-model=value.pattern
                ></pattern0>
            </div>
            <div class=c>
                <div class=n>
                    <button
                        class=clearButton
                        @click="$emit('clear')"
                    >清除</button>
                </div>
                <div class=o>
                    <button
                        class=searchButton
                        @click="$emit('search')"
                    >
                        <img src=img/search.png> 搜尋
                    </button>
                </div>
            </div>
        </div>
    `
}
export default moreSearch
