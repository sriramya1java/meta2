import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/jquery-3.3.1.slim'
import '../static/bootstrap'
import '../static/popper.min'
import '../node_modules/ag-grid/dist/styles/ag-grid.css'
import '../node_modules/ag-grid/dist/styles/ag-theme-balham.css'
import VueResource from 'vue-resource'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import store from '../store/store.js'

Vue.use(VueResource)
Vue.use(Vuetify)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.http.options.root = '/meta2'
Vue.prototype.$baseUrl = '/meta2'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
