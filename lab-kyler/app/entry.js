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

  this.title = 'Welcome to Cowville!';
  this.history = [];
  this.text = '';

  cowsay.list( (err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });

  this.undo = function() {
    $log.debug('cowsayCtrl.undo()');
    this.spoken = this.history.pop();
  };

  this.update = function(input) {
    $log.debug('cowsayCtrl.update()');

    return cowsay.say({ text: input || 'no input', f: this.current });
  };

  this.speak = function(input) {
    $log.debug('cowsayCtrl.speak()');

    return cowsay.say({ text: input || 'MOOOOOOO' });
  };

  this.logger = function(input) {
    $log.debug('cowsayCtrl.logger()');
    $log.log(input);
  };

}
