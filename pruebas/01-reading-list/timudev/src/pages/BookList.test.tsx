import { expect, it } from 'vitest';
import { BookList } from './BookList';
import { fireEvent, render } from '@testing-library/react';


// Prueba que el componente BookList filtra libros por género cuando se cambia el filtro de género
it('test_filter_books_by_genre', () => {
    const { getByLabelText, getAllByTestId } = render(<BookList />);
    const select = getByLabelText('Filtrar por género');
    fireEvent.change( select, { target: { value: 'Fantasía' } });
    expect(getAllByTestId('book-card')).toHaveLength(3);
});
