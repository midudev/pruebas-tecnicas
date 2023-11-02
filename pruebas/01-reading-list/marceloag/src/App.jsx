// import { useState } from 'react'
import { create } from 'zustand';
import './index.css';
import Header from './components/Header';
import Booklist from './components/Booklist';
import Readinglist from './components/Readinglist';
import { useBooks } from './store/bookStore';

function App() {
  const allbooks = useBooks((state) => state.books);

  return (
    <main className="flex flex-col w-full justify-center items-center">
      <Header />
      <section className="flex flex-row justify-center items-start">
        <Booklist books={allbooks} />
        <Readinglist />
      </section>
    </main>
  );
}

export default App;
