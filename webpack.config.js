'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    })
  ],
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass!' }
    ]
  }
};
