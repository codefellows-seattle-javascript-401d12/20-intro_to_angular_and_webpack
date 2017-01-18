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
  this.currentArt = { text: 'I moo 4 u', f: 'default' };
  this.history = [];

  this.undo = function() {
    $log.debug('cowsayCtrl.undo()');

    if(this.history.length > 0) {
      this.currentArt = this.history.pop();
      return 1;
    }
    return 0;
  };

  this.getCurrentArt = function() {
    $log.debug('cowsayCtrl.getCurrentArt()');

    return cowsay.say({ text: this.currentArt.text || 'BLANK', f: this.currentArt.f });
  };

  this.saveCow = function() {
    $log.debug('cowsayCtrl.saveCow()');

    return this.history.push( {text: this.currentArt.text, f: this.currentArt.f} );
  };

}
