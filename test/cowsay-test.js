'use strict';

require('./lib/test-setup.js');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('CowsayController', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });
  describe('initial properties', () => {
    it('title property should equal Cowsay Application', () => {
      expect(this.cowsayCtrl.title).toEqual('Cowsay Application');
    });
    it('history property should be an empty array', () => {
      expect(Array.isArray(this.cowsayCtrl.history)).toEqual(true);
    });
    it('list of cowfiles should show proper cowfiles', () => {
      cowsay.list((err, list) => {
        expect(this.cowsayCtrl.cowfiles).toEqual(list);
        expect(this.cowsayCtrl.current).toEqual(list[0]);
      });
    });
  });
});
