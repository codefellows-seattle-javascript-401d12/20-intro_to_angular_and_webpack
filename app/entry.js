'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const mooMoo = angular.module('mooMoo', []);

mooMoo.controller('MooMooController', ['$log', '$scope', MooMooController]);

function MooMooController($log, $scope) {
  $log.debug('MooMooController');

  let mooMooCtrl = $scope.mooMooCtrl = {};

  mooMooCtrl.title = 'Moooooooo from all us cows!';

  mooMooCtrl.speak = function(input) {
    $log.debug('mooMooCtrl.speak()');
    return cowsay.say({ text: input || 'Mooooooooo' });
  };

  mooMooCtrl.logger = function(input) {
    $log.debug('mooMooCtrl.logger()');
    $log.log(input);
  };

  mooMooCtrl.sayThat = function(output) {
    $log.debug('mooMooCtrl.sayThat()');

    mooMooCtrl.said = output;
    return mooMooCtrl.said;
  };

  mooMooCtrl.reset = function() {
    $log.debug('mooMooCtrl.reset()');
  };
};
