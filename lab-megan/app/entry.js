'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayAppController', ['$log', CowsayAppController]);

function CowsayAppController($log) {
  $log.debug('CowsayAppControlller');

  this.title = 'Welcome to Cow Town';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles[0];
  });

  this.update = function(input) {
    $log.debug('cowsayAppCtrl.update()');
    return cowsay.say({ text: input || 'hissss', f: this.current });
  };

  this.speak = function(input) {
    $log.debug('cowsayAppCtrl.speak()');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.undo = function() {
    $log.debug('cowsayAppCtrl.undo()');
    this.history.pop();
  };
}

cowsayApp.controller('NavAppController', ['$log', NavAppController]);

function NavAppController($log) {
  $log.debug('NavAppController');

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
      url: '/contact-us'
    }
  ];
}


// code from Lab 20
// cowsayApp.controller('CowsayAppController', ['$log', '$scope', CowsayAppController]);
//
// function CowsayAppController($log, $scope) {
//   $log.debug('CowsayAppController');
//   let cowsayAppCtrl = $scope.cowsayAppCtrl = {};
//
//   cowsayAppCtrl.title = 'Welcome to Cow Town!';
//
//   cowsayAppCtrl.speak = function(input) {
//     $log.debug('cowsayAppCtrl.speak()');
//     return cowsay.say({ text: input || 'hissss' });
//   };
//
//   cowsayAppCtrl.logger = function(input) {
//     $log.debug('cowsayAppCtrl.logger()');
//     $log.log(input);
//   };
// }
