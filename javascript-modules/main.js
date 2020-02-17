import { HttpService } from './services/http.service.js';
import { LocalStorageService } from './services/index.js';
import { SessionStorageService } from './services/session-storage.service.js';


const saveLocalButton = document.querySelector('button.save-local-button');
const saveSessionButton = document.querySelector('button.save-session-button');
const showLocalButton = document.querySelector('button.show-local-button');
const showSessionButton = document.querySelector('button.show-session-button');
const fetchButton = document.querySelector('button.fetch-button');

const localStorageService = new LocalStorageService();
const sessionStorageService = new SessionStorageService();
const httpService = new HttpService();

saveLocalButton.addEventListener('click', () => {
  localStorageService.save('message', 'local storage');
});

showLocalButton.addEventListener('click', () => {
  alert(localStorageService.get('message'));
});

saveSessionButton.addEventListener('click', () => {
  sessionStorageService.save('message', 'session storage');
});

showSessionButton.addEventListener('click', () => {
  alert(sessionStorageService.get('message'));
});

fetchButton.addEventListener('click', () => {
  httpService.fetchFake(true).then((result) => {
    console.log(result);
    return result * 10;
  }).catch((error) => {
    console.log(error);
  }).then((result) => {
    console.log(result);
  });

  // console.log(httpService.fetchFakeAsyncAwait(true));

  httpService.fetchFakeAsyncAwait(true).then((result) => {
    console.log(result);
  });

  httpService.fetch().then((result) => {
    console.log(result);
    const image = document.querySelector('.image');
    image.src = result.message;
  });

});
