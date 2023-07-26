/* eslint-disable react/prop-types */
import './ReadingList.css';

import { useId } from 'react';
import { ReadingListIcon, RemoveBookIcon } from './Icons.jsx';
import { useReadingList } from '../hooks/useReadingList';

function Book({ cover, title, removeFromReadingList }) {
  return (
    <li className="border-b-[1px] border-b-white pb-4 mb-5 grid gap-2 justify-items-center relative">
      <img className="w-28 aspect-auto" src={cover} alt={title} />
      <p className="text-white text-center">{title}</p>
      <button
        className="remove-button-item bg-gray-50 text-red-600 p-[2px] rounded-full absolute 
        -top-2 right-1 border border-black"
        onClick={removeFromReadingList}
      >
        <RemoveBookIcon  />
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
      <div className="reading-list-count">{readingList.length}</div>

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

        <button
          className="justify-self-center mt-6 text-white bg-red-800 py-1 px-2 rounded"
          onClick={clearReadingList}
        >
          Limpiar lista
        </button>
      </aside>
    </>
  );
}
