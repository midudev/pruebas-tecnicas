import { FC } from 'react';
import { ICard } from '../../interfaces/interfaces';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';
import { useBooksStore } from '../../store/store';
import { CardSkeleton } from './CardSkeleton';
import { useToggle } from '../../hooks/useToggle';

export const Card: FC<ICard> = ({ book, lecture }) => {
  const booksStore = useBooksStore();
  const { addLecture, removeLecture } = booksStore;

  return (
    <article className='w-full max-w-[250px]'>
      <picture>
        <img
          className='w-full h-full max-h-[366px]'
          src={book.cover}
          alt={'book cover' + book.title}
          loading='lazy'
        />
      </picture>
      <div className='flex justify-between items-center pt-2'>
        <h3 className='text-gray-600'>{book.title}</h3>
        {lecture ? (
          <BsFillBookmarkFill
            className='text-blue-400'
            onClick={() => {
              removeLecture({ book });
            }}
          />
        ) : (
          <BsBookmark
            className='text-blue-400'
            onClick={() => {
              addLecture({ book });
            }}
          />
        )}
      </div>
      <p className='text-gray-400'>{book.author.name}</p>
    </article>
  );
};
