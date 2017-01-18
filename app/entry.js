'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('CowsayController');

  this.title = 'Welcome to Cowville!';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[2];
  });

  this.update = function(input) {
    $log.debug('this.update()');
    return cowsay.say({ text : input || 'moooooooo', f: this.current});
  };

  this.speak = function(input){
    $log.debug('this.speak()');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };
  this.undo = function() {
    $log.debug('this.undo()');
    this.spoken = this.history.pop() || '';
  };
}

cowsayApp.controller('NavController', ['$log', NavController]);

function NavController($log){
  $log('this.NavController');

  this.routes = [
    {
      name: 'home',
      url: '/home'
    },
    {
      name: 'cow creator',
      url: '/cowCreator'
    },
    {
      name: 'account',
      url: '/account'
    }
  ];
}
