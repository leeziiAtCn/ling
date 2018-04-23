/**
 * Created: leezii
 * Date: 2017/10/24
 * Time: 10:40
 */
import './less/index.less'
import Button from './components/button'
import Alert from './components/alert'
import BreadCrumb from './components/breadcrumb'

const components = {
  Button, Alert, BreadCrumb
}
const install = Vue => {
  Vue.component(components.Button.name, components.Button)
  Vue.component(components.Alert.name, components.Alert)
  Vue.component(components.BreadCrumb.name, components.BreadCrumb)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const lingcy = {
  install
}
// console.log(lingcy)
// module.exports.default = module.exports = lingcy
export default lingcy
