import { describe, expect, it, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/preact';
import RenderBooks from '../src/components/main/RenderBooks';
import { books } from '../src/database/books';
import {
  myReadingListISBN,
  myReadingListLength,
  totalFreeBooks,
} from '../src/signals/store';

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
});
