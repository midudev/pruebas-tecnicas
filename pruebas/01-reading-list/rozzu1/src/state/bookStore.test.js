import { bookStore } from './bookStore';
import { describe, beforeEach, it, expect } from 'vitest';

describe('bookStore', () => {
    beforeEach(() => {
        bookStore.setState({ books: [], readingList: [], selectedGenre: null });
    });
    it('should add book to the reading list', () => {
        const initialReadingList = [
            {
                book: {
                    title: 'book1',
                    ISBN: '1234567890',
                },
            },
            {
                book: {
                    title: 'book2',
                    ISBN: '0987654321',
                },
            },
        ];

        bookStore.setState({ readingList: initialReadingList });

        const newBook = { title: 'test Book', ISBN: '9876543210' };
        bookStore.getState().addBook(newBook);

        const updatedReadingList = bookStore.getState().readingList;

        expect(updatedReadingList).toContainEqual(newBook);
        expect(updatedReadingList).toEqual(expect.arrayContaining(initialReadingList));
    });

    it('should remove a book from the reading list', () => {
        const initialReadingList = [
            {
                book: {
                    title: 'book1',
                    ISBN: '1234567890',
                },
            },
            {
                book: {
                    title: 'book2',
                    ISBN: '0987654321',
                },
            },
            {
                book: {
                    title: 'book3',
                    ISBN: '9876543210',
                },
            },
        ];

        const bookToRemove = initialReadingList[1];
        const expectedUpdatedReadingList = [initialReadingList[0], initialReadingList[2]];

        bookStore.setState({ readingList: initialReadingList });

        bookStore.getState().removeBook(bookToRemove.book.ISBN);

        const updatedReadingList = bookStore.getState().readingList;

        expect(updatedReadingList).not.toContainEqual(bookToRemove);
        expect(updatedReadingList).toEqual(expectedUpdatedReadingList);
    });

    it('should set the selected genre', () => {
        bookStore.getState().setSelectedGenre('Fiction');

        expect(bookStore.getState().selectedGenre).toBe('Fiction');
    });
});
