"use client";

import Book from "./book";
import { UsePersonajeContext } from "../components/context/context";

export default function BookList(props) {
  const context = UsePersonajeContext();

  return (
    <div>
      <div className="bg-white text-secondary font-extrabold  flex">
        <h1>Libros disponibles</h1>
        <div className="w-3/4 flex column justify-end items-center  ">
          <div className="bg-third w-5/6  h-1 opacity-50">&nbsp;</div>
        </div>
      </div>
      <div className="flex flex-wrap content-start bg-white rounded h-full min-h-screen py-7 ">
        {context.filteredBooks?.map((element) => (
          <div
            key={element}
            className="flex opacity-90 hover:opacity-100 justify-center items-center text-center "
          >
            <Book isbn={element} />
          </div>
        ))}
      </div>
    </div>
  );
}
