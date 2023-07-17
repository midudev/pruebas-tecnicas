import { expect, test } from 'vitest';
import { getBooks, getGenres } from '../services/books';

// Edit an assertion and save to see HMR in action

test('Get all books', async () => {
    const response = await getBooks();
    const books = response.library;

    expect(books.length).greaterThan(0);
});

test('Get all genres', async () => {
    const genres = await getGenres();

    expect(genres).contains('Terror');
});
