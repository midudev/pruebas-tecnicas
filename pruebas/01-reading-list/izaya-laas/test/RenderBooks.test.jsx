import { describe, expect, it, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/preact';
import RenderBooks from '../src/components/main/RenderBooks';
import { books } from '../src/database/books';
import {
  allBooks,
  currentPath,
  myReadingListISBN,
  myReadingListLength,
  totalFreeBooks,
} from '../src/signals/store';
import { filterBooks } from '../src/filters/filterBooks';
import MyBooks from '../src/components/main/routes/MyBooks';
import { notFoundLogs } from '../src/utils/notFoundLogs';
import AllBooks from '../src/components/main/routes/AllBooks';

const cleanupSignals = () => {
  myReadingListISBN.value = [];
};

describe('RenderBooks', () => {
  afterEach(cleanup);
  afterEach(cleanupSignals);

  it('Deberia renderizarse', () => {
    render(<RenderBooks books={books} />);
  });

  it('Al clickear las figure deberia agregarse la clase bg-grated-pattern y al reclickear deberia quitarse la clase', () => {
    render(<RenderBooks books={books} />);

    const figures = screen.getAllByRole('figure');

    //Click
    figures.forEach((figure) => {
      fireEvent.click(figure);

      expect(figure.className.includes('bg-grated-pattern')).toBe(true);
    });

    //Reclick
    figures.forEach((figure) => {
      fireEvent.click(figure);

      expect(figure.className.includes('bg-grated-pattern')).toBe(false);
    });
  });

  it('Al clickear deberia agregarse a la lista de lectura', () => {
    render(<RenderBooks books={books} />);

    const figures = screen.getAllByRole('figure');

    //Click
    figures.forEach((figure, index) => {
      fireEvent.click(figure);
      expect(myReadingListISBN.value).toHaveLength(index + 1);
    });

    expect(myReadingListISBN.value).toHaveLength(books.length);

    //Reclick
    figures.forEach((figure, index) => {
      fireEvent.click(figure);
      expect(myReadingListISBN.value).toHaveLength(
        figures.length + (-index - 1),
      );
    });

    expect(myReadingListISBN.value).toHaveLength(0);
  });

  it('Al clickear deberia agregarse a la lista de lectura y la suma del totalFreeBooks + MyReadingListLength deberia ser el total de libros', () => {
    render(<RenderBooks books={books} />);

    const figures = screen.getAllByRole('figure');

    //Click
    figures.forEach((figure) => {
      fireEvent.click(figure);
      expect(books.length).toBe(
        totalFreeBooks.value + myReadingListLength.value,
      );
    });

    //Reclick
    figures.forEach((figure, index) => {
      fireEvent.click(figure);
      expect(books.length).toBe(
        totalFreeBooks.value + myReadingListLength.value,
      );
    });
  });

  it('Al querer renderizarse con 0 books en /my-books, deberia renderizarse el componente HasNotBeFound', () => {
    currentPath.value = '/my-books';
    myReadingListISBN.value = [];

    render(<MyBooks />);

    const isRender = Boolean(notFoundLogs.noRenderMyBooks);
    expect(isRender).toBe(true);
  });

  it('Al querer renderizarse con 0 books, deberia renderizarse el componente HasNotBeFound con otro mensaje', () => {
    currentPath.value = '/';
    allBooks.value = [];

    render(<AllBooks />);

    const isRender = Boolean(screen.getByText(notFoundLogs.noRenderAllBooks));

    expect(isRender).toBe(true);
  });
});
