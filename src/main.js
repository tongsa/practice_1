import Vue from 'vue'
import App from './App.vue'
import store from './store'//数据仓库
import ElementUI from 'element-ui';//引入element-ui
import 'element-ui/lib/theme-chalk/index.css';//引入element-ui的组件

Vue.config.productionTip = false

Vue.use(ElementUI);//使用

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});