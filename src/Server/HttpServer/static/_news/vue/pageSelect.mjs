let pageSelect={
    props:['length','value'],
    template:`
        <div class=pageSelect>
            <div class=mobile>
                <div
                    @click="$emit('input',value-1)"
                    :style="{visibility:0<=value-1?'visible':'hidden'}"
                >
                    <img src="/_news/img/num-l.png">
                </div>
                <template v-if="0<=value-2">…</template>
                <div
                    v-if="0<=value-1"
                    @click="$emit('input',value-1)"
                >
                    {{value-1+1}}
                </div>
                <div class=focus>
                    {{value+1}}
                </div>
                <div
                    v-if="value+1<length"
                    @click="$emit('input',value+1)"
                >
                    {{value+1+1}}
                </div>
                <template v-if="value+2<length">…</template>
                <div
                    @click="$emit('input',length-1)"
                    :style="{visibility:value+1<length?'visible':'hidden'}"
                >
                    <img src="/_news/img/num-r.png">
                </div>
            </div>
            <div class=desktop>
                <div
                    @click="$emit('input',value-1)"
                    :style="{visibility:0<=value-1?'visible':'hidden'}"
                >
                    <img src="/_news/img/num-l.png">
                </div>
                <div
                    v-for="(a,i) of [...Array(length)]"
                    :class="{focus:value==i}"
                    @click="$emit('input',i)"
                >
                    {{i+1}}
                </div>
                <div
                    @click="$emit('input',length-1)"
                    :style="{visibility:value+1<length?'visible':'hidden'}"
                >
                    <img src="/_news/img/num-r.png">
                </div>
            </div>
        </div>
    `,
    watch:{
        value(){
        },
    },
}
export default pageSelect
