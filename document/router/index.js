/**
 * Created: leezii
 * Date: 2017/10/24
 * Time: 10:50
 */
//  component: _ => import(/* webpackChunkName: "login" */ '@/pages/login'),

import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: require('@/layout'),
  }
]
export const router =  new VueRouter({
  routes
})

