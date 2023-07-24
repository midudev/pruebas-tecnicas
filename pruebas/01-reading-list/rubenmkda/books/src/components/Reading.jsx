import { useContext } from "react";
import { bookContext } from "../bookContext";
import CardBook from "./cardBook";

const ReadingSection = () => {
  const { sortReadingList, removeBookFromReadingList, addBookToReadingList, sortByPriority, setSortByPriority } = useContext(bookContext);

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    const data = e.dataTransfer.getData('text/plain')
    const initialPosition = e.dataTransfer.getData('initialPosition')
    if (initialPosition === 'undefined') addBookToReadingList(JSON.parse(data))
  }

  return (
    <section className="w-2/4 h-full rounded  max-[750px]:w-[97%] max-[750px]:h-[49%] max-[750px]:ml-2" onDragOver={handleDragOver} onDropCapture={(e) => handleDrop(e)}>
      <header className="flex items-center justify-center gap-x-8 my-1 mb-1.5">
        <h2 className="text-3xl font-bold text-center py-2 max-[850px]:text-2xl">Lista de lectura</h2>
        <button className="bg-[#180000] text-[#F2EBE3] text-sm px-4 py-2 font-bold  uppercase rounded max-[850px]:text-xs" onClick={() => setSortByPriority(!sortByPriority)}>{sortByPriority ? 'Ordenar' : 'desordenar'}</button>
      </header>
      <main className="flex flex-col  h-[86.5%] p-4 gap-y-4 overflow-y-auto w-full bg-[#FFCB80]  max-[750px]:h-[80%] max-[750px]:overflow-x-auto max-[750px]:overflow-y-hidden max-[750px]:flex-wrap">
        {sortReadingList.map((item) => {
          const book = item.book
          return (
            <CardBook
              book={book}
              handleAddOrRemoveBook={removeBookFromReadingList}
              isReadingList={true}
              key={book.ISBN}
            />
          );
        })}
      </main>
    </section>
  );
};

export default ReadingSection;
