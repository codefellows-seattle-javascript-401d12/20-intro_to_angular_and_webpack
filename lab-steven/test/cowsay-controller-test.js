'use strict';

require('./lib/test-helper.js');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('Cowsay Controller', function() {
  beforeEach(() => {
    angular.mock.module('cowApp');
    angular.mock.inject($controller => this.cowsayCtrl = new $controller('CowsayController'));
  });

  describe('Initial properties', () => {
    it('Title should equal 401 JS Cowsay App For Lab 21', () => {
      expect(this.cowsayCtrl.title).toEqual('401 JS Cowsay App For Lab 21');
    });
  });
});
