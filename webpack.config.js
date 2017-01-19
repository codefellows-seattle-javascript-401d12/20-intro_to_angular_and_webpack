'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Welcome to Cowville',
      template: `${__dirname}/app/index.html`
    }),
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style!css!sass!' },
      { test: /\.(eot|woff|ttf|svg).*/, loader: 'url?limit=10000&name=fonts/[hash].[ext]' }
    ]
  }
};
