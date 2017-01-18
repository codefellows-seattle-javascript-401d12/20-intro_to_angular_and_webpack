'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('CowsayController');

  this.title = 'Cowsay Application';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    $log.debug('list()');
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });

  this.speak = function(input) {
    $log.debug('speak()');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.update = function(input) {
    $log.debug('update()');
    return cowsay.say({ text: input || 'Hello World', f: this.current });
  };

  this.log = function(input) {
    $log.debug('log()');
    $log.log(input);
  };
}
