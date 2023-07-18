import { SearchBar } from "./SearchBar";
import { Select } from "./Select";

export const Filters = () => {
  return (
    <section className="flex flex-row items-center gap gap-5">
      <Select />
      <SearchBar />
    </section>
  );
};
