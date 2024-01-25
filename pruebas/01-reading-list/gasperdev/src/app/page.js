import Filter from "./components/Filter";
import Header from "./components/Header";
import ListOfBooks from "./components/ListOfBooks";
import Nav from "./components/Nav";
import RangeSlider from "./components/RangeSlider";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SearchBooks from "./components/SearchBooks";
export default function Home() {
  return (
    <section className="max-w-4xl min-h-screen mx-auto bg-white md:mx-auto dark:bg-slate-800">
      <Header />
      <Nav>
        <section className="flex flex-col w-full md:flex-row md:gap-2 ">
          <Filter />
          <span className="hidden mx-2 mt-2 text-gray-400 md:inline">/</span>
          <div className="grid gap-4 mt-3 md:mt-0">
            <SearchBooks />
          </div>
          <div className="grid items-center flex-1 col-span-3 gap-4 mt-3 md:mt-0">
            <RangeSlider />
          </div>
        </section>
      </Nav>
      <ScrollToTopButton />
      <ListOfBooks />
    </section>
  );
}
