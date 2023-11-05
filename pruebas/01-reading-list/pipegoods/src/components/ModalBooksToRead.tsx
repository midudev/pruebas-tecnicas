import { useState } from 'react';
import { useBookContext } from '../store/useBookContext';

export default function ModalBooksToRead() {
    const [open, setOpen] = useState(false);
    const { booksToRead, removeBookToRead } = useBookContext();

    return (
        <>
            <button className="bg-white text-blue-500 rounded-lg px-2 py-1 mt-2" onClick={() => setOpen(true)}>
                Ver
            </button>

            <div
                tabIndex={-1}
                className={`fixed top-0 left-0 right-0 z-40 ${
                    open ? 'block' : 'hidden'
                } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 min-h-screen bg-slate-600 bg-opacity-50`}
            >
                <div className="relative w-full max-w-lg max-h-full">
                    <div className="relative bg-white rounded-lg shadow ">
                        <header className="flex items-center justify-between p-5 border-b rounded-t ">
                            <div className="flex flex-col">
                                <h3 className="text-xl font-medium text-gray-900 ">Lista de lectura</h3>
                                <h4 className="text-sm text-gray-900">{booksToRead.length} libros para leer</h4>
                            </div>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center  "
                                onClick={() => setOpen(false)}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </header>
                        <main className="p-6 space-y-6 text-gray-900">
                            <ul className="flex overflow-x-auto gap-5 snap-mandatory snap-x">
                                {booksToRead.map((book) => (
                                    <li key={book.ISBN}>
                                        <article
                                            className="snap-center flex flex-col items-center justify-center w-40 h-60"
                                            onClick={() => removeBookToRead(book)}
                                        >
                                            <img
                                                className="aspect-[1/1.5] h-full object-cover w-full max-w-full rounded hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                                                src={book.cover}
                                                alt={`Portada del libro ${book.title}`}
                                            />
                                        </article>
                                    </li>
                                ))}
                            </ul>
                        </main>
                        <footer className="px-6 py-3">
                            <p className="text-gray-900 text-xs">
                                Dale click al libro que deseas retirar de la lista de lectura.
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
