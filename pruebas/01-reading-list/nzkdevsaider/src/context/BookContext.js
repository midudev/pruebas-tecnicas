import React, { createContext } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@myreading/db/db";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const watchlist = useLiveQuery(() => db.watchlist.toArray(), []);

  const addWatchlist = async (book) => {
    await db.watchlist.add(book);
  };

  const removeWatchlist = async (book) => {
    await db.watchlist.delete(book.ISBN);
  };

  return (
    <BookContext.Provider value={{ watchlist, addWatchlist, removeWatchlist }}>
      {children}
    </BookContext.Provider>
  );
};
