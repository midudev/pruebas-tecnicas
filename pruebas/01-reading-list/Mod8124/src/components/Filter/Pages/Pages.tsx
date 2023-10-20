import { FC, useState } from 'react';
import { Accordion } from '../../Accordion/Accordion';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { useBooksStore } from '../../../store/store';

export const Pages: FC = () => {
  const pagesRange: (number[] | string[])[] = [[43, 223], [249, 328], [412, 444], ['Over  488']];
  const booksStore = useBooksStore();
  const { handleFilterByPages, filterByPages } = booksStore;
  const [active, setActive] = useState<string>(filterByPages);
  const handleActive = (pages: string) => {
    const valuePage = active === pages ? '' : pages;

    setActive(valuePage);
    handleFilterByPages(valuePage);
  };

  return (
    <Accordion title='Páginas'>
      <div className='border-b-[1px] pb-4'>
        {pagesRange.map((pageRange) => {
          const [start, end] = pageRange;

          const label = end ? `${start} - ${end}` : `${start}`;

          return (
            <div key={label} className='flex items-center gap-x-2 py-1'>
              {active === label ? (
                <ImCheckboxChecked onClick={() => handleActive(label)} className='text-gray-300' />
              ) : (
                <ImCheckboxUnchecked
                  onClick={() => handleActive(label)}
                  className='text-gray-300'
                />
              )}
              <p className='text-gray-600'>{label}</p>
            </div>
          );
        })}
      </div>
    </Accordion>
  );
};
