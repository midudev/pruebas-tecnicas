import { useContext } from 'react';
import { BookItem } from '../components';
import { AppContext } from '../context/AppContext';
import { AppLayout } from '../layout';

export const ReadingList = () => {
  const { readingBooks } = useContext(AppContext);

  return (
    <AppLayout>
      <section className='library'>
        {
          readingBooks.map(book => (
            <BookItem key={book.ISBN} book={book} removeFromReadingButton />
          ))
        }
      </section>
    </AppLayout>
  )
}
