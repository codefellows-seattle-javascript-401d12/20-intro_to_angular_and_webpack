'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowApp = angular.module('cowApp', []);

cowApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('CowsayController');

  this.title = 'Cowsay controller title';
  this.history = [];

  cowsay.list((err, cowfiles) => this.cowfiles = cowfiles);

  this.speak = function(message) {
    $log.debug('cowsayCtrl.speak');
    return cowsay.say({text: message || 'Tell me something to say.', f: this.currentCow});
  };

  this.saveCow = function(message) {
    $log.debug('cowsayCtrl.saveCow');
    this.savedCow = this.speak(message);
    this.history.push(this.savedCow);
  };
}
