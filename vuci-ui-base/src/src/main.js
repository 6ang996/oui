import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ubus from './plugins/ubus'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(ubus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
