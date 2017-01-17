'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp',[]);

cowsayApp.controller('CowsayController', ['$log','$scope', CowsayController]);

function CowsayController($log,$scope){
  $log.debug('CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'Straight Outta Cowville';

  cowsayCtrl.speak = function(input){
    $log.debug('cowsayCtrl.speak()');
    return cowsay.say({text:input || 'mooooooo'});
  };

  cowsayCtrl.logger = function(input){
    $log.debug('cowsayCtrl.logger()');
    $log.log(input);
    $log.log($scope);
  };

  cowsayCtrl.copyText = function(input){
    $log.debug('cowsayCtrl.copyText()');
    cowsayCtrl.copiedText = input;
  };

  cowsayCtrl.showLast = function(input){
    $log.debug('cowsay.showLast()');
    cowsayCtrl.lastText = input;
  };


}
