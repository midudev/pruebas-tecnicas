/* eslint-disable react/prop-types */
import './Cart.css';

import { useId } from 'react';
import { ReadingListIcon } from './Icons.jsx';
import { useReadingList } from '../hooks/useReadingList';

function Book({ cover, title, removeFromReadingList }) {
  return (
    <li className="border-b-[1px] border-b-white pb-4 mb-4 grid gap-2 justify-items-center">
      <img className="w-32 aspect-auto" src={cover} alt={title} />
      <p className="text-white text-center">{title}</p>
      <button className="bg-gray-300 px-2 rounded" onClick={removeFromReadingList}>
        Remover de la lista
      </button>
    </li>
  );
}

export function ReadingList() {
  const itemCheckboxId = useId();
  const { readingList, clearReadingList, removeFromReadingList } =
    useReadingList();

  return (
    <>
      <label className="reading-list-button" htmlFor={itemCheckboxId}>
        <ReadingListIcon />
      </label>
      <input id={itemCheckboxId} type="checkbox" hidden />

      <aside className="reading-list">
        <ul>
          {readingList.map((book) => (
            <Book
              key={book.id}
              removeFromReadingList={() => removeFromReadingList(book)}
              {...book}
            />
          ))}
        </ul>

        <button className='justify-self-center mt-6' onClick={clearReadingList}>
          <ReadingListIcon />
        </button>
      </aside>
    </>
  );
}
