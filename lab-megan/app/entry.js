'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayAppController', ['$log', '$scope', CowsayAppController]);

function CowsayAppController($log, $scope) {
  $log.debug('CowsayAppController');
  let cowsayAppCtrl = $scope.cowsayAppCtrl = {};

  cowsayAppCtrl.title = 'Welcome to Cow Town!';

  cowsayAppCtrl.speak = function(input) {
    $log.debug('cowsayAppCtrl.speak()');
    return cowsay.say({ text: input || 'mooooo' });
  };

  cowsayAppCtrl.logger = function(input) {
    $log.debug('cowsayAppCtrl.logger()');
    $log.log(input);
  };
}
