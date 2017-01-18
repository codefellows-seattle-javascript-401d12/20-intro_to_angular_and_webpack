'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('CowsayController');

  this.title = 'Welcome to Funny Sketches!';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });

  this.update = function(input) {
    $log.debug('cowsayCtrl.update');

    return cowsay.say({ text: input || 'Say something, please.', f: this.current });
  };

  this.speak = function(input) {
    $log.debug('cowsayCtrl.speak');

    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.undo = function() {
    $log.debug('cowsayCtrl.undo');

    this.history.pop();
    this.spoken = this.history[this.history.length - 1] || '';
  };
}

cowsayApp.controller('NavController', ['$log', NavController]);

function NavController($log) {
  $log.debug('NavController');

  this.routes = [
    {
      name: 'Home',
      url: '/home'
    },
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Contact',
      url: '/contact'
    },
    {
      name: 'Blog',
      url: '/blog'
    }
  ];
}
