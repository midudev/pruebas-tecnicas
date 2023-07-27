import React from "react";
import Image from "next/image";

function BookItem({ book, onClick }) {
  return (
    <article
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
      key={book.ISBN}
    >
      <div className="group relative w-full">
        <Image
          className="w-full relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg transition duration-300 ease-in-out hover:scale-[1.02]"
          src={book.cover}
          alt="Next.js Logo"
          width={200}
          height={300}
          priority
          style={{ width: "100%", height: "350px" }}
        />
        <div className="px-2 rounded-lg absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-opacity-90 bg-gray-950 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
          <h2
            role="heading"
            className={`mb-3 text-2xl font-semibold text-white text-center`}
          >
            {book.title}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-white text-center`}>
            {book.synopsis}
          </p>

          <button
            className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
            onClick={onClick}
          >
            Agregar a la lista
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookItem;
