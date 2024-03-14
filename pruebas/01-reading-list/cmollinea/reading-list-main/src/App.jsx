import { useContext, useEffect, useState } from 'react';
import { readingListContext } from './Context/ReadingListProvider';
import books from './mocks/books.json';
import AvailableBooks from './Componets/AvailableBooks';
import Header from './Componets/Header';
import ReadingList from './Componets/ReadingList';
import { MdList } from 'react-icons/md';
import Footer from './Componets/Footer';

export default function App() {
  const { readingList, setReadingList, storedList } =
    useContext(readingListContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Check if another tab made changes.
    if (readingList !== storedList) {
      setReadingList(storedList);
    }
  }, [storedList]);

  // Prevent bubble on mobile devices
  useEffect(() => {
    if (modalIsOpen) {
      const modal = document.getElementById('modal');
      const handleScrollOverModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
      };
      modal.addEventListener('touchmove', handleScrollOverModal);
      return () => {
        modal.removeEventListener('touchmove', handleScrollOverModal);
      };
    }
  }, [modalIsOpen]);

  return (
    <div className='text-slate-300 flex flex-col mx-0 items-center place-content-center'>
      <Header />
      <button
        className='bg-sky-600/50 hover:bg-sky-600 text-2xl hover:text-inherit transition-colors text-slate-200/50 p-2 md:hidden fixed z-30 bottom-10 right-4 w-fit rounded-full'
        onClick={() => setModalIsOpen((prev) => !prev)}
      >
        <MdList />
      </button>
      <hr className='opacity-30 mt-6 w-[90%]' />
      <main className='md:flex min-h-screen gap-10 w-full'>
        <AvailableBooks books={books.library} />
        <ReadingList
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      </main>
      <Footer />
    </div>
  );
}
