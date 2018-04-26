export default{
    isValidUsername(s){
        return/^[0-9a-z]{1,16}$/.test(s)
    },
    isValidPassword(s){
        return/^.{6,}/.test(s)&&/[0-9]/.test(s)&&/[A-Za-z]/.test(s)
    },
}
