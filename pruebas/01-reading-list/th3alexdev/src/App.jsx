import React from "react";
import ListOfBooks from "./components/ListOfBooks";
import Filters from "./components/Filters";
import FiltersProvider from "./context/contextFiltersProvider";
import Header from "./components/Header";

export default function App() {

  return (
    <>
      <FiltersProvider>
        <Header />
        <main className="grid grid-cols-[20%,1fr]">
            <Filters />
            <ListOfBooks />
        </main>
      </FiltersProvider>
    </>
  )
}