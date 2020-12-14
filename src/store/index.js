import Vue from 'vue' //先引入vue
import Vuex from 'vuex' //再引入vuex
import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)//使用vuex


const store = new Vuex.Store({
    state,
    mutations,
    getters
})
export default store