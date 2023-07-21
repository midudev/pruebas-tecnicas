import React from "react";
import jsonData from "../../books.json";
import Book from "./Book";
const Catalogue: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-8 p-8">
        <h1 className="font-bold text-stone-800 text-3xl">Catálogo</h1>
        <div>
          <input className="input" placeholder="Buscar libro por título..." />
        </div>
        <div className="grid grid-cols-5 gap-8">
          {jsonData.library.map((book, i) => {
            return <Book book={book} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
