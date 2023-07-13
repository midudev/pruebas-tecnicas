'use client';

import { useDrawerStore } from '@/stores/drawerStore';

function Modal() {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const closeModal = useDrawerStore((state) => state.close);

  return isOpen ? (
    <section className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <dialog
        open={isOpen}
        className='fixed bottom-0 animate-fade-up md:animate-fade-left animate-delay-100 w-full md:right-0 md:w-[460px] md:top-0 md:mr-0 md:h-full p-4 bg-secondary shadow h-2/4 md:rounded-t-none rounded-t-3xl text-white'
      >
        <div className='flex flex-row justify-between items-center'>
          <button onClick={closeModal}>Close</button>
          <h2 className='text-2xl font-medium'>Lista de Lectura</h2>
          <button>Close</button>
        </div>
      </dialog>
    </section>
  ) : null;
}

export default Modal;
