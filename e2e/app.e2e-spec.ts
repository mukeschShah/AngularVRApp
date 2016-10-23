import { AngularVRappPage } from './app.po';

describe('angular-vrapp App', function() {
  let page: AngularVRappPage;

  beforeEach(() => {
    page = new AngularVRappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
