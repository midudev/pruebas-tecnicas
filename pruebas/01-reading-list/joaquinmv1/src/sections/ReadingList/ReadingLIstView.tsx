import { ContainerClearButton, ContainerReadingList, InfoBook, List, SectionReading, UlReading } from ".";
import { MainButton } from "../../components";
import { Book } from "../../models/types";

interface Props {
  readingList: Array<Book>;
  clearReadingList: () => void;
  deleteBook: (book: Book) => void;
  handleDrop: (e: React.DragEvent<HTMLElement>, target: string) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragStart: (e: React.DragEvent<HTMLLIElement>, book: Book, index: number) => void;
  handleDragEnter: (e: React.DragEvent<HTMLElement>, index: number) => void;
  handleDragLeave: (e: React.DragEvent<HTMLElement>) => void;
}

export const ReadingListView = ({
  readingList,
  clearReadingList,
  deleteBook,
  handleDragStart,
  handleDragOver,
  handleDrop,
  handleDragEnter,
  handleDragLeave,
}: Props) => {
  return (
    <>
      <ContainerReadingList>
        <h4>Libros en la lista de lectura: <span>{readingList.length}</span></h4>
        <SectionReading
          className="dropzone"
          onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, 'available')}
          onDragOver={handleDragOver}
          onDragEnter={(e) => handleDragEnter(e, 0)}
          onDragLeave={handleDragLeave}
        >
          {readingList?.length === 0 ? (
            <div>
              <h3>Todavia no has agregado libros, desliza el libro de su preferencia!</h3>
            </div>
          ) : (
            <section>
              <ContainerClearButton>
                <MainButton title='Clear Books' callback={clearReadingList} />
                <p>Reorganiza tu lista a tu eleccion!</p>
              </ContainerClearButton>
              <UlReading onDrop={(e) => handleDrop(e, 'reading')}>
                {readingList?.map((book, i) => (
                  <List
                    key={`${book.book.ISBN} ${i}`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, book, i)}
                    onDragEnter={(e) => handleDragEnter(e, i)}
                  >
                    <img src={book.book.cover} alt={`${book.book.title} in Reading List`} />
                    <InfoBook>
                      <h4>{book.book.title}</h4>
                      <p>{book.book.synopsis}</p>
                    </InfoBook>
                    <button onClick={() => deleteBook(book)}>x</button>
                  </List>
                ))}
              </UlReading>
            </section>
          )}
        </SectionReading>
      </ContainerReadingList>
    </>
  )
}