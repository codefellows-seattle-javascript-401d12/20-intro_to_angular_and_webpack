'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController',
function CowsayController() {

  this.title = 'Welcome to Cowville!';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });

  this.update = function(input) {
    return cowsay.say({ text : input || 'moooooooo', f: this.current});
  };

  this.speak = function(input){
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };
  this.undo = function() {
    this.history.pop();
    this.spoken = this.history.pop() || '';
  };
});

cowsayApp.controller('NavController',

function NavController(){

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
});
