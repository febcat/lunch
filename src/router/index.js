import Vue from 'vue'
import Router from 'vue-router'
import Lunch from '@/pages/Lunch'
import Select from '@/pages/Select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'select',
      component: Select
    },
    {
      path: '/lunch',
      name: 'lunch',
      component: Lunch
    }
  ]
})
