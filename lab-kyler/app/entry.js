'use strict';
'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('cowsayController', ['$log', '$scope', cowsayController]);

function cowsayController($log) {
  $log.debug('cowsayController constructor');

  cowsay.list( (err, cowlist) => {
    this.cowfiles = cowlist;
  });

  this.title = 'CowCreater 1000';
  this.history = [{ text: 'I moo 4 u', f: 'default' }];

  this.undo = function() {
    $log.debug('cowsayCtrl.undo()');

    if(this.history.length > 1) return this.history.pop();
    return 0;
  };

  this.currentArt = function() {
    $log.debug('cowsayCtrl.currentArt()');

    return cowsay.say({ text: this.history[this.history.length-1].text, f: this.history[this.history.length-1].f });
  };

  this.saveCow = function(inputText) {
    $log.debug('cowsayCtrl.newCow()');

    return this.history.push({text: inputText, f: this.currentCow});
  };

  this.logger = function(input) {
    $log.debug('cowsayCtrl.logger()');
    $log.log(input);
  };

}
