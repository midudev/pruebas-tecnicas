/* eslint-disable react/prop-types */
// import { useState } from 'react';

export default function BooksCard({
  dataGenre,
  cover,
  genre,
  title,
  author,
  year,
  pages,
  synopsis,
  // ISBN,
  selectBook,
  dataSelected,
  classes,
}) {
  return (
    <article
      className={`card ${classes}`}
      data-genre={dataGenre}
      data-readingList={dataSelected}
    >
      <div onClick={selectBook} className="basis-[5em] grow relative">
        <img className="image" src={cover} alt="book cover" />
      </div>
      <div className="basis-[5em] grow transition-all h-full p-4 flex flex-col gap-2">
        <p className="">{genre}</p>
        <h3 className="text-rg md:text-lg font-bold">
          {title}
          <span className="block text-sm">{author}</span>
        </h3>
        <span>{year}</span>
        <span>{pages} pages</span>
        {/* <span className="block">{ISBN}</span> */}
        <p className="text-sm md:text-md">{synopsis}</p>
      </div>
    </article>
  );
}
