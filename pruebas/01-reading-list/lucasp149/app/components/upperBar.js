"use client";
import { UsePersonajeContext } from "./context/context";

export default function UpperBar(props) {
  const context = UsePersonajeContext();

  return (
    <div className="flex w-full justify-around border-2 border-black  bg-secondary text-white ">
      <div className="flex flex-col">
        <p>Libros disponibles: {context.librosDisponibles?.length}</p>
        <p>Libros seleccionados: {context.librosSeleccionados?.length}</p>
        <p>
          Libros de {context.selectedGenre ? context.selectedGenre : "Todos"} :{" "}
          {context.filteredBooks?.length}
        </p>
      </div>
      <div>
        <p>Generos disponibles: </p>
        <select
          className="text-black"
          onChange={(e) => context.changeSelectedGenre(e.target.value)}
        >
          {context.genres.map((element) => {
            return (
              <option className="text-black" value={element} key={element}>
                {element}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
