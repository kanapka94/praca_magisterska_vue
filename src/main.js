import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import service from '@/service'
import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.prototype.$service = service

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
