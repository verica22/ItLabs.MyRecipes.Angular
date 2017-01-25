import { MyRecipesPage } from './app.po';

describe('my-recipes App', function() {
  let page: MyRecipesPage;

  beforeEach(() => {
    page = new MyRecipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
