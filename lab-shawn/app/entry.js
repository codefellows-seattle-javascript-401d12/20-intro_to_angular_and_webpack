'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp',[]);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log){
  $log.debug('CowsayController');

  cowsay.list((err,cowfiles) => {
    if(err) throw new Error('error with cowfiles');
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });

  this.title = 'Straight Outta Cowville';
  this.history = [];

  this.logger = function(input){
    $log.debug('cowsayCtrl.logger()');
    $log.log(input);
  };

  this.update = function(input){
    $log.debug('cowsayCtrl.update()');
    return cowsay.say({text:input || 'mooooooo', f: this.current});
  };


  this.speak = function(input){
    $log.debug('cowsayCtrl.speak()');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
    this.text ='';
  };

  this.undo = function(){
    $log.debug('cowsayCtrl.undo()');
    this.history.pop();
    this.spoken = this.history[this.history.length - 1] || '';
  };
}

cowsayApp.controller('NavController',['$log',NavController]);

function NavController($log){
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
      url: '/contact-us'
    }
  ];
}
