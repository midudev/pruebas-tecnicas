import { useState } from 'react';
import { Books } from './components/Books';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { useFilters } from './hooks/useFilters';
import { useReadingList } from './hooks/useReadingList';
import { library as initialBooks } from './mocks/books.json';

export function Home() {
  const { filterBooks } = useFilters();
  const [isReadingListActive, setIsReadingListActive] = useState(false);
  const { readingList, clearReadingList } = useReadingList();

  const filteredBooks = filterBooks(initialBooks);
  const filteredBooksMapped = filteredBooks.map(({ book }) => book);

  return (
    <>
      <Header />
      <Tabs
        {...{
          isReadingListActive,
          setIsReadingListActive,
          readingList,
          clearReadingList,
          filteredBooksMapped
        }}
      />
      <main className="grid">
        <div className={`${isReadingListActive ? 'hidden' : ''}`}>
          <Books
            books={filteredBooksMapped}
            isReadingListActive={isReadingListActive}
          />
        </div>
        <div className={`${isReadingListActive ? '' : 'hidden'}`}>
          <Books
            books={readingList}
            isReadingListActive={isReadingListActive}
          />
        </div>
      </main>
    </>
  );
}
