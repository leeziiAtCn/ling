const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
