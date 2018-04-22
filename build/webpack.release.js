const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const path = require('path')
const pkg = require('../package')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(baseConfig, {
  entry: {
    main: './src/main.js'
  },
  output:{
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: `lingcy.js`,
    library: 'lingcy',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  plugins:[
    new ExtractTextPlugin(`lingcy-v${pkg.version}.min.css`),
    new UglifyJSPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
})
