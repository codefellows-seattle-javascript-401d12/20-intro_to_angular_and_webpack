// Karma configuration
// Generated on Wed Jan 18 2017 18:21:53 GMT-0800 (PST)
const webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};


module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*-test.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*-test.js': ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
};
