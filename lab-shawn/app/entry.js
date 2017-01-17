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
  cowsayCtrl.history = [];

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
    cowsayCtrl.history.push(cowsayCtrl.copiedText);
  };

  cowsayCtrl.showLast = function(){
    $log.debug('cowsay.showLast()');
    cowsayCtrl.copiedText = cowsayCtrl.history[cowsayCtrl.history.length - 2];
    // cowsayCtrl.history.shift();
  };


}
