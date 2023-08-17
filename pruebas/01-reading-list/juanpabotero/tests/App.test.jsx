import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Header } from '../src/components/Header';
import { FiltersContext } from '../src/context/filters';
import { library } from '../src/mocks/books.json';

describe('App', () => {
  test('Debe mostrar la cantidad de libros disponibles', () => {
    const filters = {
      genre: 'all',
      author: 'all',
      search: ''
    };
    const initialBooks = library;
    render(
      <FiltersContext.Provider value={{ filters }}>
        <Header initialBooks={initialBooks} filteredBooks={[]} />
      </FiltersContext.Provider>
    );
    const initialBooksCount = screen.getByLabelText('initialBooksCount');
    expect(initialBooksCount).toHaveTextContent('13');
  });
});
