
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
    it('title property should equal Welcome to Funny Sketches!', () => {
      expect(this.cowsayCtrl.title).toBe('Welcome to Funny Sketches!');
      expect(this.cowsayCtrl.title).toContain('Sketches');
    });

    it('history property should be an empty array', () => {
      expect(Array.isArray(this.cowsayCtrl.history)).toBe(true);
      expect(this.cowsayCtrl.history.length).toBe(0);
    });

    it('list of cowfiles should show proper cowfiles', () => {
      cowsay.list((err, list) => {
        expect(this.cowsayCtrl.cowfiles).toEqual(list);
        expect(this.cowsayCtrl.current).toEqual(list[0]);
      });
    });
  });

  describe('#update', () => {
    it('should return a cow that says hello', () => {
      let expected = cowsay.say({ text: 'hello', f: this.cowsayCtrl.current });
      let result = this.cowsayCtrl.update('hello');
      expect(result).toEqual(expected);
    });
  });

  describe('#speak', () => {
    it('should return a cow that says hello', () => {
      let expected = cowsay.say({ text: 'hello', f: this.cowsayCtrl.current });
      this.cowsayCtrl.speak('hello');
      expect(this.cowsayCtrl.spoken).toEqual(expected);
      expect(this.cowsayCtrl.history[0]).toEqual(expected);
    });
  });

  describe('#undo', () => {
    it('should return a cow that says hello', () => {
      let expected = cowsay.say({ text: 'hello', f: this.cowsayCtrl.current });
      this.cowsayCtrl.speak('hello');
      this.cowsayCtrl.speak('hello again');
      this.cowsayCtrl.undo();
      expect(this.cowsayCtrl.spoken).toEqual(expected);
      expect(this.cowsayCtrl.history.length).toEqual(1);
    });
  });
});
