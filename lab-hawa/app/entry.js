'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowController', ['$log', '$scope', CowController]);

this.history = [];

function CowController($log, $scope) {
  $log.debug('CowController');

  let cowsayCtrl = $scope.cowsayCtrl= {};

  cowsayCtrl.title = 'Welcome to Cow Ville!';

  cowsayCtrl.speak = function(input) {
    $log.debug('cowsayCtrl.speak()');
    return cowsay.say({ text: input || 'moooooooo', f: this.current });
  };

  cowsayCtrl.logger = function(input) {
    $log.debug('cowsayCtrl.logger()');
    $log.log(input);
  };

  this.undo = function() {
    $log.debug('mooMooCtrl.undo()');
    this.history.pop();
    this.spoken = this.history.pop() || '';
  };

  this.sayThat = function(output) {
    $log.debug('mooMooCtrl.sayThat()');

    this.said = output;
    return this.said;
  };
}

cowsayApp.controller('NavController', ['$log', NavController]);

function NavController($log) {
  $log.debug('NavController');

  this.routes = [
    {
      name: 'home',
      url: '/home'
    },
    {
      name: 'about',
      url: '/about-us'
    },
    {
      name: 'contact',
      url: '/contact'
    }
  ];
}
