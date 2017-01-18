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
  cowsay.list( (err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = 'dragon';
  });

  this.speak = function(input) {
    $log.debug('cowsayCtrl.speak()');
    return cowsay.say({
      text: input || 'Whooooooshhh!',
      f: this.current
    });
  };

  this.logger = function(input) {
    $log.debug('cowsayCtrl.logger()');
    $log.log(input);
  };

  this.save = function() {
    $log.debug('cowsayCtrl.save()', this.text);
    if(this.text) {
      this.history.push({
        text: this.text,
        f: this.current
      });
    }
  };

  this.last = function() {
    $log.debug('cowsayCtrl.last()');
    let len = this.history.length;
    if(len == 0) return;
    let item = this.history[len - 1];
    return cowsay.say(item);
  };

  this.back = function() {
    $log.debug('cowsayCtrl.back()');
    this.history.pop();
  };
}
