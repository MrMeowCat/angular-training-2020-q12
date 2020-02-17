import { StorageService } from './storage.service.js';

export class LocalStorageService extends StorageService {

  constructor() {
    super(localStorage);
  }
}
