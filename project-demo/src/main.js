import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// require( 'vis-network/dist/vis-network.min.js')


Vue.config.productionTip = false

Vue.use(ElementUI)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
