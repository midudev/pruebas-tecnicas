import LibrarySection from "./components/Library";
import ReadingSection from "./components/Reading";
import { BooksProvider } from "./bookContext";
import HeaderFilter from "./components/headerFilter";

const App = () => {

  return (
    <BooksProvider>
      <HeaderFilter />
      <main className="flex w-full h-[75vh] mt-1 px-2 max-[750px]:flex-col max-[750px]:justify-around max-[750px]:h-[100dvh] max-[750px]:gap-y-3">
        <LibrarySection />
        <ReadingSection />
      </main>
    </BooksProvider>
  );
};

export default App;
