import { useState, useContext, useCallback, useMemo } from "react";
import {bookContext } from "../bookContext";

const CardBook = ({ book, handleAddOrRemoveBook, isReadingList }) => {

  const [priority, setPriority] = useState(book.priority)
  const { setReadingList } = useContext(bookContext);

  const handleSelectPriority = useCallback((value, book) => {
    setPriority(value);
    setReadingList(prevReadingList => {
      const updatedReadingList = [...prevReadingList];
      const bookIndex = updatedReadingList.findIndex(item => item.book.ISBN === book.ISBN);
      updatedReadingList[bookIndex].book.priority = value;
      localStorage.setItem("readingList", JSON.stringify(updatedReadingList));
      return updatedReadingList;
    });
  }, [setReadingList]);

  const memoizedBook = useMemo(() => book, [book]);

  const handleStart = (e, data) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(data));
    e.dataTransfer.setData('initialPosition', isReadingList);
  }

  return (
    <section
      className="px-2 h-60 flex flex-col items-center w-full max-[750px]:h-52 max-[750px]:flex-wrap max-[750px]:h-52"
      draggable={true}
      onDragStartCapture={(e) => handleStart(e, memoizedBook)}
    >
      <div className={"flex p-2 bg-[#FFFBF1] rounded-lg " + (isReadingList ? "w-full" : "w-full")}>
        <div className="pl-2 flex gap-3 w-full">

          <img src={memoizedBook.cover} alt={'libro'} className="w-32 h-56 min-w-[120px] max-[750px]:h-48" loading="lazy"/>
    

          <section className="relative w-full">
            <header>

              <h4 className="text-lg font-bold">{memoizedBook.title}</h4>
              <p>{memoizedBook.author.name}</p>
              <p className="text-[12px] text-[#321c1c] max-[850px]:text-[10px]">
                {memoizedBook.genre +" - Año: " + memoizedBook.year + " - Páginas: " + memoizedBook.pages}
              </p>

            </header>

            <main className="mt-1 max-[850px]:mt-0">
              {isReadingList ? (
              <>
                <label className="font-semibold mt-2">Prioridad:</label>
                <br />
                <select 
                  className="w-[30%]"
                  value={priority}
                  onChange={(e) => handleSelectPriority(e.target.value, memoizedBook)}
                  >
                  <option value={10}>10</option>
                  <option value={9}>9</option>
                  <option value={8}>8</option>
                  <option value={7}>7</option>
                  <option value={6}>6</option>
                  <option value={5}>5</option>
                  <option value={4}>4</option>
                  <option value={3}>3</option>
                  <option value={2}>2</option>
                  <option value={1}>1</option>
                </select>
              </>
              ) : <p className="text-[14px] max-[850px]:text-[12px] max-[850px]:text-[13px]">{memoizedBook.synopsis}</p>}
            </main>

            <footer className="absolute bottom-0 left-0 w-full boder-2 flex fle-col justify-center ">

              <button
                onClick={() => handleAddOrRemoveBook(book)}
                className="w-[100%] pb-0.5 text-lg bg-[#F1D16A] rounded transition duration-150 ease-in-out hover:bg-[#F0DDAC] active:bg-[#F0DDAC] font-bold max-[850px]:text-base"
              >
                {isReadingList ? "- Eliminar de la lista" : "+ Agregar libro"}
              </button>
              
            </footer>

          </section>

        </div>
      </div>
    </section>
  );
};

export default CardBook;