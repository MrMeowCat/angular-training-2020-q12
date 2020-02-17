export class StorageService {

  static DEFAULT_KEY = 'message';

  get value() {
    return this.get(StorageService.DEFAULT_KEY);
  }

  set value(value) {
    this.save(StorageService.DEFAULT_KEY, value);
  }

  constructor(storage) {
    this.storage = storage;
  }

  save(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key) {
    const value = this.storage.getItem(key);
    return value ? JSON.parse(value) : value;
  }
}
