import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

import VuePhotoSwipe from 'vue-photoswipe'

Vue.use(VuePhotoSwipe)

import wysiwyg from "vue-wysiwyg";
Vue.use(wysiwyg, {
  hideModules: { "image": true,"code": true,"link": true,"table": true, "orderedList": true,"unorderedList": true,"removeFormat": true,"separator": true },
  locale: 'hu'
})
console.log()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
