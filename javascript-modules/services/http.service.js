export class HttpService {

  fetchFake(shouldResolve) {
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve(1);
      } else {
        reject(0);
      }
    });
  }

  async fetchFakeAsyncAwait(shouldResolve) {
    const firstValue = await new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve(1);
      } else {
        reject(0);
      }
    });
    let secondValue = 0;
    try {
      secondValue = await this.fetchFake(false)
    } catch (e) {
      secondValue = e;
    }
    return firstValue + secondValue;
  }

  async fetch() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    return response.json();
  }
}
