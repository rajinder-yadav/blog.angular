import { Blog.AngularPage } from './app.po';

describe('blog.angular App', () => {
  let page: Blog.AngularPage;

  beforeEach(() => {
    page = new Blog.AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
