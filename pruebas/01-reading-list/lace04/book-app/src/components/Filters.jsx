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
      <div className='flex gap-x-8'>
        <label htmlFor='genre-select'>Filtrar por género:</label>
        <select
          id='genre-select'
          value={selectedGenre}
          onChange={(e) => onSelectGenre(e.target.value)}
          className='border border-gray-300 rounded-md bg-zinc-800'
        >
          <option value=''>Todos</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className='flex gap-x-8'>
        <label htmlFor='min-pages-range'>Filtrar por páginas: </label>
        <input
          type='range'
          id='min-pages-range'
          min={0}
          max={maxPages}
          value={minPages}
          step={100}
          onChange={(e) => onSetMinPages(e.target.value)}
        />
        <span>{minPages}</span>
      </div>
    </div>
  );
}

export default Filters;
