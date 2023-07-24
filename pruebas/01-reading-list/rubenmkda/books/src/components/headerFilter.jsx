import { useContext } from "react";
import { bookContext } from "../bookContext";

const HeaderFilter = () => {
  const { setSelectedGenre, selectedGenre, genres, setPages, pages, setTitle } =
    useContext(bookContext);

  return (
    <header className="mx-2 flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl uppercase mt-4 font-black">Librería</h1>
      <span className="mb-2 font-semibold max-[750px]:text-xs">{'(Puedes arrastrar los elementos)'}</span>
      <section className="text-lg w-[98%] flex items-center justify-center bg-[#FFCB80] text-[#000000] py-3 rounded">
        <label className="font-semibold max-[850px]:text-base max-[750px]:text-xs">Nombre del libro:</label>
        <input type="text" className="mr-4 ml-2 rounded border-2 border-[#000000] max-[850px]:text-base max-[750px]:text-xs" onChange={(e) => setTitle(e.target.value)} placeholder="Buscar libro..." />
        <label className="font-semibold max-[850px]:text-base max-[750px]:text-xs">Géneros:</label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="mr-4 ml-2 rounded border-2 border-[#000000] max-[850px]:text-base max-[750px]:text-xs"
        >
          <option value={"Todos"}>Todos</option>
          {genres.map((genre, index) => {
            return (
              <option key={index} value={genre}>
                {genre}
              </option>
            );
          })}
        </select>
        <div className="block flex flex-col items-center justify-center">
          <input
            type="range"
            min={0}
            defaultValue={0}
            max={1000}
            onChange={(e) => setPages(e.target.value)}  
            className="rounded-lg appearance-none bg-[#DAAA63] h-3 w-128 max-[750px]:text-xs" 
          />
          <p className="max-[850px]:text-base max-[750px]:text-xs" >{"Número de páginas " + pages + "."}</p>
        </div>
      </section>
    </header>
  );
};

export default HeaderFilter;
