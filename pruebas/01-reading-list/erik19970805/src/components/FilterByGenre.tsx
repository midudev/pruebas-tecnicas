import useBook from '@hooks/useBook';
import { type ChangeEventHandler, type FC } from 'react';

interface Props {
  genres: string[];
  genre: string;
}

export const FilterByGenre: FC<Props> = ({ genres, genre }) => {
  const { filterByGenre } = useBook();
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => filterByGenre(e.target.value);

  return (
    <div className="max-w-sm w-full">
      <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Filtro por género</label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleChange}
        value={genre}
      >
        <option value={'all'}>Todos</option>
        {genres.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
