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
    it('title property should be Welcome to Cow Ville!', () => {
      expect(this.cowsayCtrl.title).toBe('Welcome to Cow Ville!');
    });
  });

  describe('#speak', () => {
    it('should return a cow that says HEYYYYYY', () => {
      let expected = cowsay.say({ text: 'HEYYYYYY', f: this.cowsayCtrl.current});
      this.cowsayCtrl.speak('HEYYYYYY');
      expect(this.cowsayCtrl.spoken).toEqual(expected);
      expect(this.cowsayCtrl.history[0]).toEqual(expected);
    });

    describe('#update', () => {
      it('shoulde return a cow that says testing', () => {
        let expected = cowsay.say({ text: 'testing', f: this.cowsayCtrl.current});
        let result = this.cowsayCtrl.update('testing');
        expect(result).toEqual(expected);
      });
    });

    describe('#undo', () => {
      it('should return a cow that says the first sentence', () => {
        let expected = cowsay.say({ text: 'testing', f: this.cowsayCtrl.current});
        this.cowsayCtrl.speak('testing');
        this.cowsayCtrl.speak('second speak');
        this.cowsayCtrl.undo();
        expect(this.cowsayCtrl.history.length).toEqual(0);
        expect(this.cowsayCtrl.spoken).toEqual(expected);
      });
    });
  });
});
