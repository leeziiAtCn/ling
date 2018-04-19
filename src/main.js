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
  console.log('asdasdasd')
  Vue.component('test', components.test)
}
const zy = {
  install
}
module.exports.default = module.exports = zy
