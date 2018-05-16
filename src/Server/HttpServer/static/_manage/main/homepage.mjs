import optionList from          './optionList.mjs'
import editOption from          './homepage/editOption.mjs'
import imageUploader from       './imageUploader.mjs'
import methods from             './homepage/methods.mjs'
import languageSelect from      './languageSelect.mjs'
import eventInput from          './homepage/eventInput.mjs'
export default{
    components:{
        optionList,
        imageUploader,
        languageSelect,
        eventInput,
    },
    created(){
        this.getHomepage()
    },
    data:()=>({
        homepage:                   null,
        lock:                       false,
        selectedLanguage:           '',
        selectedLanguageForEvent:   '',
        editOption,
    }),
    methods,
    props:['language'],
    template:`
        <div class=homepage v-if=homepage&&language>
            <h1>搜尋塊背景</h1>
            <div class=indent style=display:table;text-align:center>
                <div style=display:table-cell>
                    行動版<br>
                    <imageUploader
                        v-model=homepage.mission.mobileImage
                    ></imageUploader>
                </div>
                <div style=display:table-cell>
                    桌面版<br>
                    <imageUploader
                        v-model=homepage.mission.desktopImage
                    ></imageUploader>
                </div>
            </div>
            <h1>最新物件</h1>
            <div class=indent>
                <p>
                    <languageSelect
                        :language=language
                        v-model=selectedLanguage
                    ></languageSelect>
                </p>
                <template v-if=selectedLanguage>
                    <optionList
                        :editOption=editOption
                        v-model=homepage.rotation[selectedLanguage]
                    ></optionList>
                    <button @click=preview>預覽</button>
                </template>
            </div>
            <h1>說明會</h1>
            <div class=indent>
                <p>
                    <languageSelect
                        :language=language
                        v-model=selectedLanguageForEvent
                    ></languageSelect>
                </p>
                <template v-if=selectedLanguageForEvent>
                    <eventInput
                        v-model=homepage.event[selectedLanguageForEvent]
                    ></eventInput>
                    <button @click=preview>預覽</button>
                </template>
            </div>
            <p>
                <button @click=update>儲存變更</button>
            </p>
        </div>
    `,
}
