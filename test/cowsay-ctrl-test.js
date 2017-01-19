'use strict';

require('./lib/test-setup.js');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('Cowsay Controller', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });

  describe('inital properties', () => {
    it('title property shoulde equal Welcome to Cow Speaks!', () => {
      expect(this.cowsayCtrl.title).toBe('Welcome to Cow Speaks!');
    });

    it('history property should be an empty array', () => {
      expect(Array.isArray(this.cowsayCtrl.history)).toBe(true);
    });

    it('list of cowfiles should show proper cowfiles', () => {
      cowsay.list((err, list) => {
        expect(this.cowsayCtrl.cowfiles).toEqual(list);
        expect(this.cowsayCtrl.current).toEqual(list[0]);
      });
    });
  });

  describe('#update', () => {
    it('shoulde return a cow that says testing', () => {
      let expected = cowsay.say({ text: 'testing', f: this.cowsayCtrl.current});
      let result = this.cowsayCtrl.update('testing');
      expect(result).toEqual(expected);
    });
  });
  describe('#speak', () => {
    it('should return a cow that says testing', () => {
      let expected = cowsay.say({ text: 'testing', f: this.cowsayCtrl.current});
      this.cowsayCtrl.speak('testing');
      expect(this.cowsayCtrl.spoken).toEqual(expected);
      expect(this.cowsayCtrl.history[0]).toEqual(expected);
    });
  });
});
