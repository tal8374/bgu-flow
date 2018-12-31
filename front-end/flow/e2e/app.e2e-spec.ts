import { UmlAppPage } from './app.po';

describe('uml-app App', () => {
  let page: UmlAppPage;

  beforeEach(() => {
    page = new UmlAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
