import { LocalStorageService } from './services/local-storage.service.js';


const saveLocalButton = document.querySelector('button.save-local-button');
const showLocalButton = document.querySelector('button.show-local-button');

const localStorageService = new LocalStorageService();

saveLocalButton.addEventListener('click', () => {
  localStorageService.save('message', 'local storage');
});

showLocalButton.addEventListener('click', () => {
  alert(localStorageService.get('message'));
});
