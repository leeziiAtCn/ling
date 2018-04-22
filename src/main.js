/**
 * Created: leezii
 * Date: 2017/10/24
 * Time: 10:40
 */
import './less/index.less'
import Button from './components/button'
const components = {
  Button
}
console.log(Button)
const install = Vue => {
  Vue.component(components.Button.name, components.Button)
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
