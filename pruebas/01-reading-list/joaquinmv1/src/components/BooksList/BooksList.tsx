import { P, SectionBooks, UlList } from '.';
import { BookItem } from '..';
import { Book } from '../../models/types';

interface BooksProps {
  availableBooks: Array<Book>;
  handleDragStart: (e: React.DragEvent<HTMLElement>, book: Book, index: number) => void;
  handleDrop: (e: React.DragEvent<HTMLElement>, target: string) => void;
  handleDragOver: (e: React.DragEvent<HTMLElement>) => void;
}

export const BooksList = ({ availableBooks, handleDragStart, handleDragOver, handleDrop }: BooksProps) => {
  return (
    <>
      <SectionBooks>
        <h4>Libros disponibles: <span>{availableBooks.length}</span></h4>
        <UlList
          onDragOver={handleDragOver}
          onDrop={(e: React.DragEvent<HTMLElement>) => handleDrop(e, 'reading')}
        >
          {availableBooks.length > 0 ? availableBooks.map((book, i) => {
              return (
                <BookItem
                  key={book.book.ISBN}
                  book={book}
                  index={i}
                  onDragStart={handleDragStart}
                />
              );
            })
            : <P>Upps no hay mas libros disponibles...</P>}
        </UlList>
      </SectionBooks>
    </>
  );
};
