let innerPageSelect={
    props:['length','value','width'],
    computed:{
        before(){
            return[...Array(this.width).keys()].sort((a,b)=>b-a)
        },
        after(){
            return[...Array(this.width).keys()]
        },
    },
    template:`
        <div>
            <div
                @click="$emit('input',value-1)"
                :style="{visibility:0<=value-1?'visible':'hidden'}"
            >
                <img src="/_news/img/num-l.png">
            </div>
            <template v-if="0<=value-1-width">…</template>
            <div
                v-for="i of before"
                v-if="0<=value-1-i"
                @click="$emit('input',value-1-i)"
            >
                {{value-1-i+1}}
            </div>
            <div class=focus>
                {{value+1}}
            </div>
            <div
                v-for="i of after"
                v-if="value+1+i<length"
                @click="$emit('input',value+1+i)"
            >
                {{value+1+i+1}}
            </div>
            <template v-if="value+1+width<length">…</template>
            <div
                @click="$emit('input',value+1)"
                :style="{visibility:value+1<length?'visible':'hidden'}"
            >
                <img src="/_news/img/num-r.png">
            </div>
        </div>
    `,
}
let pageSelect={
    components:{innerPageSelect},
    props:['length','value'],
    template:`
        <div class=homepageLikePageSelect>
            <innerPageSelect
                class=mobile
                :length=length
                :value=value
                :width=1
                @input="v=>$emit('input',v)"
            ></innerPageSelect>
            <innerPageSelect
                class=desktop
                :length=length
                :value=value
                :width=10
                @input="v=>$emit('input',v)"
            ></innerPageSelect>
        </div>
    `,
}
export default pageSelect
