import { useId } from 'react';
import { useReadingList } from '../hooks/useReadingList';
import {
  ReadingListIcon,
  RemoveBookIcon,
  SadFaceIcon,
  TrashIcon,
} from './Icons.jsx';
import '../styles/ReadingList.css';

function Book({ cover, title, removeFromReadingList }) {
  return (
    <li className="grid gap-2 justify-items-center content-start relative">
      <img className="h-36 aspect-auto" src={cover} alt={title} />
      <p className="text-gray-100 text-sm text-center">{title}</p>
      <button
        className="remove-button-item bg-gray-900 text-red-600 p-[2px] rounded-full absolute 
        -top-2 right-1 "
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
      <label
        className="reading-list-button items-center bg-lime-400 rounded-s cursor-pointer flex h-8 
        justify-center p-1 fixed right-[46px] top-4 transition-all duration-300 w-8 z-50 hover:scale-110"
        htmlFor={itemCheckboxId}
      >
        <ReadingListIcon />
      </label>
      <input id={itemCheckboxId} type="checkbox" hidden />
      <div
        className="items-center bg-lime-400 rounded-e flex font-bold h-8 justify-center p-1 
        fixed right-[20px] top-4 w-6 z-50"
      >
        {readingList.length}
      </div>

      <aside
        className="reading-list content-start bg-gray-950 hidden h-full justify-items-center
        overflow-y-scroll p-8 fixed right-0 top-0 w-80 z-40"
      >
        <h3 className="text-gray-100 font-bold text-xl mt-5">
          Lista de lectura
        </h3>
        {readingList.length === 0 && (
          <div className="grid gap-2 justify-items-center text-gray-100 mt-10">
            <SadFaceIcon />
            <p className="text-center">
              Aún no tienes libros en tu lista. Prueba agregando uno!
            </p>
          </div>
        )}
        {readingList.length > 0 && (
          <ul className="grid gap-x-3 gap-y-6 grid-cols-2 mt-10">
            {readingList.map((book) => (
              <Book
                key={book.id}
                removeFromReadingList={() => removeFromReadingList(book)}
                {...book}
              />
            ))}
          </ul>
        )}

        {readingList.length > 0 && (
          <button
            className="clear-list-button flex gap-1 justify-center justify-self-center items-center mt-6 
          text-white bg-red-800 p-2 rounded-full"
            onClick={clearReadingList}
          >
            <TrashIcon />
          </button>
        )}
      </aside>
    </>
  );
}
