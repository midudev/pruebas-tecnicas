import useFilters from '../Hooks/useFilters';
import { useState } from 'react';
import GenreFilter from './GenreFilter';
import RangeFilter from './RangeFilter';
import TitleFilter from './TitleFilter';
import {
  MdOutlineArrowDropDown,
  MdFilterAltOff,
  MdOutlineArrowDropUp
} from 'react-icons/md';

export default function Filters({
  setAvailablesBooks,
  availablesBooks,
  books
}) {
  const {
    handleGenreFilter,
    handlePagesFilter,
    handleSearchByTitle,
    clearFilters,
    selectedFilter,
    genres
  } = useFilters(setAvailablesBooks, books);

  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className='flex flex-col gap-2 items-center'>
      <button
        className='flex items-center text-xs w-fit py-1 px-2 bg-slate-600/20 font-light hover:bg-sky-600 shadow-md transition-all ease-in rounded-full active:translate-y-1 mb-4'
        onClick={() => setShowFilters((prev) => !prev)}
      >
        {showFilters ? (
          <>
            <MdOutlineArrowDropUp className='text-xl' /> Ocultar Filtros
          </>
        ) : (
          <>
            <MdOutlineArrowDropDown className='text-xl' />
            Mostrar Filtros
          </>
        )}
      </button>

      {showFilters ? (
        <>
          <div className='flex max-lg:flex-col max-lg:gap-4 gap-8 items-center lg:items-start animate__animated animate__fadeIn'>
            {' '}
            <TitleFilter handleSearchByTitle={handleSearchByTitle} />
            <GenreFilter
              handleGenreFilter={handleGenreFilter}
              genres={genres}
            />
            <RangeFilter
              handlePagesFilter={handlePagesFilter}
              pages={selectedFilter.pages}
            />
          </div>
          <button
            className='text-xs flex gap-0.5 items-center w-fit py-1 px-2 bg-slate-600/20 font-light hover:bg-red-500/80 shadow-md transition-all ease-in rounded-full active:translate-y-1 mt-4 animate__animated animate__fadeIn'
            onClick={() => clearFilters()}
          >
            <MdFilterAltOff />
            Limpiar Filtros
          </button>
        </>
      ) : null}

      <p className='text-center text-sm opacity-40 font-medium'>
        {selectedFilter.genre !== 'all' && (
          <>
            Encontramos{' '}
            <span className='font-bold text-sky-600'>
              {availablesBooks.length}
            </span>{' '}
            {availablesBooks.length > 1 ? 'libros ' : 'libro '} del género{' '}
            <span className='font-bold text-sky-600'>
              {selectedFilter.genre}
            </span>
            <br />
          </>
        )}{' '}
        {selectedFilter.title !== '' && (
          <>
            {' '}
            <span className='font-bold text-sky-600'>
              {availablesBooks.length}
            </span>{' '}
            {availablesBooks.length > 1 ? 'resultados ' : 'resultado '}
            para la búsqueda de{' '}
            <span className='font-bold text-sky-600'>
              {selectedFilter.title}
            </span>
          </>
        )}
      </p>
    </div>
  );
}
