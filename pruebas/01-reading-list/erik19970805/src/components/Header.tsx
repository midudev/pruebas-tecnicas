'use client';
import useBook from '@hooks/useBook';
import { BookCart } from './BookCart';
import { Navbar } from './Navbar';
import { Toast } from './Toast';

export const Header = () => {
  const { books, loading, message, error, clearMessage } = useBook();
  const alert = error ? 'warning' : 'info';
  return (
    <header className="sticky top-0 z-10">
      <Navbar totalItems={books.length}>
        <BookCart books={books} loading={loading} />
      </Navbar>
      {!!message && (
        <Toast onClick={clearMessage} alert={alert}>
          {message}
        </Toast>
      )}
    </header>
  );
};
