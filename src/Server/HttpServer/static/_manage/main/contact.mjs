import api from                         '../../_api.mjs'
import languageSelect from              './languageSelect.mjs'
import inputForSpecificLanguage from
    './contact/inputForSpecificLanguage.mjs'
export default{
    components:{
        languageSelect,
        inputForSpecificLanguage,
    },
    created(){
        ;(async()=>{
            let value=(await api.post({
                method:'getContact'
            })).res
            for(let i in this.language)
                if(!(i in value))
                    value[i]=null
            this.value=value
        })()
    },
    data:()=>({
        value:              null,
        selectedLanguage:   null,
    }),
    methods:{
        async update(){
            if(!Object.keys(this.language).every(a=>
                this.value[a].block1.speakers.every(b=>
                    b.speakerPicture
                )
            ))
                return alert('操作失敗，原因：有項目沒有圖片。')
            await api.post({
                method:'updateContact',
                doc:await toServer(this.value),
            })
            alert('更新成功。')
            async function toServer(v){
                for(let i in v)
                    for(let j in v[i])
                        if(v[i][j] instanceof Promise)
                            v[i][j]=await v[i][j]
                return v
            }
        },
    },
    props:['language'],
    template:`
        <div v-if=value>
            <p style=color:red>
                不要在新的說明會用這個！
            </p>
            <languageSelect
                :language=language
                v-model=selectedLanguage
            ></languageSelect>
            <template v-if=selectedLanguage>
                <inputForSpecificLanguage
                    v-model=value[selectedLanguage]
                ></inputForSpecificLanguage>
                <p>
                    <button>預覽</button>
                </p>
            </template>
            <p>
                <button @click=update>儲存變更</button>
            </p>
        </div>
    `,
}
