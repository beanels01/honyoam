let yiTiaoLong1={
    computed:{
        date(){
            let date=new Date(this.value.date)
            return`${1900+date.getYear()}年${date.getMonth()+1}月${date.getDate()}日`
        }
    },
    methods:{
        imagePath(i){
            return`image/${i}`
        },
    },
    props:['value','language'],
    template:`
        <div class=h>
            <div class=tvl></div>
            <div class=n>{{language.title}}</div>
            <div class=o>{{date}}</div>
            <div class=p>
                <img
                    v-for="a in value.images"
                    :src=imagePath(a)
                >
            </div>
        </div>
    `
}
export default yiTiaoLong1
