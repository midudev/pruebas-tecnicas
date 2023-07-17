'use client';

import { SiBookstack } from 'react-icons/si';
import { AiFillSetting } from 'react-icons/ai';
import { useDrawerStore } from '@/stores/drawerStore';
import { useListStore } from '@/stores/listStore';

function Navbar() {
  const openModal = useDrawerStore((state) => state.oepn);

  const books = useListStore((state) => state.books);

  return (
    <nav className='flex flex-row justify-between items-center bg-secondary py-4 px-6 rounded-md'>
      <button>
        <AiFillSetting width={60} height={60} />
      </button>
      <h2 className='text-2xl font-medium'>Readerx</h2>
      <button className='flex flex-row gap-2 items-center' onClick={openModal}>
        <SiBookstack width={60} height={60} />
        <span>({books.length})</span>
      </button>
    </nav>
  );
}

export default Navbar;
