import api from             '../../_api.js'
export default{
    methods:{
        async logout(e){
            api.logout()
            this.$emit('logout')
        }
    },
    template:`
        <button @click=logout>登出</button>
    `
}
