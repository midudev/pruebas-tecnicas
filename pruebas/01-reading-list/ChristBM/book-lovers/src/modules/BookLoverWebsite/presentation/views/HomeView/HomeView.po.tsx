/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainCtxProvider from '@common/context/MainCtx/MainCtxProvider';
import HomeView from './HomeView';

export default class HomeViewPo {
  /* ----Selectors---- */
  get availableBooksText(): HTMLElement {
    return screen.getByRole('heading', { name: /available books/i }) as HTMLElement;
  }

  get inTheReadingListText(): HTMLElement {
    return screen.queryByText(/in the reading list/i) as HTMLElement;
  }

  get filtersText(): HTMLElement {
    return screen.getByRole('heading', { name: /Filters/i }) as HTMLElement;
  }

  get filterByPageLabel(): HTMLElement {
    return screen.getByLabelText(/filter by page/i) as HTMLElement;
  }

  get FBP_DefaultValue1500(): HTMLElement {
    return screen.getByText(/(1500)/i) as HTMLElement;
  }

  get filterByPage(): HTMLElement {
    return screen.getByTestId('input-range') as HTMLElement;
  }

  get filterByGenreLabel(): HTMLElement {
    return screen.getByLabelText(/filter by genre/i) as HTMLElement;
  }

  get FBG_defaultValueEmpty(): HTMLElement {
    return screen.getByText(/Select a genre/i) as HTMLElement;
  }

  get filterByGenre(): HTMLElement {
    return screen.getByTestId('select-opt') as HTMLElement;
  }

  get allBookCovers(): HTMLElement[] {
    return screen.getAllByAltText('Book Cover') as HTMLElement[];
  }

  get readingListTitle(): HTMLElement {
    return screen.getByRole('heading', { name: /reading list/i }) as HTMLElement;
  }

  get allReadingListBooks(): HTMLElement[] {
    return screen.queryAllByAltText('Reading List Book Cover') as HTMLElement[];
  }

  get firstBookCoverAddText(): HTMLElement {
    return screen.getAllByRole('button', { name: 'Add to list' })[0] as HTMLElement;
  }

  get firstBookCoverBookmark(): HTMLElement {
    return screen.getAllByTestId('added-bookmark')[0] as HTMLElement;
  }

  get firstBookCoverContainer(): HTMLElement {
    return screen.getAllByTestId('book-cover-container')[0] as HTMLElement;
  }

  /* ----Functions---- */

  initialize() {
    render((
      <MainCtxProvider>
        <HomeView />
      </MainCtxProvider>
    ));
  }

  async hoverFirstBookCover(): Promise<void> {
    await userEvent.hover(await this.allBookCovers[0]);
  }

  async clickFirstBookCoverAddBtn(): Promise<void> {
    await this.hoverFirstBookCover();
    await userEvent.click(await this.firstBookCoverAddText);
  }
}
