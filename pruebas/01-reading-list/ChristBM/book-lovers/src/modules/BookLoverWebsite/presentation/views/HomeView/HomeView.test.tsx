/* eslint-disable no-undef */
import HomeViewPo from './HomeView.po';

describe('<HomeView />', () => {
  let page: HomeViewPo;

  beforeEach(() => {
    page = new HomeViewPo();
  });

  describe('Default state', () => {
    it('Should display the "available books" text', () => {
      page.initialize();

      expect(page.availableBooksText).toBeInTheDocument();
    });

    it('Should display the "in the reading list" text', () => {
      page.initialize();

      expect(page.inTheReadingListText).not.toBeInTheDocument();
    });

    it('Should display the "Filter" text', () => {
      page.initialize();

      expect(page.filtersText).toBeInTheDocument();
    });

    it('Should display the filter by pages', () => {
      page.initialize();

      expect(page.filterByPageLabel).toBeInTheDocument();
      expect(page.filterByPage).toBeInTheDocument();
      expect(page.FBP_DefaultValue1500).toBeInTheDocument();
    });

    it('Should display the filter by genre', () => {
      page.initialize();

      expect(page.filterByGenreLabel).toBeInTheDocument();
      expect(page.filterByGenre).toBeInTheDocument();
      expect(page.FBG_defaultValueEmpty).toBeInTheDocument();
    });

    it('Should display the first eight covers of books', () => {
      page.initialize();

      expect(page.allBookCovers).toHaveLength(8);
    });

    it('Should display the reading list title', () => {
      page.initialize();

      expect(page.readingListTitle).toBeInTheDocument();
    });

    it('Should display an empty reading list', () => {
      page.initialize();

      expect(page.allReadingListBooks).toHaveLength(0);
    });
  });

  describe('User Interactions', () => {
    describe('Book List', () => {
      it('Should display a message: "Add to list" when the user hover over one book cover', async () => {
        page.initialize();

        await page.hoverFirstBookCover();

        expect(page.firstBookCoverAddText).toHaveClass('btn_hover');
      });

      it('Should display a marker when the user click in the button for add', async () => {
        page.initialize();

        await page.clickFirstBookCoverAddBtn();

        expect(page.firstBookCoverBookmark).toHaveClass('show__bookmark');
      });

      it('Should decrease the opacity and hide the add button after add the book to the Reading List', async () => {
        page.initialize();

        await page.clickFirstBookCoverAddBtn();

        expect(page.firstBookCoverContainer).toHaveClass('obscure_card');
        expect(page.firstBookCoverAddText).toHaveClass('hide_btn');
      });

      /* Test infinite scroll here */
    });

    describe('Reading List', () => {
      it('Should add one book to the Reading List', async () => {
        page.initialize();

        await page.clickFirstBookCoverAddBtn();

        expect(page.allReadingListBooks).toHaveLength(1);
      });
    });

    /* Test filters here */
  });
});
