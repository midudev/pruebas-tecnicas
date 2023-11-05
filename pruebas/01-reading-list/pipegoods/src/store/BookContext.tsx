import { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { getBooks, getGenres } from '../services/books';
import type { Book, Library } from '../types/types';
import { useLocalStorage } from '../hooks/useLocalStorage';

type BookContextType = {
    books: Library[];
    genres: string[];
    selectedGenre: string;
    setSelectedGenre: (genre: string) => void;
    loading?: boolean;
    booksToRead: Book[];
    addBookToRead: (book: Book) => void;
    removeBookToRead: (book: Book) => void;
    totalBooks: number;
};

export const BookContext = createContext<BookContextType>({
    books: [],
    genres: [],
    selectedGenre: '',
    setSelectedGenre: () => {
        return;
    },
    loading: true,
    booksToRead: [],
    addBookToRead: () => {
        return;
    },
    removeBookToRead: () => {
        return;
    },
    totalBooks: 0,
});

export const BookProvider = ({ children }: PropsWithChildren) => {
    const [books, setBooks] = useState<Library[]>([]);
    const [booksToRead, setBooksToRead] = useLocalStorage<Book[]>('booksToRead', []);
    const [genres, setGenres] = useState<string[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBooks()
            .then((data) => {
                setBooks(data.library);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });

        getGenres()
            .then((data) => {
                setGenres(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filteredBooks = selectedGenre ? books.filter(({ book }) => book.genre === selectedGenre) : books;

    const addBookToRead = (book: Book) => {
        const bookFind = booksToRead.find((bookToRead) => bookToRead.ISBN === book.ISBN);

        if (bookFind) {
            return;
        }

        setBooksToRead([...booksToRead, book]);
    };

    const removeBookToRead = (book: Book) => {
        const newBooksToRead = booksToRead.filter((bookToRead) => bookToRead.ISBN !== book.ISBN);

        setBooksToRead(newBooksToRead);
    };

    return (
        <BookContext.Provider
            value={{
                books: filteredBooks,
                genres,
                selectedGenre,
                setSelectedGenre,
                loading,
                booksToRead,
                addBookToRead,
                removeBookToRead,
                totalBooks: books.length,
            }}
        >
            {children}
        </BookContext.Provider>
    );
};
