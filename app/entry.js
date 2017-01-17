'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'Cowsay Application';

  cowsayCtrl.speak = function(input) {
    $log.debug('cowsayCtrl.speak()');
    return cowsay.say({ text: input || 'Hello World' });
  };

  cowsayCtrl.log = function(input) {
    $log.debug('cowsayCtrl.log()');
    $log.log(input);
  };
}
