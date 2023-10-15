function GenreFilter({ handleGenreFilter, genres }) {
  return (
    <div className='grid w-fit gap-2'>
      <label
        htmlFor='category-select'
        className='text-sm text-center text-slate-200/40'
      >
        Elige un género:
      </label>
      <select
        className='p-2 bg-gray-700 shadow-sm cursor-pointer rounded-xl  text-slate-100/50'
        id='category-select'
        role='genre-filter'
        onChange={(e) => handleGenreFilter(e)}
      >
        <option value='all' defaultChecked>
          Todos los géneros
        </option>
        {genres?.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default GenreFilter;
