import Vue from 'vue'
import Router from 'vue-router'
import Lunch from '@/pages/Lunch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lunch',
      component: Lunch
    }
  ]
})
