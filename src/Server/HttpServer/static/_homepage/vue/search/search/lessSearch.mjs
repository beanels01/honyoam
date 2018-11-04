let lessSearch={
    props:['value','data'],
    template:`
        <div class=a>
            <div class=n>
                <div class=a>
                    {{data.language.searchYouWant0}}<br class=n>{{data.language.searchYouWant1}}
                </div>
                <div class=b>
                    <label>
                        <input type=radio value=presale v-model=value.type>
                        {{data.language.presale}}
                    </label>
                    <label>
                        <input type=radio value=medieval v-model=value.type>
                        {{data.language.medieval}}
                    </label>
                    <br class=t>
                    <select
                        class="n q"
                        v-model=value.place0
                    >
                        <option value hidden>{{data.language.place0}}</option>
                        <option value=all>全部</option>
                        <option
                            v-for="a of data.place.place0"
                            :value=a
                        >{{a}}</option>
                    </select>
                    <select
                        class="n q"
                        v-model=value.place1
                    >
                        <option value hidden>{{data.language.place1}}</option>
                        <option value=all>全部</option>
                        <template v-if="value.type&&value.place0">
                            <option v-if="value.type=='medieval'&&value.place0=='東京都'" value='都心三區'>都心三區</option>
                            <option v-if="value.place0=='東京都'" value='東京都心六區'>東京都心六區</option>
                            <option
                                v-for="a of data.place.place1[value.type][value.place0=='東京都'?0:1]"
                                :value=a
                            >{{a}}</option>
                        </template>
                    </select>
                    <br>
                    {{data.language.area}}：
                    <input
                        class=p
                        :placeholder=data.language.min
                        v-model=value.areaMin
                    >
                    ～
                    <input
                        class=p
                        :placeholder=data.language.max
                        v-model=value.areaMax
                    >
                    <select class="n r">
                        <option>{{data.language.squaredMeter}}</option>
                        <option>{{data.language.levelGround}}</option>
                    </select>
                    <span class=s></span>
                    <br class=t>
                    {{data.language.levelGround}}：
                    <input
                        class=p
                        :placeholder=data.language.min
                        v-model=value.priceMin
                    >
                    ～
                    <input
                        class=p
                        :placeholder=data.language.max
                        v-model=value.priceMax
                    >
                    {{data.language.e4JapaneseCurrency}}
                </div>
                <div class=c>
                    <button class=searchButton @click="$emit('search')">
                        <img src=img/search.png> {{data.language.search}}
                    </button>
                </div>
            </div>
        </div>
    `,
}
export default lessSearch
