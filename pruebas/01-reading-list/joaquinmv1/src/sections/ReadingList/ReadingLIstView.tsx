import { ContainerClearButton, ContainerReadingList, SectionReading, UlReading } from ".";
import { MainButton, ReadingItem } from "../../components";
import { Book } from "../../models/types";

interface Props {
  readingList: Array<Book>;
  clearReadingList: () => void;
  deleteBook: (book: Book) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>, target: string) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragStart: (e: React.DragEvent<HTMLLIElement>, book: Book) => void;
}

export const ReadingLIstView = ({ 
  readingList, 
  clearReadingList, 
  deleteBook, 
  handleDragStart, 
  handleDragOver, 
  handleDrop 
}: Props) => {
  return (
    <>
      <ContainerReadingList>
        <h4>Libros en la lista de lectura: <span>{readingList.length}</span></h4>
        <SectionReading
          onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, 'available')}
          onDragOver={handleDragOver}
        >
          {readingList?.length === 0 ? (
            <div>
              <h2>Todavia no haz agregado libros</h2>
            </div>
          ) : (
            <section>
              <ContainerClearButton>
                <MainButton title='Clear Books' callback={clearReadingList} />
              </ContainerClearButton>
              <UlReading>
                {readingList?.map((book, i) => (
                  <ReadingItem
                    key={`${book.book.ISBN} ${i}`}
                    handleDragStart={handleDragStart}
                    book={book}
                    deleteBook={deleteBook}
                  />
                ))}
              </UlReading>
            </section>
          )}
        </SectionReading>
      </ContainerReadingList>
    </>
  )
}