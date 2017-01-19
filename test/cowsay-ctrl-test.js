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

  describe('initial properties', () => {
    it('title should equal Mr. Cowsay\'s words', () => {
      expect(this.cowsayCtrl.title).toBe('Mr. Cowsay\'s words');
    });

    it('history should be an empty array', () => {
      expect(Array.isArray(this.cowsayCtrl.history)).toBe(true);
    });

    it('list of cowfiles should be correct', () => {
      cowsay.list((err, list) => {
        expect(this.cowsayCtrl.cowfiles).toEqual(list);
        expect(this.cowsayCtrl.current).toEqual(list[0]);
      });
    });
  });

  describe('#update', () => {
    it('should return a cow that says testing', () => {
      let expectedResult = cowsay.say({ text: 'testing', f: this.cowsayCtrl.current});
      let result = this.cowsayCtrl.update('testing');
      expect(result).toEqual(expectedResult);
    });
  });

  describe('#speak', () => {
    it('should return a cow that says testing', () => {
      let result = cowsay.say({ text: 'testing', f: this.cowsayCtrl.current});
      this.cowsayCtrl.speak('testing');
      expect(this.cowsayCtrl.spoken).toEqual(result);
      expect(this.cowsayCtrl.history[0]).toEqual(result);
    });
  });

  describe('#undo', () => {
    it('should show previous text or remove spoken cow', () => {
      let result = cowsay.say({ text: 'testing', f: this.cowsayCtrl.current});
      this.cowsayCtrl.speak('testing');
      this.cowsayCtrl.speak('undo this');
      this.cowsayCtrl.undo();
      expect(this.cowsayCtrl.spoken).toEqual(result);
    });
  });
});
