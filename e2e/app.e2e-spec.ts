import { AngularTodoAppPage } from './app.po';

describe('angular-todo-app App', () => {
  let page: AngularTodoAppPage;

  beforeEach(() => {
    page = new AngularTodoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
