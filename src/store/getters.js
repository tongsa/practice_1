//状态
export default {
    memberInfo(state) {
        switch (state.userStatus) {
            case 0:
                return '普通会员'
            case 1:
                return '黄金会员'
            case 2:
                return '铂金会员'
            default:
                return '普通会员'
        }
    }
}