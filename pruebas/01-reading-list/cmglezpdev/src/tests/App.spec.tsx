import { beforeEach, describe, it, expect } from 'vitest';
import { render, screen, cleanup, getByText } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

import { AppProvider } from '../context/AppContext';
import { Home, ReadingList } from '../pages';
import { AppLayout } from '../layout';


describe('App', () => {
    beforeEach(() => cleanup())

    it('should render Home Page', () => {
        render(
            <BrowserRouter>
                <AppProvider>
                    <AppLayout>
                        <Home />
                    </AppLayout>
                </AppProvider>
            </BrowserRouter>
        )
    })

    it('should render Reading List Page', () => {
        render(
            <BrowserRouter>
                <AppProvider>
                    <AppLayout>
                        <ReadingList />
                    </AppLayout>
                </AppProvider>
            </BrowserRouter>
        )
    })

    it('should remove from the list a book when it saved to listing book', async () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/']}>
                <AppProvider>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/reading' element={<ReadingList />} />
                        </Routes>
                </AppProvider>
            </MemoryRouter>
        )

        const user = userEvent.setup()

        const books = container.querySelectorAll('.library__book');
        expect(books.length).toBeGreaterThan(0); // should exisiting atleast one book
        
        const book = books[0];
        const buttonToSave = book.querySelector('.book__mark')!;
        await user.click(buttonToSave); // click to save the first book
        
        const dataTestId = book.getAttribute('data-testid');
        expect(dataTestId).not.toBeNull();
        const booksAfterSaved = container.querySelectorAll('.library__book');
        expect(books.length).toBe(booksAfterSaved.length + 1); // the amount of books should decrease at one
        expect(screen.queryByTestId(dataTestId!)).toBeFalsy(); // the book must not exist in the list
    
        
        // Move to reading page
        const readingBookLink = screen.getByTestId('reading-books-link');
        await user.click(readingBookLink);

        // check if the book is in the page
        const bookInReadingList = await screen.findByTestId(dataTestId!);
        expect(bookInReadingList).toBeTruthy();
        expect(container.querySelectorAll('.library__book').length).toBe(1);
    })

    it('should show all filters by genrer', () => {
        const { container } = render(
            <BrowserRouter>
                <AppProvider>
                    <AppLayout>
                        <Home />
                    </AppLayout>
                </AppProvider>
            </BrowserRouter>
        )
        
        const books = container.querySelectorAll('.library__book');
        const genresFromBooks = [...new Set( [...books].map(book => book.querySelector('.info__genre')?.textContent) )]
        const filters = container.querySelectorAll('.main__menu > .option_filter');
        const genresFromFilter = [...filters].map(filter => filter.querySelector('.filter__genre')?.textContent);

        expect(
            genresFromBooks.sort((a, b) => b!.localeCompare(a!))
        ).toEqual(
            genresFromFilter.sort((a, b) => b!.localeCompare(a!))
        )
    })

    it('should filter the books', async () => {
        const { container } = render(
            <BrowserRouter>
                <AppProvider>
                    <AppLayout>
                        <Home />
                    </AppLayout>
                </AppProvider>
            </BrowserRouter>
        )

        const user = userEvent.setup();
        
        const book = container.querySelector('.library__book');
        expect(book).not.toBeNull();
        const genreBook = book?.querySelector('.info__genre')?.textContent;
        const filter = getByText(container.querySelector('.main__menu')!, genreBook!);
        
        await user.click(filter);
        const booksFiltered = container.querySelectorAll('.library__book');
        const genres = [...booksFiltered].map(book => book.querySelector('.info__genre')!.textContent);
        const existDiff = genres.some(genre => genre != genreBook); //check if all books filtered have the same genre
        expect(existDiff).toBeFalsy();
    })
})