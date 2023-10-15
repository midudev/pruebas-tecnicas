import { useRef } from 'react';
import { MdSearch } from 'react-icons/md';

function TitleFilter({ handleSearchByTitle }) {
  const queryRef = useRef();

  return (
    <form
      onSubmit={(e) => handleSearchByTitle(e, queryRef.current.value)}
      className='flex flex-col gap-2'
    >
      <label
        htmlFor='search-input'
        className='text-sm text-center text-slate-200/40'
      >
        Busca tu titulo favorito:
      </label>
      <div className='relative flex gap-2'>
        <input
          placeholder='Ej: Harry Potter, Dune'
          role='title-filter'
          className='rounded-lg outline-none p-2 pr-8 bg-black/10 shadow-inner shadow-black/50 font-medium border border-transparent focus:border-sky-600 placeholder:opacity-30'
          type='text'
          ref={queryRef}
        />
        <button
          className='absolute right-2 top-3 hover:text-sky-600 hover:scale-125 transition-all ease-in'
          type='submit'
          role='search'
        >
          <MdSearch className='text-xl' />
        </button>
      </div>
    </form>
  );
}

export default TitleFilter;
