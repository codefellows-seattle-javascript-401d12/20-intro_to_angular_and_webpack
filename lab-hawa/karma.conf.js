// Karma configuration
// Generated on Sun Mar 05 2017 20:24:08 GMT-0800 (PST)

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
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
};
