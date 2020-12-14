// 存放所有的mutations
export default{
    login (state, v){
        state.userInfo = v
    },
    setMemeberInfo(state, v){
        state.userStatus = v.userStatus
        state.vipLeval = v.vipLeval
    },
    increment(){

    }
}
