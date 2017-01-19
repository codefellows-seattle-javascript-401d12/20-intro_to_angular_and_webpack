'use strict';

require('./lib/test-setup.js');

const angular = require('angular');
const cowsayBrowser = require('cowsay-browser');

describe('cowsay Controller', function() {


  beforeEach( () => {
    angular.mock.module('cowsayApp');
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('cowsayController');
    });
    this.cowsayCtrl.history = [];
    this.cowsayCtrl.currentArt = { text: 'I moo 4 u', f: 'default' };
  });

  describe('Initial properties', () => {
    it('title property should be "CowCreator 1000"', () => {
      expect(this.cowsayCtrl.title).toEqual('CowCreator 1000');
      expect(this.cowsayCtrl.currentArt).toEqual({ text: 'I moo 4 u', f: 'default' });
      expect(this.cowsayCtrl.history).toEqual([]);
    });
  });

  describe('#getCurrentArt', () => {
    it('should return art reflecting current text and face', () => {
      expect(this.cowsayCtrl.getCurrentArt()).toEqual(cowsayBrowser.say({ text: this.cowsayCtrl.currentArt.text, f: this.cowsayCtrl.currentArt.f }));
    });

    it('should return art reflecting CHANGED text and face', () => {
      this.cowsayCtrl.currentArt = { text: 'testtext', f: 'eyes' };
      expect(this.cowsayCtrl.getCurrentArt()).toEqual(cowsayBrowser.say({ text: 'testtext', f: 'eyes' }));
    });

    it('should return art reflecting BLANK text', () => {
      this.cowsayCtrl.currentArt = { text: '', f: 'eyes' };
      expect(this.cowsayCtrl.getCurrentArt()).toEqual(cowsayBrowser.say({ text: 'BLANK', f: 'eyes' }));
    });
  });

  describe('#saveCow', () => {
    it('should return length of history and save current art to history', () => {
      expect(this.cowsayCtrl.saveCow()).toEqual(1);
      expect(this.cowsayCtrl.history).toEqual([this.cowsayCtrl.currentArt]);
    });

    it('should return length of history and save current art to history TWICE', () => {
      let tempArt = this.cowsayCtrl.currentArt;
      this.cowsayCtrl.history = [];
      expect(this.cowsayCtrl.saveCow()).toEqual(1);
      this.cowsayCtrl.currentArt = { text: 'testtext', f: 'dragon' };
      expect(this.cowsayCtrl.saveCow()).toEqual(2);
      expect(this.cowsayCtrl.history[0]).toEqual(tempArt);
      expect(this.cowsayCtrl.history[1]).toEqual({ text: 'testtext', f: 'dragon' });
    });
  });

  describe('#undo', () => {
    it('should return 1 and remove the only history item', () => {
      this.cowsayCtrl.history = [];
      this.cowsayCtrl.saveCow();
      expect(this.cowsayCtrl.undo()).toEqual(1);
      expect(this.cowsayCtrl.history.length).toEqual(0);
    });

    it('should return 1 and remove 1 of 2 history items', () => {
      this.cowsayCtrl.history = [];
      this.cowsayCtrl.saveCow();
      this.cowsayCtrl.saveCow();
      expect(this.cowsayCtrl.undo()).toEqual(1);
      expect(this.cowsayCtrl.history.length).toEqual(1);
    });

    it('should return 1 until history is empty, then return 0, and remove 2 of 2 history items', () => {
      this.cowsayCtrl.history = [];
      this.cowsayCtrl.saveCow();
      this.cowsayCtrl.saveCow();
      expect(this.cowsayCtrl.history.length).toEqual(2);
      expect(this.cowsayCtrl.undo()).toEqual(1);
      expect(this.cowsayCtrl.history.length).toEqual(1);
      expect(this.cowsayCtrl.undo()).toEqual(1);
      expect(this.cowsayCtrl.history.length).toEqual(0);
      expect(this.cowsayCtrl.undo()).toEqual(0);
      expect(this.cowsayCtrl.history.length).toEqual(0);
      expect(this.cowsayCtrl.undo()).toEqual(0);
    });
  });
});
