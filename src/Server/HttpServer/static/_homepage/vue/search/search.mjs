import lessSearch from './search/lessSearch.mjs'
import moreSearch from './search/moreSearch.mjs'
let search={
    components:{
        lessSearch,
        moreSearch,
    },
    data:()=>({
        moreSearchOptions:0,
    }),
    props:['value','data'],
    template:`
        <div class=search><div><div>
            <lessSearch
                :value=value
                @search="$emit('search')"
                :data="{
                    place:data.place,
                    language:data.language.lessSearch
                }"
            ></lessSearch>
            <div
                class=b
                v-if=!moreSearchOptions
            >
                <div
                    class=more
                    @click="moreSearchOptions=1"
                ><div>
                    <img src=/img/sa01.png> {{data.language.more}}
                </div></div>
            </div>
            <div
                class=c
                :class={active:moreSearchOptions}
            >
                <div
                    class=less
                    @click="moreSearchOptions=0"
                ><div><img src=/img/sa02.png> {{data.language.less}}</div></div>
                <div class=hl></div>
                <moreSearch
                    class=n
                    v-model=value
                    @clear="$emit('clear')"
                    @search="$emit('search')"
                    :data="{
                        language:data.language.moreSearch
                    }"
                ></moreSearch>
            </div>
        </div></div></div>
    `
}
export default search
