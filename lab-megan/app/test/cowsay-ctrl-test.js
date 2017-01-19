'use strict';

require('./lib/test-setup.js');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('Cowsay Controller', function() {

  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject($controller => {
      this.cowsayAppCtrl = new $controller('CowsayAppController'); // this name maps back to what we called our controller
    });
  });

  describe('initial properties', () => {
    it('title property should equal Welcome to Cowville!', () => {
      expect(this.cowsayAppCtrl.title).toBe('Welcome to Cowville!');
    });
  });

  it('history property should be an empty array', () => {
    expect(Array.isArray(this.cowsayAppCtrl.history)).toBe(true);
  }); // this is how we set up general test

  it('list of cowfiles should show proper cowfiles', () => {
    cowsay.list((err, list) => {
      expect(this.cowsayAppCtrl.cowfiles).toEqual(list);
      expect(this.cowsayAppCtrl.current).toEqual(list[0]);
    }); // if we request list we are testing that we get back a list
  });

  describe('#update', () => {
    it('should return a cow that says testing', () => {
      let expected = cowsay.say({ text: 'testing', f: this.cowsayAppCtrl.current });
      let result = this.cowsayAppCtrl.update('testing');
      expect(result).toEqual(expected);
    });
  });

  describe('#speak', () => {
    it('should return a cow that says testing', () => {
      let expected = cowsay.say({ text: 'testing', f: this.cowsayAppCtrl.current });
      this.cowsayAppCtrl.speak('testing');
      expect(this.cowsayAppCtrl.spoken).toEqual(expected);
      expect(this.cowsayAppCtrl.history[0]).toEqual(expected);
    });
  });

  // TODO test undo function here

});
