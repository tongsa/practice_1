import Vue from 'vue'
import Vuex from 'vuex' //引入

Vue.use(Vuex)//使用

const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment(state) {
            state.count++
        },
        reduce(state){
            state.count--
        }
    }
})

export default store