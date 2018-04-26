let languageSelect={
    props:['language','value'],
    template:`
        <select
            required
            @input="$emit('input',$event.target.value)"
        >
            <option hidden value="">語言</option>
            <option
                v-for="l in Object.keys(language)"
                :value=l
            >{{language['zh-Hant'].language[l]}}</option>
        </select>
    `,
}
export default languageSelect
