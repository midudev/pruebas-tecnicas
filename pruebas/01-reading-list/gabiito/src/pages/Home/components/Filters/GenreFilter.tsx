import { getGenreList } from "@/actions";
import { Select } from "@/components";
import { useFilters } from "@/hooks";
import { ALL_GENRES, FilterType } from "@/types";

const GenreFilter: React.FC = () => {
  const genres = getGenreList();
  const { add, remove } = useFilters();

  if (genres.length === 0) return null;

  const handleGenreChange = (value: string) => {
    if (value === ALL_GENRES) {
      remove(FilterType.GENRE)
    } else {
      add({ type: FilterType.GENRE, value });
    }
  };
  
  return (
    <div className="flex items-center gap-4">
      <Select
        label="Genero"
        options={genres}
        onSelected={handleGenreChange}
      />
    </div>
  );
}

export default GenreFilter;
