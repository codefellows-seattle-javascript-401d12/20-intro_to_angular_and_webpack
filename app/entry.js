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

  cowsayCtrl.save = function() {
    $log.debug('cowsayCtrl.save()', cowsayCtrl.text);
    if(cowsayCtrl.text) {
      cowsayCtrl.history.push(cowsayCtrl.text);
      cowsayCtrl.text;
    }
  };

  cowsayCtrl.last = function() {
    $log.debug('cowsayCtrl.last()');
    let len = cowsayCtrl.history.length;
    if(len == 0) return;
    return cowsayCtrl.history[len - 1];
  };

  cowsayCtrl.back = function() {
    $log.debug('cowsayCtrl.back()');
    cowsayCtrl.history.pop();
  };
}
