import { useContext, useRef } from 'react';
import { FiltersContext } from '../context/contextFiltersProvider';
import { SearchIcon, CloseIcon } from './Icons';

export default function Header() {
  const searchInputRef = useRef();
  const { filters, setFilters } = useContext(FiltersContext);

  const { sortByTitle } = filters;

  const removeSortByTitle = () => {
    setFilters({ ...filters, sortByTitle: '' });
    searchInputRef.current.value = ''
  };

  return (
    <>
      <header className='absolute right-0 w-4/5 flex flex-col items-center py-6'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className='relative'>
            <input
              type='text'
              placeholder='¿En qué libro estás pensando?'
              className='w-[400px] px-5 pr-10 py-2 rounded-full'
              onInput={(e) => {
                setFilters({ ...filters, sortByTitle: e.target.value });
              }}
              ref={searchInputRef}
            />
            <button
              className={`absolute top-1/2 right-4 translate-y-[-50%] ${
                sortByTitle ? '' : 'pointer-events-none'
              }`}
            >
              {sortByTitle ? (
                <span onClick={removeSortByTitle}>
                  <CloseIcon />
                </span>
              ) : (
                <SearchIcon />
              )}
            </button>
          </div>
        </form>
      </header>
    </>
  );
}
