import { useState } from 'react';
import { Books } from './components/Books';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { useFilters } from './hooks/useFilters';
import { useReadingList } from './hooks/useReadingList';
import { library as initialBooks } from './mocks/books.json';

function App() {
  const { filterBooks } = useFilters();
  const [isReadingListActive, setIsReadingListActive] = useState(false);
  const { readingList, clearReadingList } = useReadingList();

  const filteredBooks = filterBooks(initialBooks);
  const filteredBooksMapped = filteredBooks.map(({ book }) => book);

  return (
    <>
      <div className="max-w-5xl mx-auto px-4">
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
        <main className="grid mb-8">
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
      </div>
      <div
        className="fixed -z-10 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full 
        bg-red-600 blur-[150px] lg:blur-[350px] opacity-50 left-0 top-0"
      ></div>
      <div
        className="fixed -z-10 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full 
        bg-amber-600 blur-[150px] lg:blur-[350px] opacity-50 right-0 bottom-0"
      ></div>
    </>
  );
}

export default App;
