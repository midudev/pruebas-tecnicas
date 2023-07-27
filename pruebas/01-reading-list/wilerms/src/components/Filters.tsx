import { getGenres } from "@services/books"
import Genre from "./Genre"
import { HorizontalList } from "./HorizontalList"
import { useFiltersContext } from "contexts/filters"

const genres = getGenres()

const Filters = () => {
  const { genresFilter, togleGenreInFilters, cleanGenresFilter } = useFiltersContext()

  console.log({ genresFilter })

  return (
    <section className="w-full h-full px-5 pb-5 flex items-center">
      <HorizontalList className="w-full" scrollSize={200}>
        <div className="grid grid-flow-col gap-5 max-w-full">
          {genres.map((genre, index) => {

            return (index !== 0)
              ? <Genre
                  key={genre}
                  genre={genre}
                  isActive={genresFilter.includes(genre)}
                  onClick={togleGenreInFilters}
                />
              : <Genre
                  key={genre}
                  genre={genre}
                  isActive={!genresFilter.length}
                  onClick={cleanGenresFilter}
                />
          })}
        </div>
      </HorizontalList>
    </section>
  );
};

export default Filters;
