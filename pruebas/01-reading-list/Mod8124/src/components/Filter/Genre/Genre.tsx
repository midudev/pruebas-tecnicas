import { FC, useState } from 'react';
import { Accordion } from '../../Accordion/Accordion';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { useBooksStore } from '../../../store/store';

export const Genre: FC = () => {
  const booksStore = useBooksStore();
  const { handleFilterByGenre, filterByGenre } = booksStore;

  const genres: string[] = ['Fantasía', 'Ciencia ficción', 'Zombies', 'Terror'];
  const [active, setActive] = useState<string>(filterByGenre);
  const handleActive = (genre: string) => {
    const valueGenre = active === genre ? '' : genre;

    setActive(valueGenre);
    handleFilterByGenre(valueGenre);
  };
  return (
    <Accordion title='Géneros'>
      <div className='border-b-[1px] pb-4'>
        {genres.map((genre) => (
          <div key={genre} className='flex items-center gap-x-2 py-1'>
            {active === genre ? (
              <ImCheckboxChecked onClick={() => handleActive(genre)} className='text-gray-300' />
            ) : (
              <ImCheckboxUnchecked onClick={() => handleActive(genre)} className='text-gray-300' />
            )}
            <p className='text-gray-600'>{genre}</p>
          </div>
        ))}
      </div>
    </Accordion>
  );
};
