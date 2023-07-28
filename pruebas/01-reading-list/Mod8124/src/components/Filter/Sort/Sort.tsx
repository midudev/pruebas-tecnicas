import { FC } from 'react';
import { useBooksStore } from '../../../store/store';

export const Sort: FC = () => {
  const booksStore = useBooksStore();
  const { sort, handleSort } = booksStore;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    handleSort(selectedValue);
  };
  return (
    <div>
      <label className='text-gray-600'>Ordenar por:</label>
      <select className='text-gray-600 outline-none' onChange={handleSelectChange} value={sort}>
        <option value=''>Destacados</option>
        <option value='title'>Titulo</option>
        <option value='Autor'>Autor</option>
      </select>
    </div>
  );
};
