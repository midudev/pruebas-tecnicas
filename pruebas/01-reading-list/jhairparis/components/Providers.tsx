"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "@/lib/globalContext";
import type { StateType } from "@/lib/globalContext";
import { useState } from "react";
import type { BookType, LibraryType } from "@/types/books";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [globalState, setGlobalState] = useState<StateType>({
    library: [],
    read: [],
    genre: new Set<string>(),
    total: 0,
    nRead: 0,
    origin: "",
    isFilter: [false, ""],
  });

  const addRead = (book: BookType) => {
    let count = 0;
    const libraryUpdate = globalState.library.filter((b) => {
      if (b.book.genre === book.genre) count++;
      return b.book.ISBN !== book.ISBN;
    });

    let origin: LibraryType[] = JSON.parse(globalState.origin);
    origin = origin.filter((b) => b.book.ISBN !== book.ISBN);

    const copy = JSON.stringify(origin);

    if (count <= 1) {
      globalState.genre.delete(book.genre);
    }

    setGlobalState({
      ...globalState,
      library: libraryUpdate,
      read: [...globalState.read, book],
      nRead: globalState.nRead + 1,
      genre: globalState.genre,
      origin: copy,
    });
  };

  const addLibrary = (book: BookType) => {
    const readUpdate = globalState.read.filter((b) => b.ISBN !== book.ISBN);
    globalState.genre.add(book.genre);

    let origin: LibraryType[] = JSON.parse(globalState.origin);
    origin = [...origin, { book }];
    const copy = JSON.stringify(origin);

    let filtered: LibraryType[] | null = null;
    if (globalState.isFilter[0] && globalState.isFilter[1] != "")
      filtered = origin.filter((b) => b.book.genre === globalState.isFilter[1]);

    if (filtered != null) {
      setGlobalState({
        ...globalState,
        library: filtered,
        read: readUpdate,
        nRead: globalState.nRead - 1,
        genre: globalState.genre,
        origin: copy,
      });
      return;
    }

    setGlobalState({
      ...globalState,
      library: [...globalState.library, { book }],
      read: readUpdate,
      nRead: globalState.nRead - 1,
      genre: globalState.genre,
      origin: copy,
    });
  };

  const filter = (genre: string | null) => {
    if (genre === null) {
      setGlobalState({
        ...globalState,
        library: JSON.parse(globalState.origin),
        isFilter: [false, ""],
      });
      return;
    }

    const copy = JSON.stringify(globalState.library);

    const filtered = globalState.library.filter((b) => b.book.genre === genre);
    setGlobalState({
      ...globalState,
      library: filtered,
      origin: copy,
      isFilter: [true, genre],
    });
  };

  return (
    <CacheProvider>
      <ChakraProvider>
        <GlobalState.Provider
          value={{
            ...globalState,
            addLibrary,
            addRead,
            setGlobalState,
            filter,
          }}
        >
          {children}
        </GlobalState.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
