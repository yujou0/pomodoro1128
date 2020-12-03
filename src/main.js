import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faPen, faTimes, faUndo, faPlay, faPause, faStepForward, faStopwatch, faClipboardList, faMusic } from '@fortawesome/free-solid-svg-icons'
import './style.styl'

library.add(faCheck, faPen, faTimes, faUndo, faPlay, faPause, faStepForward, faStopwatch, faClipboardList, faMusic)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
