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

  describe('cowsayCtrl.speak', () => {
    it('should return "boohoo"', () => {
      let expected = this.cowsayCtrl.speak('boohoo');
      let result = cowsay.say({text: 'boohoo', f: this.currentCow});
      expect(expected).toEqual(result);
    });
  });

  describe('cowsayCtrl.saveCow', () => {
    it('should return "boohoo"', () => {
      this.cowsayCtrl.saveCow('boohoo');
      expect(this.cowsayCtrl.savedCow).toEqual(this.cowsayCtrl.speak('boohoo'));
      expect(this.cowsayCtrl.history.length).toEqual(1);
    });
  });

  describe('cowsayCtrl.remove', () => {
    it('should remove the last cow', () => {
      this.cowsayCtrl.saveCow('boohoo');
      let expected = this.cowsayCtrl.savedCow;
      this.cowsayCtrl.saveCow('hooboo');
      let unexpected = this.cowsayCtrl.savedCow;
      this.cowsayCtrl.remove();
      expect(this.cowsayCtrl.savedCow).toEqual(expected);
      expect(this.cowsayCtrl.savedCow).not.toEqual(unexpected);
      expect(this.cowsayCtrl.history.length).toEqual(1);
    });
  });
});
