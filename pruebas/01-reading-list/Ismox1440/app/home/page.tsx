import ReadingList from "../components/reading-list";
import { GenreFilter } from "../components/genre-filter";
import { PagesSlider } from "../components/pages-slider";
import LibrarySection from "./components/library-section";
import getLibrary from "@/utils/get-library";
import ClearButton from "../components/clear-button";
import SearchInput from "../components/search-input";

const Home = async () => {
  const library = await getLibrary();
  return (
    <main className="min-h-screen py-[2rem] flex flex-col sm:flex-row gap-11 w-full">
      <div className="flex flex-col gap-1 w-[70%]">
        <div className="flex flex-col lg:flex-row gap-6 mb-11">
          <PagesSlider />
          <GenreFilter />
          <SearchInput />
          <ClearButton />
        </div>
        <LibrarySection library={library} />
      </div>
      <ReadingList />
    </main>
  );
};

export default Home;
