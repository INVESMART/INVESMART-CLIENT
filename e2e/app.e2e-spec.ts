import { Fuse2Page } from './app.po';

describe('Sysgep', () => {
    let page: Fuse2Page;

    beforeEach(() => {
        page = new Fuse2Page();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!');
    });
});
