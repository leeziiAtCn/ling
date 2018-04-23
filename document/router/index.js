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
    children: [
      {
        path: '/button',
        component: require('@/page/button')
      },
      {
        path: '/alert',
        component: require('@/page/alert')
      },
      {
        path: '/breadcrumb',
        component: require('@/page/breadcrumb')
      }
    ]
  }
]
export const router = new VueRouter({
  routes
})

