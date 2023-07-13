'use client';

import { useDrawerStore } from '@/stores/drawerStore';
import BookCard from './BookCard';
import { useListStore } from '@/stores/listStore';

function Modal() {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const closeModal = useDrawerStore((state) => state.close);

  const books = useListStore((state) => state.books);

  return isOpen ? (
    <section className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <dialog
        open={isOpen}
        className='fixed bottom-0 animate-fade-up md:animate-fade-left space-y-4 animate-delay-100 w-full md:right-0 md:w-[460px] md:top-0 md:mr-0 md:h-full p-4 bg-secondary shadow h-2/4 md:rounded-t-none rounded-t-3xl text-white'
      >
        <div className='flex flex-row justify-between items-center'>
          <button onClick={closeModal}>Close</button>
          <h2 className='text-2xl font-medium'>Lista de Lectura</h2>
          <button>Close</button>
        </div>

        <div className='grid grid-cols-2 gap-2 md:gap-4'>
          {books.length > 0
            ? books.map((book) => <BookCard key={book.ISBN} book={book} />)
            : null}
        </div>
      </dialog>
    </section>
  ) : null;
}

export default Modal;
