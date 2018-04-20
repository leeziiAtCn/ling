const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const address = require('address')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(baseConfig, {
  entry: {
    main: './document/main.js'
  },
  output:{
    path: path.resolve(__dirname, '../document/dist'),
    publicPath: '/',
    filename: 'javascript/[name][hash:4].[name].js',
  },
  devServer:{
    historyApiFallback: true,
    stats: 'minimal',
    noInfo: false,
    compress: true,
    host: address.ip(),
    port: 8086,
    disableHostCheck: true,
    proxy: {
      '*': {
        target: 'http://www.wsxht.com',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../document/dist/index.html'),
      template: path.join(__dirname, '../document/index.html')
    }),
    new ExtractTextPlugin('style/styles.css'),
  ],
  resolve: {
    alias: {
       '@': path.join(__dirname, '../document')
    }
  },
})
