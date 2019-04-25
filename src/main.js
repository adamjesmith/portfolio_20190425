import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


import about from './components/about.vue'
import home from './components/home.vue'

Vue.use(VueRouter)

const Contact = { template: '<div><h2>Contact Page</h2></div>' }

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})
