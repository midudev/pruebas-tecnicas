import useBookContext from '@/hooks/useBookContext';
import { useEffect, useRef, useState } from 'react';

export default function GenreFilter() {
  const [showMenu, setShowMenu] = useState(false);
  const [genreInput, setGenreInput] = useState('');
  const { library, updateFilters, filters } = useBookContext();

  const _genreRef = useRef<HTMLDivElement | null>(null);

  const genres = Array.from(new Set(library.map((book) => book.genre.toLowerCase())));

  const handleOnFocus = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (_genreRef.current && !_genreRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };

    window.addEventListener('click', handler);

    return () => {
      window.removeEventListener('click', handler);
    };
  }, []);

  const handleGenreFilter = (genre: string) => {
    let draft;

    if (filters.genres.includes(genre)) {
      draft = [...filters.genres].filter((value) => value !== genre);
    } else {
      draft = [...filters.genres, genre];
    }

    updateFilters('genres', draft);
  };

  return (
    <div ref={_genreRef} id="dropdownContainer" className="relative rounded-md h-full select-none">
      <label htmlFor="dropdownInput">
        <span className="font-bold block mb-1">Filtrar por género</span>
        <ul className="flex flex-wrap gap-1 mb-1 max-w-[206px]">
          {filters.genres.map((selectedGenre) => (
            <li
              key={'selected-genre-' + selectedGenre}
              className="bg-cyan-600 text-white flex items-center px-2 py-[2px] rounded-full gap-1 capitalize text-sm"
            >
              {selectedGenre}
              <span
                className="font-bold text-xs cursor-pointer"
                onClick={() => handleGenreFilter(selectedGenre)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          id="dropdownInput"
          type="text"
          placeholder="Seleccionar género/s..."
          className="outline-none bg-transparent placeholder-gray-600 p-2 border-2 border-cyan-600 rounded-md"
          onFocus={handleOnFocus}
          value={genreInput}
          onChange={(e) => setGenreInput(e.target.value)}
        />
      </label>
      {showMenu && (
        <div
          id="dropdownMenu"
          className="absolute w-full border border-gray-400 rounded-md overflow-auto max-h-28 z-10 bg-white  shadow-lg"
        >
          {genres.map((genre) => (
            <div
              key={'dropdown-genre-option' + genre}
              className={`p-2 cursor-pointer ${
                genre.toLowerCase().includes(genreInput.toLowerCase()) ? '' : 'hidden'
              } ${
                filters.genres.includes(genre.toLowerCase()) ? 'bg-sky-300' : 'hover:bg-sky-200'
              }`}
              onClick={() => handleGenreFilter(genre)}
            >
              <span className="capitalize">{genre}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
