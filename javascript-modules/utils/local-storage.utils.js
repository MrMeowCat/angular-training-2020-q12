import { LocalStorageService } from '../services/local-storage.service.js';

export class LocalStorageUtils {

  static SERVICE = new LocalStorageService();

  static save(key, value) {
    LocalStorageUtils.SERVICE.save(key, value);
  }

  static get(key) {
    return LocalStorageUtils.get(key);
  }
}
