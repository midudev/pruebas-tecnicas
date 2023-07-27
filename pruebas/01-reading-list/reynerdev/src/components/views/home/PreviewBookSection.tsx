import React from "react";
import { IBook } from "~/types/books";

interface IPreviewBookSectionProps {
  onClickReading: () => void;
  book: IBook;
  isAlreadySelected: boolean;
}

export const PreviewBookSection = (props: IPreviewBookSectionProps) => {
  const { onClickReading, book, isAlreadySelected } = props;

  return (
    <div className="flex h-full flex-col justify-between gap-8 p-12 ">
      <section className="flex flex-grow-0 flex-col items-center gap-4 ">
        <img
          className="aspect-[1/1.6] w-[200px] object-cover shadow-book2 xl:w-[250px]"
          src={book.cover}
        />
        <div className="flex flex-col justify-center gap-4">
          <div className="text-center text-xl font-semibold 2xl:text-3xl">
            {book.title}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="border-l-4 border-l-softpink pl-3 text-base font-medium 2xl:text-2xl">
            Description
          </span>
          <p className="pl-3 text-base 2xl:text-xl">{book.synopsis}</p>
        </div>
        <div>
          <span className="border-l-4 border-l-softpink pl-3 text-base font-medium 2xl:text-2xl">
            Author
          </span>
          <p className="pl-3 text-base 2xl:text-xl">{book.author.name}</p>
        </div>
        <div>
          <span className="border-l-4 border-l-softpink pl-3 text-base font-medium 2xl:text-2xl">
            Year
          </span>
          <p className="pl-3 text-base 2xl:text-xl">{book.year}</p>
        </div>
      </section>
      <section>
        <button
          disabled={isAlreadySelected}
          onClick={onClickReading}
          className={`w-full  ${
            isAlreadySelected ? "bg-primary-black" : "bg-softpink"
          } py-2 text-2xl text-white`}
        >
          {isAlreadySelected ? "Already in the list !!!" : "Add to list"}
        </button>
      </section>
    </div>
  );
};
