'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${__dirname}/app/index.html` })
  ],
  module: { loaders: [{
    test: /\.scss$/,
    loader: 'style!css!sass!'
  }]}
};
