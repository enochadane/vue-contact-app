import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import EditDialog from './components/EditContact'
import DeleteDialog from './components/DeleteContact'

Vue.component('delete-dialog', DeleteDialog)
Vue.component('edit-dialog', EditDialog)


const base = axios.create({
  baseURL: 'https://yene-contacts.herokuapp.com/'
})

Vue.prototype.$http = base

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
