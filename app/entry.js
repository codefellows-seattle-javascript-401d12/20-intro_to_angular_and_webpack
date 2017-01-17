'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('CowsayController');

  let cowsayControl = $scope.cowsayControl = {};

  cowsayControl.speak = function(input) {
    $log.debug('cowsayControl speak');
    return cowsay.say({ text: input || 'mooooo' });
  };

  cowsayControl.logger = function(input) {
    $log.debug('cowsayControl logger');
    $log.log(input);
  };
};
