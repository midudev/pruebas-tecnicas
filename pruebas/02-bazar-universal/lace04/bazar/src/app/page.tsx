import React from 'react';
import { SearchBar } from '../components/search-bar';
import Image from 'next/image';

function HomePage() {
  return (
    <main>
      <section className='flex flex-col justify-center items-center h-screen gap-x-4'>
        <Image src='/logo.svg' alt='Not found' width={320} height={320} />
        <SearchBar />
      </section>
    </main>
  );
}

export default HomePage;
