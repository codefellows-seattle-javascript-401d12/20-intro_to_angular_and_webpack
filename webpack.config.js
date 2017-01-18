'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'app.js',
    path: 'build'
  },
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`
    }),
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass!'
      },
      {
        test: /\.(eot|woff|ttf|svg).*/,
        loader: 'url?limit=100000&name=fonts/[hash].[ext]'
      }
    ]
  }
};
