import { LaLigaPage } from './app.po';

describe('la-liga App', () => {
  let page: LaLigaPage;

  beforeEach(() => {
    page = new LaLigaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
