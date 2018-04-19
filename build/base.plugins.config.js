/**
 * Created: leezii
 * Date: 2017/12/15
 * Time: 15:11
 */
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CUR_ENV = require('./env.params')[process.env.NODE_ENV]

module.exports =  [
  new webpack.DefinePlugin({
    CUR_ENV: JSON.stringify(CUR_ENV)
  }),
  new ExtractTextPlugin('styles.css'),
]
