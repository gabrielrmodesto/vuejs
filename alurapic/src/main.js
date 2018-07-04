import Vue from 'vue'
import App from './App.vue'
//importar modulo vueresource
import VueResource from 'vue-resource'

//registro do modulo no global view
Vue.use(VueResource)
new Vue({
  el: '#app',
  render: h => h(App)
})
