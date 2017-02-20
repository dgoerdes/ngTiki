import { TikiNgPage } from './app.po';

describe('tiki-ng App', () => {
  let page: TikiNgPage;

  beforeEach(() => {
    page = new TikiNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
