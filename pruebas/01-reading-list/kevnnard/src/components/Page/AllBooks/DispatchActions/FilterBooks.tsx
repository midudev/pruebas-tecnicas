import { useDispatchActions } from "@/Hooks/useDispatchActions";

const FilterBooks = ({
  filter,
}: {
  filter: { gender: string; pages: number; title: string };
}) => {
  const { handleSearchByGenre, handleSearchByPages, handleSearchByTitle } =
    useDispatchActions();

  return (
    <div className="lg:sticky top-5 flex flex-col justify-start items-start lg:w-[30%]">
      <h3 className="text-3xl pb-5">Filtrar por:</h3>
      {/* FILTRO POR GENERO */}
      <div className="flex flex-col justify-center items-start">
        <label htmlFor="" className="text-left py-1">
          Genero:{" "}
        </label>
        <select
          name="filter"
          className="text-black font-Anton cursor-pointer focus:border-none active:border-none visited:border-none text-xl "
          value={filter.gender}
          onChange={(event) => handleSearchByGenre(event.target.value)}
        >
          <option value="" disabled>
            Filtrar Por Genero
          </option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Zombies">Zombies</option>
          <option value="Terror">Terror</option>
          <option disabled value=""></option>
          <option value="all">Todos </option>
        </select>
      </div>

      {/* FILTRO POR PAGINAS */}
      <div className="flex flex-col justify-center items-start">
        <label htmlFor="" className="text-left pt-5">
          Paginas: {filter.pages > 0 ? filter.pages : "Todos"}
        </label>
        <input
          type="range"
          name=""
          list="tickmarks"
          min={0}
          value={filter.pages}
          onChange={(event) => handleSearchByPages(Number(event.target.value))}
          max={1200}
          spellCheck
          className="w-[15rem] h-fit"
        />
        <datalist id="tickmarks" className="">
          <option value={0} />
          <option value={43} />
          <option value={216} />
          <option value={223} />
          <option value={249} />
          <option value={271} />
          <option value={280} />
          <option value={328} />
          <option value={412} />
          <option value={418} />
          <option value={444} />
          <option value={688} />
          <option value={694} />
          <option value={1200} />
        </datalist>
      </div>

      {/* FILTRO POR TITULO DE LIBRO */}
      <div className="flex flex-col justify-center items-start">
        <label htmlFor="" className="text-left pt-5">
          Nombre Libro:
        </label>
        <input
          type="text"
          name=""
          value={filter.title}
          onChange={(event) =>
            handleSearchByTitle(event.target.value.toLocaleLowerCase())
          }
          className="w-[15rem] h-fit text-black font-Anton px-5"
        />
      </div>
    </div>
  );
};

export default FilterBooks;
