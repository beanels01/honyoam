import search0 from          './search/search.mjs'
let initialValue=JSON.stringify({
    type:           '',
    place0:         '',
    place1:         '',
    areaMin:        '',
    areaMax:        '',
    priceMin:       '',
    priceMax:       '',
    age:            '',
    pattern:        {
        '1R':       0,
        '1K':       0,
        '1DK':      0,
        '1LDK':     0,
        '2LDK':     0,
        '3LDK':     0,
        '>3LDK':    0,
    },
    traffic:{
        line:           '',
        startStation:   '',
        endStation:     '',
        time:           '',
    },
})
let search={
    components:{
        search0,
    },
    data:()=>({
        value:JSON.parse(initialValue),
    }),
    methods:{
        clear(){
            this.value=JSON.parse(initialValue)
        },
        optionMobileStyle(){
            return{
                backgroundImage:`url('image/${
                    this.mission.mobileImage
                }')`
            }
        },
        optionDesktopStyle(){
            return{
                backgroundImage:`url('image/${
                    this.mission.desktopImage
                }')`
            }
        },
        search(){
            this.$emit('search',this.value)
        },
    },
    props:['data','mission'],
    template:`
        <div class=search>
            <div
                class="background mobile"
                :style=optionMobileStyle()
            ></div>
            <div
                class="background desktop"
                :style=optionDesktopStyle()
            ></div>
            <div class=alpha></div>
            <search0
                v-model=value
                @clear=clear
                @search=search
                :data=data
            ></search0>
        </div>
    `
}
export default search
