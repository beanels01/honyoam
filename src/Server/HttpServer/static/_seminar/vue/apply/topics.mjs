let topics={
    props:['topics','interested'],
    template:`
        <div class=s>
            <div
                v-if="topics.length<4"
                v-for="(topic,i) in topics"
            >
                <div>
                    <label>
                        <input
                            type=checkbox
                            @change="e=>interested[i]=e.target.checked"
                        > {{topic}}
                    </label>
                </div>
            </div>
            <div
                v-if="4<=topics.length"
                v-for="(_,i) in [...Array(Math.ceil(topics.length/2))]"
            >
                <div>
                    <label>
                        <input
                            type=checkbox
                            @change="e=>interested[2*i]=e.target.checked"
                        > {{topics[2*i]}}
                    </label>
                </div>
                <div v-if="2*i+1<topics.length">
                    <label>
                        <input
                            type=checkbox
                            @change="e=>interested[2*i+1]=e.target.checked"
                        > {{topics[2*i+1]}}
                    </label>
                </div>
            </div>
        </div>
    `
}
export default topics
