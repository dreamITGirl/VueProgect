import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import $ from 'jquery'
import dayjs from 'dayjs'

import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

// 引入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$d = dayjs

// 将axios绑定在Vue原型上

Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:8080',
  timeout:1000,//超时时间
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理,如果拿到后台传过来的值不是json格式，可以在这里处理成json格式，输出
    data = JSON.parse(data)//不加这句话，后台接口返回来的就是字符串~

    return data;
  }],
  // params:{
  //   ID:'124'//每个接口都要传的参数
  // }
})


// require( 'vis-network/dist/vis-network.min.js')

// import '../src/static/UE/ueditor.config'
// import '../src/static/UE/ueditor.all'
// import '../src/static/UE/lang/zh-cn/zh-cn'
// import '../src/static/UE/ueditor.parse'

Vue.config.productionTip = false

Vue.use(ElementUI)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
