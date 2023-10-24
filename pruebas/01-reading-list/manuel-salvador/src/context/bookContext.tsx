import { IBookContext, IFilters } from '@/types';
import { ReactNode, createContext, useState } from 'react';
import booksMock from '@/data/books.json';
import useLocalStorage from '@/hooks/useLocalStorage';
import { getMaxPages } from '@/utils/filters';

type IProps = {
  children: ReactNode;
};

const library = booksMock.library.map((book) => book.book);

const initialFilters: IFilters = {
  pages: getMaxPages(library),
  genres: [],
  title: '',
  year: 0,
  ISBN: '',
  author: '',
};

const initialContext: IBookContext = {
  library: [],
  filteredLibrary: [],
  savedBooks: [],
  updateSavedBooks: () => {},
  filters: initialFilters,
  updateFilters: () => {},
};

const BookContext = createContext<IBookContext>(initialContext);

function BookProvider({ children }: IProps) {
  const [savedBookIds, setSavedBookIds] = useLocalStorage<string[]>('SAVED_BOOKS_V1', []);
  const [filters, setFilters] = useState<IFilters>(initialFilters);

  const updateSavedBooks = (ISBN: string) => {
    const alreadySaved = savedBookIds.includes(ISBN);

    if (alreadySaved) {
      const newList = [...savedBookIds].filter((bookId) => bookId !== ISBN);
      setSavedBookIds(newList);
    } else {
      setSavedBookIds([...savedBookIds, ISBN]);
    }
  };

  const updateFilters: IBookContext['updateFilters'] = (filter, value) => {
    setFilters({ ...filters, title: '', author: '', ISBN: '', year: 0, [filter]: value });
  };

  const filteredLibrary = library.filter((book) => {
    const { title, pages, genres, year, ISBN, author } = filters;
    const matchPages = pages === 0 || book.pages <= pages;
    const matchGenres =
      genres.length === 0 ||
      genres.map((genre) => genre.toLowerCase()).includes(book.genre.toLowerCase());
    const matchTitle = !title || book.title.toLowerCase().includes(title.toLowerCase());
    const matchYear = year === 0 || String(book.year).includes(String(year));
    const matchISBN = !ISBN || book.ISBN.toLowerCase().includes(ISBN.toLowerCase());
    const matchAuthor = !author || book.author.name.toLowerCase().includes(author.toLowerCase());

    return matchTitle && matchPages && matchGenres && matchYear && matchISBN && matchAuthor;
  });

  const savedBooks = filteredLibrary.filter((book) => savedBookIds.includes(book.ISBN));

  return (
    <BookContext.Provider
      value={{ savedBooks, updateSavedBooks, library, filteredLibrary, filters, updateFilters }}
    >
      {children}
    </BookContext.Provider>
  );
}

export { BookProvider, BookContext };
