/**
 * Created: leezii
 * Date: 2017/12/15
 * Time: 15:10
 */
const path = require('path')
module.exports = {
  filename: 'index.js',
  path: path.resolve(__dirname, '../dist'),
  publicPath: '/',
  library: 'zy',
  libraryTarget: 'umd',
}
