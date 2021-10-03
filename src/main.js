import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import shipsPage from './components/shipsPage.vue'
import ShipCard from './components/shipCard'

Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  {path: '/', component: shipsPage},
  {path: '/ship/:id', component: ShipCard}
]
const router = new VueRouter({mode:'history',routes: routes})
new Vue({
  render: h => h(App),
  el:'#app',
  router
}).$mount('#app')
