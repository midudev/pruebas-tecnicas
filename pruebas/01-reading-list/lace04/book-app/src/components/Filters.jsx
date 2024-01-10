import React from 'react';

function Filters({
  genres,
  selectedGenre,
  onSelectGenre,
  minPages,
  maxPages,
  onSetMinPages,
}) {
  return (
    <div className='flex w-full justify-between gap-x-2'>
      <div className='flex gap-x-2 md:gap-x-2 m-4 md:m-0'>
        <label htmlFor='genre-select' className='md:ml-4 text-gray-900 dark:text-gray-300'>
          Filtrar por género:
        </label>
        <select
          id='genre-select'
          value={selectedGenre}
          onChange={(e) => onSelectGenre(e.target.value)}
          className='border border-gray-300 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-300'
        >
          <option value=''>Todos</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className='flex gap-x-2 m-4 md:m-0 md:gap-x-8'>
        <label htmlFor='min-pages-range' className='text-gray-900 dark:text-gray-300'>
          Filtrar por páginas:
        </label>
        <input
          type='range'
          id='min-pages-range'
          min={0}
          max={maxPages}
          value={minPages}
          step={100}
          onChange={(e) => onSetMinPages(e.target.value)}
        />
        <span className='md:mr-4 text-gray-900 dark:text-gray-300 md:hidden lg:block'>{minPages}</span>
      </div>
    </div>
  );
}

export default Filters;
