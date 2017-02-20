import { browser, element, by } from 'protractor';

export class TikiNgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-shell h1')).getText();
  }
}
