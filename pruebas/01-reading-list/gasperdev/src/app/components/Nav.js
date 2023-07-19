import Filter from "./Filter";
import RangeSlider from "./RangeSlider";
import SearchBooks from "./SearchBooks";

export default function Nav() {
  return (
    <nav className="max-w-4xl md:mx-auto ">
      <section className="flex items-center flex-1 col-span-3 mb-4">
        <div className="flex flex-col w-full ">
          <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              Universo
            </span>
            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-purple-500 dark:from-sky-300 dark:via-pink-300 dark:to-purple-500">
              <span> Literario</span>
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-2xl">
            Sumérgete en las páginas de sabiduría y aventura.
          </p>
        </div>
      </section>
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
    </nav>
  );
}
