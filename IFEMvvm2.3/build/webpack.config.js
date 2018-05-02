const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    'main': path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.san$/,
        include: [
          path.resolve(__dirname, '../src/App.san')
        ],
        use: {
          loader: 'san-loader'
        }
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "../src/index.js")
        ],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, '../index.html')
    })
  ]
}