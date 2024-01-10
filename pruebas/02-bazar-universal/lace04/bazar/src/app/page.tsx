import React from 'react';
import { SearchBar } from '../components/search-bar';
import Image from 'next/image';

function HomePage() {
  return (
    <main className='mt-52'>
      <section className='flex flex-col justify-center items-center h-full gap-x-4'>
        <Image src='/logo.svg' alt='Not found' width={320} height={320} />
        <SearchBar />
      </section>
    </main>
  );
}

export default HomePage;
