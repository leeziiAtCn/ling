/**
 * Created: leezii
 * Date: 2017/10/24
 * Time: 10:40
 */

import test from './components/test'

const components = {
  test
}
const install = Vue => {
  Vue.component('test', components.test)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const lingcy = {
  install
}
module.exports.default = module.exports = lingcy
