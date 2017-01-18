'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtraTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundel.js',
    path: 'build'
  },
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/./app/index.html`
    }),
    new ExtraTextPlugin('bundel.css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'bable'},

      { test: /\.scss$/, loader: 'style!css!sass'},
      { test: /\.(eot|woff|tff|svg).*/, loader: 'url?limit=100000=fonts/[hash].[ext]'}

    ]
  }
};
