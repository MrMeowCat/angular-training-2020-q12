import { StorageService } from './storage.service.js';

export const SessionStorageService = function () {
  this.storageService = new StorageService(sessionStorage);
};

SessionStorageService.prototype.save = function (key, value) {
  this.storageService.save(key, value);
};

SessionStorageService.prototype.get = function (key) {
  return this.storageService.get(key);
};
