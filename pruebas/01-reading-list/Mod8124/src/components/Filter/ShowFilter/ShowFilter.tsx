import { FC } from 'react';
import { IShowFilter } from '../../../interfaces/interfaces';
import { AiOutlineSetting } from 'react-icons/ai';

export const ShowFilter: FC<IShowFilter> = ({ active, toggleActive }) => {
  return (
    <div>
      <button onClick={toggleActive} className='flex items-center gap-x-1 text-gray-600'>
        {active ? 'Ocultar' : 'Mostrar'} filtros <AiOutlineSetting />
      </button>
    </div>
  );
};
