import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastclick
import fastclick from 'fastclick'
import 'common/stylus/index.styl'

// 使用fastclick
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // createElement函数
  render: h => h(App)
})
