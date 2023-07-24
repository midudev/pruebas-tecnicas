import { useContext } from "react";
import CardBook from "./cardBook";
import { bookContext } from "../bookContext";

const LibrarySection = () => {

  const { addBookToReadingList, filteredLibrary, filteredReadingList, removeBookFromReadingList } = useContext(bookContext);

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    const data = e.dataTransfer.getData('text/plain')
    const initialPosition = e.dataTransfer.getData('initialPosition')
    if(initialPosition !== 'undefined') removeBookFromReadingList(JSON.parse(data))
  }

  return (
    <section className="w-1/2 h-[87.5%] max-[750px]:w-full max-[750px]:h-[40%]">
      <header className="w-full mr-1 text-center">
        <h2 className="text-3xl font-bold max-[850px]:text-2xl">
          {"Libros disponibles " + filteredLibrary.length}
        </h2>
        <span className="max-[750px]:text-xs">
          {filteredReadingList.length + " libros en lista de lectura"}
        </span>
      </header>
      <main className="flex flex-wrap h-full overflow-y-auto mt-1 mx-2 p-4 gap-y-5 bg-[#FFCB80] rounded-lg max-[750px]:h-[95%] max-[750px]:overflow-x-auto max-[750px]:overflow-y-hidden max-[750px]:flex-col max-[750px]:gap-y-0" onDropCapture={(e) => handleDrop(e)} onDragOver={handleDragOver}>
        {filteredLibrary.map((books) => {
          const book = books.book;
          return (
            <CardBook
              book={book}
              handleAddOrRemoveBook={addBookToReadingList}
              key={book.ISBN}
            />
          );
        })}
      </main>
    </section>
  );
};

export default LibrarySection;
