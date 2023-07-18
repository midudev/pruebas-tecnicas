import { RouterProvider } from "react-router-dom";
import { FilteredBooksProvider } from "./context/FilteredBooksProvider";
import { ReadListProvider } from "./context/ReadListProvider";
import { router } from "./router";

export default function App() {
  return (
    <FilteredBooksProvider>
      <ReadListProvider>
        <RouterProvider router={router} />
      </ReadListProvider>
    </FilteredBooksProvider>
  )
}