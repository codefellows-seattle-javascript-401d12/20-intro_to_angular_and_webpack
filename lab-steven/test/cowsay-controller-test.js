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

    it('History should be an empty array', () => {
      expect(this.cowsayCtrl.history.length).toEqual(0);
    });

    it('this.cowfiles should be the list of cowfiles from cowsay.list', () => {
      cowsay.list((err, cowfiles) => expect(this.cowsayCtrl.cowfiles).toEqual(cowfiles));
    });
  });
});
