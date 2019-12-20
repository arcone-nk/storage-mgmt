/*!
Simple Storage Manager
It's a simple HTML 5 local and session storage management

https://github.com/arcone-nk/storage-mgmt
Version: 1.0.1
Licence: MIT

Copyright (c) 2019 Nobuyuki Kondo
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.storageMgmt = {}));
}(this, (function (exports) { 'use strict';

  var StorageMgmt = /** @class */ (function () {
      function StorageMgmt(type) {
          if (type === 'session') {
              this._storage = sessionStorage;
          }
          else {
              this._storage = localStorage;
          }
      }
      /**
       * save item
       * @param key
       * @param val
       */
      StorageMgmt.prototype.set = function (key, val) {
          this._storage.setItem(key, JSON.stringify(val, null, 0));
          return this;
      };
      /**
       * get item
       * @param key
       */
      StorageMgmt.prototype.get = function (key) {
          var item = this._storage.getItem(key);
          return item === null ? null : JSON.parse(item);
      };
      /**
       * remove item
       * @param key
       */
      StorageMgmt.prototype.remove = function (key) {
          this._storage.removeItem(key);
          return this;
      };
      /**
       * storage clear
       */
      StorageMgmt.prototype.clear = function () {
          this._storage.clear();
      };
      return StorageMgmt;
  }());

  var strSession = new StorageMgmt('session');
  var strLocal = new StorageMgmt('local');

  exports.strLocal = strLocal;
  exports.strSession = strSession;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
