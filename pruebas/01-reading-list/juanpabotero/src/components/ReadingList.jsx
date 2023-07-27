/* eslint-disable react/prop-types */
import './ReadingList.css';

import { useId } from 'react';
import { ReadingListIcon, RemoveBookIcon, TrashIcon } from './Icons.jsx';
import { useReadingList } from '../hooks/useReadingList';

function Book({ cover, title, removeFromReadingList }) {
  return (
    <li className="grid gap-2 justify-items-center content-start relative">
      <img className="h-36 aspect-auto" src={cover} alt={title} />
      <p className="text-gray-100 text-sm text-center">{title}</p>
      <button
        className="remove-button-item bg-gray-900 text-red-600 p-[2px] rounded-full absolute 
        -top-2 right-1 border border-red-700"
        onClick={removeFromReadingList}
      >
        <RemoveBookIcon />
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
        <h3 className='text-gray-100 font-bold'>Lista de lectura</h3>
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
          className="clear-list-button flex gap-1 justify-center justify-self-center items-center mt-4 text-white bg-red-800 p-2 rounded-full"
          onClick={clearReadingList}
        >
          <TrashIcon />
        </button>
      </aside>
    </>
  );
}
