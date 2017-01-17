'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('Cowsaycontroller', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'Cowsay controller title';

  cowsayCtrl.speak = function(message) {
    $log.debug('cowsayCtrl.speak');
    return cowsay.say({text: message || 'Tell me something to say.'});
  };

  cowsayCtrl.logger = function(message) {
    $log.debug('cowsayCtrl.logger');
    $log.log(message);
  };
}
