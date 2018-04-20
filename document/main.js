/**
 * Created: leezii
 * Date: 2018/4/20
 * Time: 11:23
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from '@/router'
import lingcy from '../src/main'

Vue.use(lingcy)
Vue.use(VueRouter)
export const app = new Vue({
  el: '#app',
  router
})
// if (window.console) {
//   console.log(`%c You are running in ${CUR_ENV.env} environment,
//   The last build-time is at ${Vue.prototype.$utils.toTimeFormat(
//     CUR_ENV.buildTime,
//     'yyyy-MM-dd hh:mm:ss')}`, 'color:#0E88EB;font-size:18px;')
// }

