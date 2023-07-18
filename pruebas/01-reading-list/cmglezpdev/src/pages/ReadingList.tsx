import { useContext } from 'react';
import { BookItem } from '../components';
import { AppContext } from '../context/AppContext';

export const ReadingList = () => {
  const { readingBooks } = useContext(AppContext);

  return (
    <main>
      <section className='library'>
        {
          readingBooks.map(book => (
            <BookItem key={book.ISBN} book={book} removeFromReadingButton />
          ))
        }
      </section>
    </main>
  )
}
