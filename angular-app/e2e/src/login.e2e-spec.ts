import { browser } from 'protractor';
import { LoginPage } from './login.po';

describe('login page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should navigate to login', () => {
    page.navigateToLogin();
    browser.sleep(1000);
    expect(page.isLoginFormAvailable()).toBeTruthy();
  });

  it('should login successfully', () => {
    page.getEmailInput().sendKeys('admin@mail.com');
    browser.sleep(5000);
    page.getPasswordInput().sendKeys('password');
    browser.sleep(5000);
    page.getLoginButton().click();
    browser.sleep(5000);
    expect(page.isLoginFormAvailable()).toBeFalsy();
  });
});
