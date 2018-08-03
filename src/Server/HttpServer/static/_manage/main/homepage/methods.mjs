import api from             '../../../_api.mjs'
async function backendData(value){
    return{
        mission:{
            mobileImage:await value.mission.mobileImage,
            desktopImage:await value.mission.desktopImage,
        },
        rotation:await objectAsyncMap(value.rotation,v=>Promise.all(
            v.map(async o=>({
                mobileImage:    await o.mobileImage,
                desktopImage:   await o.desktopImage,
                title:          o.title,
                content:        o.content,
                time:           o.time,
                link:           o.link,
                color:          o.color,
                opacity:        o.opacity,
            }))
        )),
        event:value.event,
    }
    async function objectAsyncMap(o,f){
        let p={}
        for(let k in o)
            p[k]=await f(o[k])
        return p
    }
}
export default{
    async getHomepage(){
        this.homepage=(await api.post({
            method:'getHomepage',
        })).res
        if(!this.homepage.event)
            this.homepage.event={}
        if(!this.homepage.rotation)
            this.homepage.rotation={}
    },
    async getSeminars(){
        this.seminars=(await api.post({
            method:'getSeminars'
        })).res
    },
    async submit(upload){
        if(
            !this.homepage.mission.mobileImage||
            !this.homepage.mission.desktopImage
        )
            return alert('操作失敗，原因：有項目沒有圖片。')
        for(let k in this.homepage.rotation){
            if(this.homepage.rotation[k].some(o=>
                !o.mobileImage||
                !o.desktopImage
            ))
                return alert('操作失敗，原因：有項目沒有圖片。')
            if(this.homepage.rotation[k].some(o=>
                o.color==''
            ))
                return alert('操作失敗，原因：有項目沒有布幕顏色。')
        }
        this.lock=true
        await upload(backendData(this.homepage))
        this.lock=false
    },
    async preview(){
        this.submit(async backendData=>
            api.formPost({
                method:'preview',
                target:'homepage',
                language:this.selectedLanguage,
                patch:JSON.stringify(await backendData),
            })
        )
    },
    async update(){
        this.submit(async backendData=>{
            alert('關閉此訊息後，若要關閉網頁，請先等待「儲存成功。」訊息跳出。')
            await api.post({
                method:'setHomepage',
                doc:await backendData,
            })
            alert('儲存成功。')
        })
    },
}
