'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('CowsayCont');

  this.title = 'Geoff\'s Cowville!';
  this.history = [];

  this.speak = function(input) {
    $log.debug('cowsayCtrl.speak()');
    return cowsay.say({ text: input || 'MOOOOO-OOOO' });
    //Q: Can we set other params for cowsay?
    //Q: How do we connect those params to a value from the GUI?
  };

  this.logger = function(input) {
    $log.debug('cowsayCtrl.logger()');
    $log.log(input);
  };

  this.save = function() {
    $log.debug('cowsayCtrl.save()', this.text);
    if(this.text) {
      this.history.push(this.text);
    }
  };

  this.last = function() {
    $log.debug('cowsayCtrl.last()', this.history);
    let len = this.history.length;
    if(len == 0) return;
    return this.history[len - 1];
  };

  this.back = function() {
    $log.debug('cowsayCtrl.back()');
    this.history.pop();
  };
}
