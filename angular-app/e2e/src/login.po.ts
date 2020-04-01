import { browser, by, element } from 'protractor';

export class LoginPage {

  navigateToLogin() {
    return browser.get('/login');
  }

  isLoginFormAvailable() {
    return element(by.css('.login-container')).isPresent();
  }

  getEmailInput() {
    return element(by.css('input[type="email"]'));
  }

  getPasswordInput() {
    return element(by.css('input[type="password"]'));
  }

  getLoginButton() {
    return element(by.css('.login-button'));
  }
}
