import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className=''>
      <div className='flex justify-center '>
        <h1 className='text-3xl text-center font-bold m-5 md:text-4xl text-gray-900 dark:text-gray-300 w-2/3 block'>
          <a
            href='https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-900 dark:text-gray-300 hover:cursor-pointer'
          >
            Books App{' '}
            <b className='text-xs font-normal items-end'>Prueba Tecnica #1</b>
          </a>
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className='bg-zinc-300 dark:bg-zinc-900 text-gray-900 dark:text-gray-300 rounded-full p-2 my-5 w-10 flex justify-center items-center'
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
