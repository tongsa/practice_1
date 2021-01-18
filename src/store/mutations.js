// 存放所有的mutations
export default{
    login (state, v){
        state.userInfo = v
    },
    setMemberInfo(state, v){
        state.userStatus = v.userStatus //会员状态-普通会员 黄金会员 铂金会员
        state.vipLeval = v.vipLeval //会员等级-vip1  vip2  vip3
    },
    increment(){

    }
}
