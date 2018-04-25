import search0 from          './search/search.js'
let initialValue=JSON.stringify({
    usage:          '',
    county:         '',
    area:           '',
    areaLower:      '',
    areaUpper:      '',
    valueLower:     '',
    valueUpper:     '',
    more:{
        age:'',
        pattern:[...Array(8)].map(_=>0),
        distanceToStation:'',
        publicUtilities:[...Array(8)].map(_=>0),
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
    },
    props:['mission'],
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
            ></search0>
        </div>
    `
}
export default search
