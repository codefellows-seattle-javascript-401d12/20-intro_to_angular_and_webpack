'use strict';

require('./scss/core.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const mooMoo = angular.module('mooMoo', []);

mooMoo.controller('MooMooController', ['$log', MooMooController]);

function MooMooController($log) {
  $log.debug('MooMooController');


  this.title = `Moooooooo from all us cows!`;
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });

  this.update = function(input) {
    $log.debug('mooMooCtrl.update()');
    return cowsay.say({ text: input || 'Mooooooo', f: this.current });
  };

  this.speak = function(input) {
    $log.debug('mooMooCtrl.speak()');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.undo = function() {
    $log.debug('mooMooCtrl.undo()');
    this.history.pop();
    this.spoken = this.history.pop() || '';
  };

  this.logger = function(input) {
    $log.debug('mooMooCtrl.logger()');
    $log.log(input);
  };

  this.sayThat = function(output) {
    $log.debug('mooMooCtrl.sayThat()');

    this.said = output;
    return this.said;
  };
};

mooMoo.controller('NavController', ['$log', NavController]);

function NavController($log) {
  $log.debug('NavController');

  this.routes = [
    {
      name: 'home',
      url: '/home'
    },
    {
      name: 'about',
      url: '/about'
    },
    {
      name: 'contact',
      url: '/contact'
    }
  ];
};
