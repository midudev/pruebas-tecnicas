import { useContext, useEffect } from 'react';
import { BookItem, FilterGenresMenu } from '../components';
import { AppContext } from '../context/AppContext';
import { AppLayout } from '../layout';
import { useFilterBooks } from '../hook';

export const ReadingList = () => {
  const { readingBooks: books } = useContext(AppContext);
  const { filterOptions, toggleSelectOption, setOptions, filterBooks } = useFilterBooks([]);

  useEffect(() => {
      const genres: string[] = 
          [...new Set(books.map(book => book.genre))]
          .sort((a, b) => a.localeCompare(b));
        setOptions(genres);
  }, [books]);

  return (
    <AppLayout>
       <FilterGenresMenu books={books} filters={filterOptions} toggleSelect={toggleSelectOption}  />
      <section className='library'>
        {
          filterBooks(books).map(book => (
            <BookItem key={book.ISBN} book={book} removeBook />
          ))
        }
      </section>
    </AppLayout>
  )
}
