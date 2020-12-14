import Vue from 'vue'
import App from './App.vue'
import store from './store'//数据仓库
import router  from './router'
import ElementUI from 'element-ui';//引入element-ui
import 'element-ui/lib/theme-chalk/index.css';//引入element-ui的组件
import "nes.css/css/nes.min.css";
// @import "./node_modules/nes.css/css/nes.css"

Vue.config.productionTip = false

Vue.use(ElementUI);//使用

Vue.prototype.$store = store

// 创建全局的导航守卫
router.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === "/login") {
      next()
  } else {
      next({
          path: "/login"
      })
  }
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});