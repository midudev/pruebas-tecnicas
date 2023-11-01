import React from 'react';
import { SearchBar } from '../components/search-bar';

function HomePage() {
  return (
    <main>
      <section className='flex flex-col justify-center items-center h-screen gap-x-4'>
        <img src='/logo.svg' alt='Not found' className='w-80' />
        <SearchBar />
      </section>
    </main>
  );
}

export default HomePage;
