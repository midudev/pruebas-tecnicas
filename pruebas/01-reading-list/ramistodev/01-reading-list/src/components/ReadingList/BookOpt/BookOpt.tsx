import { useBookOpt } from "./useBookOpt";

export function BookOpt() {
  const {
    isOpen,
    setIsOpen,
    selectedGenre,
    setSelectedGenre,
    maxPages,
    setMaxPages,
    booksMinPages,
    booksMaxPages,
    genres,
  } = useBookOpt();

  return (
    <section className="sm:[w-full] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex justify-center items-center flex-wrap gap-3 z-50">
      <div className="flex flex-wrap gap-5 justify-center items-center p-4">
        <p className="text-xs md:text-sm lg:text-lg mb-2">
          Filtrar por genero:
        </p>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-32 md:w-36 lg:w-40 relative bg-slate-950 py-2 rounded cursor-pointer"
        >
          <p className="text-xs md:text-sm lg:text-lg select-none">
            {selectedGenre || "Todos"}
          </p>
          <div
            className={`absolute left-0 top-[calc(100%+5px)] w-full bg-slate-900 py-1 rounded ${isOpen ? "block" : "hidden"}`}
          >
            {selectedGenre != null && (
              <p
                onClick={() => setSelectedGenre(null)}
                className="text-xs md:text-sm lg:text-lg p-2 hover:bg-slate-800"
              >
                Todos
              </p>
            )}
            {genres.map((genre) => {
              const isSelected = selectedGenre === genre;

              return (
                <p
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`text-xs md:text-sm lg:text-lg p-2 hover:bg-slate-800 ${isSelected ? "hidden" : ""}`}
                >
                  {genre}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs md:text-sm lg:text-lg mb-2">
          Filtrar por páginas:
        </p>
        <input
          type="range"
          value={maxPages}
          onChange={(e) => setMaxPages(Number(e.target.value))}
          min={booksMinPages}
          max={booksMaxPages}
          placeholder="Número de páginas"
          className="rounded w-full bg.-gray-200 accent-white cursor-pointer range-custom"
        />
        <p className="text-xs md:text-sm">Maximo: {maxPages} pág.</p>
      </div>
    </section>
  );
}
