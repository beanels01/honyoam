export default{
    top:{
        props:['data'],
        template:`
            <div class=presaleLikeTop :class="{
                mobile:     data.mobile,
                desktop:    data.desktop,
            }">
                <div class=static>
                    <div>
                        <div class=a>新成屋</div>
                        <div class=b>PRESOLD HOUSE</div>
                    </div>
                </div>
                <div class=a>
                    <div>
                        首頁 > <span class=current>新成屋</span>
                    </div>
                </div>
            </div>
        `
    },
}
