import { useMemo } from "react";
import loadable from "@loadable/component";

// contexts
import { useLibrary } from "../../contexts/LibraryProvider";

// suspended
const Grid = loadable(() => import("../../components/Grid/GridBook"));

function Home() {
  const { libraryState } = useLibrary();

  const bookToPrints = useMemo(() => {
    return libraryState.books;
  }, [libraryState.books]);

  return (
    <section>
      <Grid books={bookToPrints} />
    </section>
  );
}

export default Home;
