'use strict';

require('./lib/test-setup.js');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('Cowsay Controller', function() {
  beforeEach( () => {
    angular.mock.module('cowsayApp');
    angular.mock.inject( $controller => {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });

  describe('initial properties', () => {
    it('title property should equal Geoff\'s Cowville!', () => {
      expect(this.cowsayCtrl.title).toEqual('Geoff\'s Cowville!');
    });

    it('history should be an empty array', () => {
      expect(Array.isArray(this.cowsayCtrl.history)).toEqual(true);
    });

    it('cowfiles should be a list of faces', () => {
      cowsay.list( (err, list) => {
        expect(this.cowsayCtrl.cowfiles).toEqual(list);
        expect(this.cowsayCtrl.current).toEqual('dragon');
      });
    });

  });

  describe('#save', () => {
    it('should save the current text and face', () => {
      this.cowsayCtrl.text = 'Testing';
      this.cowsayCtrl.save();
      expect(this.cowsayCtrl.history.length).toEqual(1);
      expect(this.cowsayCtrl.history[0].text).toEqual('Testing');
      expect(this.cowsayCtrl.history[0].f).toEqual('dragon');
    });
  });

  describe('#last', () => {
    it('should return a cowsay string', () => {
      this.cowsayCtrl.text = 'Testing';
      this.cowsayCtrl.save();
      let result = this.cowsayCtrl.last();
      let expected = cowsay.say({ text: 'Testing', f: 'dragon' });
      expect(result).toEqual(expected);
    });
  });

  describe('#speak', () => {
    it('should return a string of a dragon saying Testing', () => {
      let expected = cowsay.say({ text: 'Testing', f: 'dragon' });
      let result = this.cowsayCtrl.speak('Testing');
      expect(result).toEqual(expected);
    });
  });

  describe('#back', () => {
    it('should return to the prior saved item', () => {
      this.cowsayCtrl.text = 'Testing 1';
      this.cowsayCtrl.save();
      this.cowsayCtrl.text = 'Testing 2';
      this.cowsayCtrl.save();
      this.cowsayCtrl.back();
      expect(this.cowsayCtrl.history.length).toEqual(1);
      expect(this.cowsayCtrl.history[0].text).toEqual('Testing 1');
    });
  });
});
