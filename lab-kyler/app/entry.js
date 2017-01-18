'use strict';
'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('cowsayController', ['$log', '$scope', cowsayController]);

function cowsayController($log) {
  $log.debug('CowsayController');

  this.title = 'Welcome to Cowville!';

  this.speak = function(input) {
    $log.debug('cowsayCtrl.speak()');

    return cowsay.say({ text: input || 'MOOOOOOO' });
  };

  this.logger = function(input) {
    $log.debug('cowsayCtrl.logger()');
    $log.log(input);
  };

}
