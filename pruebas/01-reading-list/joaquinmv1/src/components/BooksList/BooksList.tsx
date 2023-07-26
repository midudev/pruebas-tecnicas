import { P, SectionBooks, UlList } from '.';
import { BookItem } from '..';
import { Book } from '../../models/types';

interface BooksProps {
  availableBooks: Array<Book>;
  handleDragStart: (e: React.DragEvent<HTMLLIElement>, book: Book) => void;
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
          {availableBooks.length > 0 ? availableBooks.map((book) => {
              return (
                <BookItem
                  key={book.book.ISBN}
                  book={book}
                  onDragStart={(e) => handleDragStart(e, book)}
                />
              );
            })
            : <P>Upps no hay mas libros disponibles...</P>}
        </UlList>
      </SectionBooks>
    </>
  );
};
