import { BookCard, BookImage, BookTitle, BookButtons } from '../components';
import { useReadingList } from '../hooks/useReadingList';

import { useFilter } from '../hooks/useFilter';
import { bookUtils } from '../helpers/bookUtils';

import data from '../data/books.json';
const books = data.library.map( item => item.book );
const { minPages, maxPages } = bookUtils(books);

export const BookList = () => {

    const { readingList, onBookReadingChange} = useReadingList();
    const { genreFilter, pagesFilter, onSelectGenre, onSelectPages } = useFilter({genre:'all', pages: maxPages})
    
    const booksByGenre = genreFilter === 'all' ? books : books.filter( book => book.genre === genreFilter );
    const booksByGenreAndPages = pagesFilter === 0 ? booksByGenre : booksByGenre.filter( book => book.pages <= pagesFilter );
    const availableBooks = books.filter( book => !readingList[book.ISBN]?.readingList );
    const availableBooksByGenre = genreFilter === 'all' ? availableBooks : availableBooks.filter( book => book.genre === genreFilter );
    const availableBooksByGenreAndPages = pagesFilter === 0 ? availableBooksByGenre : availableBooksByGenre.filter( book => book.pages <= pagesFilter );
   
    return (
        <div>

            <header className="bg-white shadow">
                <div className="flex flex-row items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    
                    <div className='w-1/2'>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            {availableBooksByGenreAndPages.length} Libros { genreFilter !== 'all' ? `de ${genreFilter}` : '' } Disponibles
                        </h1>
                        <span>Hay { books.length - availableBooks.length} Libros en la lista de Lectura </span>
                    </div>

                    <div className="w-1/2">
                        <label className="block mb-2 text-sm font-medium text-black">
                            Filtrar por género
                            <select
                                id="genre" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 mt-2"
                                value={ genreFilter }
                                onChange={onSelectGenre}
                            >
                                <option value="all">Todos</option>
                                <option value="Fantasía">Fantasía</option>
                                <option value="Ciencia ficción">Ciencia ficción</option>
                                <option value="Zombies">Zombies</option>
                                <option value="Terror">Terror</option>
                            </select>
                        </label>
                        <label className="block mt-2 text-sm font-medium text-black">
                            Filtrar por páginas: { pagesFilter }
                            <input 
                                id="default-range"
                                type="range" 
                                className="accent-green-500 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                min = { minPages }
                                max = { maxPages }
                                value={ pagesFilter }
                                onChange={ onSelectPages } 
                            ></input>
                        </label>
                    </div>
                </div>
                
            </header>
            
            <div className="flex flex-row mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" >

                <div className="w-4/5">

                    <div className="gap-3 pt-5 flex flex-wrap"> 
                        {
                            booksByGenreAndPages.map( book => (
                                <BookCard
                                    key={ book.ISBN }
                                    book={ book }
                                    className="bg-slate-800 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-100 w-60 p-2"
                                    onChange={ onBookReadingChange }
                                    value={ readingList[book.ISBN]?.readingList }
                                >
                                    <BookImage
                                        className="object-cover relative flex items-end overflow-hidden mb-3 w-full h-72"
                                        style={ readingList[book.ISBN]?.readingList ? { opacity: 0.25} : {}}
                                    />
                                    <BookTitle 
                                        className="text-white text-sm font-semibold" 
                                    />
                                    <BookButtons 
                                        className="mt-3 flex items-center justify-center space-x-1.5 bg-green-500 px-4 py-1.5 text-white duration-100 hover:bg-green-600" 
                                    />
                                </BookCard>
                            ))
                        }
                    </div>
                
                </div>
                
                <div className="w-1/5">        
                    <h1 className="text-3xl font-bold text-white">Lista de lectura</h1>
                    <div className="gap-1 pt-5 flex flex-wrap"> 
                        {
                            Object.entries(readingList).map( ([key, book]) => (
                                <BookCard
                                    key={ key }    
                                    book={ book }
                                    className="bg-slate-800 shadow-lg p-1 w-30"
                                    value={ book.readingList }
                                    onChange={ onBookReadingChange }
                                >
                                    <BookImage 
                                        className="object-cover relative flex items-end overflow-hidden mb-3 w-full h-32"
                                    />
                                    <BookButtons
                                        className="mt-3 flex items-center justify-center space-x-1.5 bg-green-500 px-4 py-1.5 text-white duration-100 hover:bg-green-600" 
                                    />
                                </BookCard>
                            ))  
                        }
                    </div>
                </div>

            </div>

            <div className="footer-container bg-slate-800 text-white text-center py-4">
                <p>⚛︎ 2023 timudev | Prueba Técnica: 01 - Reading List (FrontEnd - Nivel: Junior)</p>
            </div>

        </div>
    )
}
