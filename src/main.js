import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
console.log(store)
new Vue({
    store,
  el: '#app',
  render: h => h(App)
})
