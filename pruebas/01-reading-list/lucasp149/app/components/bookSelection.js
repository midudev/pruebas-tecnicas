"use client";

import Book from "./book";
import { UsePersonajeContext } from "../components/context/context";

export default function BookList(props) {
  const context = UsePersonajeContext();

  return (
    <div>
      <div className="bg-white text-secondary font-extrabold  flex">
        <h1>Libros seleccionados</h1>
      </div>

      <div className="flex flex-wrap bg-primary  border-2 rounded h-full  min-h-screen content-start ">
        {context.librosSeleccionados?.map((element) => (
          <div
            key={element}
            className="flex opacity-90 hover:opacity-100 justify-center items-center text-center"
          >
            <Book isbn={element} />
          </div>
        ))}
      </div>
    </div>
  );
}
