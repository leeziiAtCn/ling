/**
 * Created: leezii
 * Date: 2017/12/15
 * Time: 15:14
 */
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

module.exports = [
  new CleanWebpackPlugin('dist', {
    root: path.resolve(__dirname, '../'),
    verbose: true,
    dry: false
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  }),
]
