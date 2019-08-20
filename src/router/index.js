import Vue from 'vue'
import VueRouter from 'vue-router'
import HearthstoneDeck from '@/components/HearthstoneDeck'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'HearthstoneDeck',
        component: HearthstoneDeck
    }
  ]
})