'use strict';

require('./lib/test-setup.js');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('MooMooController', function() {
  beforeEach(() => {
    angular.mock.module('mooMoo');
    angular.mock.inject($controller => {
      this.mooMooCtrl = new $controller('MooMooController');
    });
  });

  describe('initial properties', () => {
    it('title property should be equal to Moooooooo from all us cows!', () => {
      expect(this.mooMooCtrl.title).toBe('Moooooooo from all us cows!');
    });

    it('history property should be an empty array', () => {
      expect(Array.isArray(this.mooMooCtrl.history)).toBe(true);
    });

    it('list of cowfiles should show proper cowfiles', () => {
      cowsay.list((err, list) => {
        expect(this.mooMooCtrl.cowfiles).toEqual(list);
        expect(this.mooMooCtrl.current).toEqual(list[0]);
      });
    });
  });

  describe('#update', () => {
    it('should return a cow that says testing', () => {
      let expected = cowsay.say({ text: 'testing', f: this.mooMooCtrl.current });
      let result = this.mooMooCtrl.update('testing');
      expect(result).toEqual(expected);
    });
  });

  describe('#speak', () => {
    it('should return a cow that says testing', () => {
      let expected = cowsay.say({ text: 'testing', f: this.mooMooCtrl.current });
      this.mooMooCtrl.speak('testing');
      expect(this.mooMooCtrl.spoken).toEqual(expected);
      expect(this.mooMooCtrl.history[0]).toEqual(expected);
    });
  });

  describe('#undo', () => {
    it('should return a cow that says what was previously said', () => {
      this.mooMooCtrl.current = 'stimpy';
      this.mooMooCtrl.speak('ONE');
      this.mooMooCtrl.speak('TWO');
      let expected = cowsay.say({ text: 'ONE', f: 'stimpy'});
      this.mooMooCtrl.undo();
      expect(this.mooMooCtrl.spoken).toEqual(expected);
    });
  });
});
