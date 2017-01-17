'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('CowsayCont');

  let cowsayCtrl = $scope.cowsayCtrl = {};
  cowsayCtrl.history = [];

  cowsayCtrl.title = 'Geoff\'s Cowville!';

  cowsayCtrl.speak = function(input) {
    $log.debug('cowsayCtrl.speak()');
    return cowsay.say({ text: input || 'MOOOOO-OOOO' });
    //Q: Can we set other params for cowsay?
    //Q: How do we connect those params to a value from the GUI?
  };

  cowsayCtrl.logger = function(input) {
    $log.debug('cowsayCtrl.logger()');
    $log.log(input);
  };

  // cowsayCtrl.copy = function(input) {
  //
  // };
}
