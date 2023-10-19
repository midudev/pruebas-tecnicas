/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatchActions } from "@/Hooks/useDispatchActions";
import { useAppSelector } from "@/Hooks/useRedux";
import { FeaturedInterface } from "@/interfaces/Book.interface";
import { useEffect } from "react";

const Featured = (ISBN: FeaturedInterface) => {
  const { oneBook } = useAppSelector((state) => state.books);
  const { handleGetOneBook } = useDispatchActions();

  useEffect(() => {
    handleGetOneBook(ISBN);
  }, [ISBN]);

  return (
    <>
      <section
        className={`relative bg-[url('/images/bg/4.jpg')] bg-center bg-no-repeat bg-cover h-[70vh] w-full `}
      >
        <div className="h-[100%] w-[100%] flex md:grid md:grid-cols-2 items-center">
          <div className="relative col-start-2 flex max-w-lg m-auto flex-col gap-5 justify-center">
            {oneBook && (
              <>
                <span className="absolute -top-10 right-0 text-center text-xs bg-red-600 px-10 py-2 rounded-xl font-CinceBold">
                  Libro destacado
                </span>
                <h3 className="text-7xl text-center">{oneBook.book.title}</h3>
                <p className="text-sm text-center">{oneBook.book.synopsis}</p>
                <p className="text-center text-xs text-gray-400 font-CinceBold">
                  {oneBook.book.author.name} - {oneBook.book.year}
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
