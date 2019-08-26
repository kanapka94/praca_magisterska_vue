import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import service from '@/service'
import VueMeta from 'vue-meta'
import VueAnalytics from 'vue-analytics'
import VueGtm from 'vue-gtm'

Vue.use(VueAnalytics, {
  id: 'UA-146400602-2',
  router
})

Vue.use(VueGtm, {
  id: 'GTM-NS7PRQB',
  enabled: true,
  loadScript: true,
  vueRouter: router
})

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
