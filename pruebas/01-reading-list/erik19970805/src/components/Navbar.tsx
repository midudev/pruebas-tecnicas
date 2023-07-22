'use client';
import { useNavbar } from '@hooks/useNavbar';
import Link from 'next/link';
import { type FC, type PropsWithChildren } from 'react';

interface Props {
  totalItems: number;
}

export const Navbar: FC<PropsWithChildren<Props>> = ({ totalItems = 0, children }) => {
  const { elementRef, isOpen } = useNavbar();
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-slate-900">
      <Link href="/" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 mr-3 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Librería</span>
      </Link>
      <div className="relative" ref={elementRef}>
        <button
          type="button"
          className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            {totalItems}
          </div>
        </button>
        <div
          className={`absolute flex flex-col gap-2 right-0 mt-2 py-3 pl-4 bg-gray-800 rounded-lg ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <strong className="text-white whitespace-nowrap">Libros: {totalItems}</strong>
          {children}
        </div>
      </div>
    </nav>
  );
};
