/*
 * @Author: your name
 * @Date: 2021-07-05 12:47:04
 * @LastEditTime: 2021-07-06 20:11:13
 * @LastEditors: Kotori Y
 * @Description: In User Settings Edit
 * @FilePath: /fastscopy_frontend/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./vuex/store"

Vue.config.productionTip = false

new Vue({
  beforeMount() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app')
