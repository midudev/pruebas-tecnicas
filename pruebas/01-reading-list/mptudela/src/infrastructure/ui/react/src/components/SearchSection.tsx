import { SearchBar } from './SearchBar';
import { GenreSelector } from './GenreSelector';

export const SearchSection = () => {
    return (
        <section className='flex flex-col w-full items-center justify-center bg-base-200 py-16 px-8 gap-12'>
            <h1 className='text-6xl font-bold text-accent-content text-center tracking-wider mb-8'>¡Descubre nuevos libros!</h1>
            <SearchBar />
            <GenreSelector />
        </section>
    );
};
