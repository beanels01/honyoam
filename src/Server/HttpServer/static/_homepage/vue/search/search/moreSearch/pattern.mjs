let pattern={
    props:['data','value'],
    template:`
        <div>
            <div class=a>
                <span class=n>{{data.language.pattern}}</span>
                <br class=o>
                <span class=p>{{data.language.multi}}</span>
            </div>
            <div class=b>
                <div>
                    <div>
                        <div>
                            <label>
                                <input
                                    type=checkbox
                                    v-model="value['1R']"
                                >
                                1R
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type=checkbox
                                    v-model="value['1K']"
                                >
                                1K
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type=checkbox
                                    v-model="value['1DK']"
                                >
                                1DK
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type=checkbox
                                    v-model="value['1LDK']"
                                >
                                1LDK
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>
                                <input
                                    type=checkbox
                                    v-model="value['2LDK']"
                                >
                                2LDK
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type=checkbox
                                    v-model="value['3LDK']"
                                >
                                3LDK
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type=checkbox
                                    v-model="value['>3LDK']"
                                >
                                3LDK 以上
                            </label>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
}
export default pattern
